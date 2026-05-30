/* ============================================================
   GMOVE — Main JS   version 3.0 · 2026
   ============================================================ */

(function () {
  'use strict';

  /* ---- Helpers -------------------------------------------- */
  const qs  = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const trackGmoveEvent = (name, detail = {}) => {
    const payload = {
      path: window.location.pathname,
      ...detail
    };

    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: name, ...payload });
    if (typeof window.gtag === 'function') window.gtag('event', name, payload);
    if (typeof window.plausible === 'function') window.plausible(name, { props: payload });
    if (typeof window.clarity === 'function') window.clarity('event', name);
    document.dispatchEvent(new CustomEvent('gmove:analytics', { detail: { name, payload } }));
  };

  document.addEventListener('click', event => {
    const target = event.target.closest('[data-track], a[href*="#cta-final"], .article-cta a, .ed-bridge__actions a, [data-editorial-featured], .ed-card');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    const isCta = target.matches('a[href*="#cta-final"], .article-cta a, .ed-bridge__actions a');
    const isEditorial = target.matches('[data-editorial-featured], .ed-card');
    const label = target.dataset.track || target.getAttribute('aria-label') || target.textContent?.replace(/\s+/g, ' ').trim() || 'interaction';
    const eventName = isCta ? 'cta_click' : isEditorial ? 'editorial_click' : 'site_click';

    trackGmoveEvent(eventName, {
      label: label.slice(0, 120),
      href: href.slice(0, 180)
    });
  });

  /* ==========================================================
     NAV — blur on scroll
     ========================================================== */
  const nav = qs('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================================
     MOBILE MENU
     ========================================================== */
  const menuBtn    = qs('.nav__menu-btn');
  const mobileMenu = qs('.nav__mobile');
  const closeBtn   = qs('.nav__mobile-close');
  const setMobileMoreExpanded = expanded => {
    qs('.mobile-tabbar__item--button')?.setAttribute('aria-expanded', String(expanded));
  };

  if (mobileMenu && !mobileMenu.id) mobileMenu.id = 'site-mobile-menu';
  if (menuBtn && !menuBtn.hasAttribute('aria-expanded')) menuBtn.setAttribute('aria-expanded', 'false');
  if (menuBtn && mobileMenu) menuBtn.setAttribute('aria-controls', mobileMenu.id);

  const openMenu  = () => {
    mobileMenu?.classList.add('is-open');
    menuBtn?.classList.add('is-open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    setMobileMoreExpanded(true);
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu?.classList.remove('is-open');
    menuBtn?.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    setMobileMoreExpanded(false);
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  /* ==========================================================
     NAV — compact desktop + app-like mobile bottom bar
     ========================================================== */
  const navLinks = qs('.nav__links');
  const secondaryNavLabels = ['Manifesto', 'Segurança', 'Privacidade', 'Termos'];

  function linkLabel(link) {
    return link?.textContent?.replace(/\s+/g, ' ').trim() || '';
  }

  function iconSvg(name) {
    const paths = {
      home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
      app: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 6h4"/><path d="M11 18h2"/>',
      book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"/><path d="M20 17H6.5A2.5 2.5 0 0 0 4 19.5"/><path d="M8 7h7"/><path d="M8 11h5"/>',
      updates: '<path d="M4 12a8 8 0 0 1 13.7-5.6"/><path d="M18 3v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.6"/><path d="M6 21v-4h4"/>',
      more: '<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
  }

  if (navLinks) {
    const desktopSecondary = qsa(':scope > li > a', navLinks)
      .filter(link => secondaryNavLabels.includes(linkLabel(link)));

    if (desktopSecondary.length) {
      document.body.classList.add('nav-enhanced');

      const moreItem = document.createElement('li');
      moreItem.className = 'nav__more';
      moreItem.innerHTML = `
        <button class="nav__more-btn" type="button" aria-expanded="false" aria-haspopup="true">
          Sobre
          <span class="nav__more-chevron" aria-hidden="true"></span>
        </button>
        <div class="nav__more-menu" role="menu"></div>
      `;

      const moreButton = qs('.nav__more-btn', moreItem);
      const moreMenu = qs('.nav__more-menu', moreItem);
      const hasCurrentSecondary = desktopSecondary.some(link => link.hasAttribute('aria-current'));

      desktopSecondary.forEach(link => {
        const parent = link.closest('li');
        parent?.classList.add('nav__item--desktop-secondary');

        const clone = link.cloneNode(true);
        clone.setAttribute('role', 'menuitem');
        moreMenu.appendChild(clone);
      });

      if (hasCurrentSecondary) moreItem.classList.add('is-current');

      const insertAfter = qsa(':scope > li > a', navLinks)
        .find(link => linkLabel(link) === 'Atualizações')
        ?.closest('li');
      if (insertAfter?.nextSibling) {
        navLinks.insertBefore(moreItem, insertAfter.nextSibling);
      } else {
        navLinks.appendChild(moreItem);
      }

      const closeMore = () => {
        moreItem.classList.remove('is-open');
        moreButton?.setAttribute('aria-expanded', 'false');
      };
      const toggleMore = () => {
        const isOpen = moreItem.classList.toggle('is-open');
        moreButton?.setAttribute('aria-expanded', String(isOpen));
      };

      moreButton?.addEventListener('click', event => {
        event.stopPropagation();
        toggleMore();
      });
      document.addEventListener('click', event => {
        if (!moreItem.contains(event.target)) closeMore();
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMore();
      });
      moreMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMore));
    }
  }

  if (mobileMenu) {
    const mobileLinks = qsa('a', mobileMenu);
    const byLabel = label => mobileLinks.find(link => linkLabel(link) === label);
    const homeLink = byLabel('Início') || qs('.nav__logo');
    const tabItems = [
      { label: 'Início', short: 'Início', icon: 'home', link: homeLink },
      { label: 'O app', short: 'App', icon: 'app', link: byLabel('O app') },
      { label: 'Editorial', short: 'Editorial', icon: 'book', link: byLabel('Editorial') },
      { label: 'Atualizações', short: 'Updates', icon: 'updates', link: byLabel('Atualizações') }
    ].filter(item => item.link);

    const bottomNav = document.createElement('nav');
    bottomNav.className = 'mobile-tabbar';
    bottomNav.setAttribute('aria-label', 'Navegação rápida');

    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
    const currentHash = window.location.hash;

    tabItems.forEach(item => {
      const href = item.link.getAttribute('href') || '#';
      const tabLink = document.createElement('a');
      tabLink.className = 'mobile-tabbar__item';
      tabLink.href = href;
      tabLink.innerHTML = `${iconSvg(item.icon)}<span>${item.short}</span>`;

      const resolved = new URL(href, window.location.href);
      const itemPath = resolved.pathname.replace(/\/index\.html$/, '/');
      const isActive =
        item.label === 'Editorial' ? currentPath.includes('/conteudo/') :
        item.label === 'Atualizações' ? currentPath.endsWith('/atualizacoes.html') || currentPath.endsWith('/atualizacoes') || currentPath.endsWith('/atualizacoes/') :
        item.label === 'Início' ? currentPath === '/' && !currentHash :
        item.label === 'O app' ? currentPath === '/' && currentHash === '#experiencia' :
        itemPath === currentPath;

      if (isActive) tabLink.setAttribute('aria-current', 'page');
      tabLink.addEventListener('click', closeMenu);
      bottomNav.appendChild(tabLink);
    });

    const moreTab = document.createElement('button');
    moreTab.type = 'button';
    moreTab.className = 'mobile-tabbar__item mobile-tabbar__item--button';
    moreTab.setAttribute('aria-label', 'Abrir mais opções');
    moreTab.setAttribute('aria-expanded', 'false');
    if (mobileMenu.id) moreTab.setAttribute('aria-controls', mobileMenu.id);
    moreTab.innerHTML = `${iconSvg('more')}<span>Mais</span>`;

    const hiddenCurrent = qsa('.nav__mobile__link--secondary[aria-current], .nav__mobile a[aria-current]', mobileMenu)
      .some(link => !tabItems.some(item => item.link === link));
    if (hiddenCurrent) moreTab.setAttribute('aria-current', 'page');

    moreTab.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
      moreTab.setAttribute('aria-expanded', String(!isOpen));
    });

    bottomNav.appendChild(moreTab);
    document.body.appendChild(bottomNav);
  }

  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  closeBtn?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(el => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* ==========================================================
     SMOOTH SCROLL for # links
     ========================================================== */
  qsa('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = qs(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ==========================================================
     BIDIRECTIONAL SCROLL REVEAL
     ========================================================== */
  const revealEls = qsa('[data-reveal]');
  if (revealEls.length) {
    revealEls.forEach(el => el.classList.add('is-below'));

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          el.classList.remove('is-above', 'is-below');
        } else {
          if (entry.boundingClientRect.top < 0) {
            el.classList.add('is-above');
            el.classList.remove('is-revealed', 'is-below');
          } else {
            el.classList.add('is-below');
            el.classList.remove('is-revealed', 'is-above');
          }
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -28px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ==========================================================
     EDITORIAL FEATURED — subtle article switch
     ========================================================== */
  const editorialFeatured = qs('[data-editorial-featured]');
  if (editorialFeatured) {
    const meta     = qs('[data-featured-meta]');
    const visual   = qs('.ed-featured__visual', editorialFeatured);
    const tag      = qs('[data-featured-tag]', editorialFeatured);
    const title    = qs('[data-featured-title]', editorialFeatured);
    const excerpt  = qs('[data-featured-excerpt]', editorialFeatured);
    const reading  = qs('[data-featured-reading]', editorialFeatured);
    const railDots = qsa('.ed-featured__rail span', editorialFeatured);
    const prevBtn  = qs('[data-featured-prev]');
    const nextBtn  = qs('[data-featured-next]');
    const controlDots = qsa('[data-featured-dot]');

    const articles = [
      {
        num: '01',
        meta: 'Método · 01',
        href: 'como-evoluir-no-treino-sem-motivacao/',
        image: '../conteudo/como-evoluir-no-treino-sem-motivacao/preset-imagem-conteudo-1.webp',
        tag: 'Método',
        title: 'Como evoluir no treino sem motivação.',
        excerpt: 'A consistência começa quando a decisão deixa de ser tomada no cansaço do dia. Um ensaio sobre estrutura, repetição e por que motivação deve ser consequência, não combustível.',
        reading: '<b>Leitura</b> · 6 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Como evoluir no treino sem motivação'
      },
      {
        num: '02',
        meta: 'Continuidade · 02',
        href: 'por-que-voce-comeca-e-para-no-treino/',
        image: '../conteudo/por-que-voce-comeca-e-para-no-treino/preset-imagem-conteudo-2.webp',
        tag: 'Continuidade',
        title: 'Por que você começa e para no treino.',
        excerpt: 'O abandono raramente nasce no treino em si. Ele aparece quando a rotina depende de impulso, não de um sistema mínimo de continuidade.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Por que você começa e para no treino'
      },
      {
        num: '03',
        meta: 'Estrutura · 03',
        href: 'o-treino-perfeito-que-voce-nunca-consegue-seguir/',
        image: '../conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/preset-imagem-conteudo-3.webp',
        tag: 'Estrutura',
        title: 'O treino perfeito que você nunca consegue seguir.',
        excerpt: 'Um plano pode ser bonito no papel e frágil na semana real. O melhor treino é o que mantém qualidade dentro da vida.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: O treino perfeito que você nunca consegue seguir'
      },
      {
        num: '04',
        meta: 'Adaptação · 04',
        href: 'treinar-cansado-funciona/',
        image: '../conteudo/treinar-cansado-funciona/preset-imagem-conteudo-4.webp',
        tag: 'Adaptação',
        title: 'Treinar cansado funciona?',
        excerpt: 'Cansaço não pede sempre pausa nem sempre heroísmo. O método está em saber quando ajustar a sessão com inteligência.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Treinar cansado funciona?'
      },
      {
        num: '05',
        meta: 'Estrutura · 05',
        href: 'o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/',
        image: '../conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/preset-imagem-conteudo-5.webp',
        tag: 'Estrutura',
        title: 'O problema não é falta de disciplina. É falta de estrutura.',
        excerpt: 'A disciplina que parece pessoal costuma ser desenhada por fora: agenda, ambiente, treino definido e pouca negociação.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: O problema não é falta de disciplina. É falta de estrutura'
      },
      {
        num: '06',
        meta: 'Progressão · 06',
        href: 'treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/',
        image: '../conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/preset-imagem-conteudo-6.webp',
        tag: 'Progressão',
        title: 'Treinar sem registrar é repetir sem saber se está evoluindo.',
        excerpt: 'Sem histórico, cada sessão depende de memória e sensação. Com registro, o treino passa a ter leitura, comparação e direção.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Treinar sem registrar é repetir sem saber se está evoluindo'
      },
      {
        num: '07',
        meta: 'Clareza · 07',
        href: 'por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/',
        image: '../conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/preset-imagem-conteudo-7.webp',
        tag: 'Clareza',
        title: 'Por que trocar de treino toda hora atrapalha sua evolução.',
        excerpt: 'Trocar cedo demais apaga a referência que permitiria entender se a mudança é evolução, fuga ou simples ansiedade.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Por que trocar de treino toda hora atrapalha sua evolução'
      },
      {
        num: '08',
        meta: 'Consistência · 08',
        href: 'o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/',
        image: '../conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/preset-imagem-conteudo-8.webp',
        tag: 'Consistência',
        title: 'O treino que você consegue repetir vale mais do que o treino que parece perfeito.',
        excerpt: 'Um treino sofisticado, mas inviável, não é plano. Plano de verdade sobrevive ao calendário, ao cansaço e à repetição.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: O treino que você consegue repetir vale mais do que o treino que parece perfeito'
      },
      {
        num: '09',
        meta: 'Progressão · 09',
        href: 'a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/',
        image: '../conteudo/a-semana-e-a-menor-unidade-real-de-evolucao-no-treino/preset-imagem-conteudo-9.webp',
        tag: 'Progressão',
        title: 'A semana é a menor unidade real de evolução no treino.',
        excerpt: 'Uma sessão mostra esforço. A semana mostra direção, repetição, registro e contexto para entender se o treino está acumulando.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Maio de 2026',
        aria: 'Ler o ensaio: A semana é a menor unidade real de evolução no treino'
      },
      {
        num: '10',
        meta: 'Clareza · 10',
        href: 'o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/',
        image: '../conteudo/o-que-anotar-no-treino-para-saber-se-voce-esta-evoluindo/preset-imagem-conteudo-10.webp',
        tag: 'Clareza',
        title: 'O que anotar no treino para saber se você está evoluindo.',
        excerpt: 'Registro bom não é arquivo cheio. É memória suficiente para decidir carga, repetição, execução e contexto na próxima sessão.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Maio de 2026',
        aria: 'Ler o ensaio: O que anotar no treino para saber se você está evoluindo'
      },
      {
        num: '11',
        meta: 'Consistência · 11',
        href: 'como-montar-uma-semana-de-treino-que-voce-consegue-repetir/',
        image: '../conteudo/como-montar-uma-semana-de-treino-que-voce-consegue-repetir/preset-imagem-conteudo-11.webp',
        tag: 'Consistência',
        title: 'Como montar uma semana de treino que você consegue repetir.',
        excerpt: 'Plano bom não é o mais ambicioso. É o que protege prioridade, margem e repetição suficiente para sobreviver à semana real.',
        reading: '<b>Leitura</b> · 8 min &nbsp;·&nbsp; Maio de 2026',
        aria: 'Ler o ensaio: Como montar uma semana de treino que você consegue repetir'
      }
    ];

    let active = 0;
    let lastSwitch = 0;

    const setFeatured = index => {
      const next = (index + articles.length) % articles.length;
      if (next === active) return;

      active = next;
      const article = articles[active];
      editorialFeatured.classList.add('is-switching');

      window.setTimeout(() => {
        editorialFeatured.href = article.href;
        editorialFeatured.setAttribute('aria-label', article.aria);
        editorialFeatured.style.setProperty('--ed-featured-image', `url('${article.image}')`);
        if (visual) visual.dataset.featuredNum = article.num;
        if (meta) meta.textContent = article.meta;
        if (tag) tag.textContent = article.tag;
        if (title) title.textContent = article.title;
        if (excerpt) excerpt.textContent = article.excerpt;
        if (reading) reading.innerHTML = article.reading;
        railDots.forEach((dot, i) => dot.classList.toggle('is-active', i === active));
        controlDots.forEach((dot, i) => {
          const isActive = i === active;
          dot.classList.toggle('is-active', isActive);
          dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        window.setTimeout(() => editorialFeatured.classList.remove('is-switching'), 80);
      }, 170);
    };

    editorialFeatured.addEventListener('pointermove', e => {
      if (window.matchMedia('(hover: none)').matches) return;
      const rect = editorialFeatured.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      const now = Date.now();
      if (now - lastSwitch < 950) return;

      if (ratio < 0.24) {
        lastSwitch = now;
        setFeatured(active - 1);
      } else if (ratio > 0.76) {
        lastSwitch = now;
        setFeatured(active + 1);
      }
    });

    editorialFeatured.addEventListener('keydown', e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      setFeatured(active + (e.key === 'ArrowRight' ? 1 : -1));
    });

    prevBtn?.addEventListener('click', () => setFeatured(active - 1));
    nextBtn?.addEventListener('click', () => setFeatured(active + 1));
    controlDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = Number(dot.dataset.featuredDot);
        if (Number.isInteger(index)) setFeatured(index);
      });
    });
  }

  /* ==========================================================
     EMAIL FORM — CTA Final
     ========================================================== */
  const emailForm    = qs('.email-form');
  const emailSuccess = qs('.email-success');

  if (emailForm && emailSuccess) {
    emailForm.addEventListener('submit', async e => {
      e.preventDefault();
      const input     = emailForm.querySelector('input[type="email"]');
      const submitBtn = emailForm.querySelector('button[type="submit"]');
      const email     = input?.value.trim();
      if (!email) return;

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '···'; }

      const showSuccess = () => {
        emailForm.style.transition = 'opacity 0.28s ease';
        emailForm.style.opacity    = '0';
        setTimeout(() => {
          emailForm.style.display = 'none';
          emailSuccess.style.display = 'block';
          emailSuccess.style.opacity = '0';
          requestAnimationFrame(() => {
            emailSuccess.style.transition = 'opacity 0.4s ease';
            emailSuccess.style.opacity    = '1';
          });
        }, 280);
      };

      try {
        const res = await fetch('https://formsubmit.co/ajax/gmoveadm@gmail.com', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            email,
            _subject:  'GMOVE — novo acesso antecipado',
            _captcha:  'false',
            _template: 'table'
          })
        });
        if (res.ok) {
          trackGmoveEvent('early_access_submit', { label: 'email_form' });
          showSuccess();
        } else { throw new Error('send failed'); }
      } catch (_) {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Entrar na lista'; }
      }
    });
  }

  /* ==========================================================
     PRODUCT DECISION DEMO
     ========================================================== */
  const decisionDemo = qs('[data-decision-demo]');
  if (decisionDemo) {
    const decisionBoard = qs('.decision-board', decisionDemo);
    let decisionPulseTimer = null;
    const demoState = {
      tempo: '50',
      energia: 'normal',
      equipamento: 'completo'
    };

    const demoEls = {
      kicker: qs('[data-demo-kicker]', decisionDemo),
      title: qs('[data-demo-title]', decisionDemo),
      body: qs('[data-demo-body]', decisionDemo),
      load: qs('[data-demo-load]', decisionDemo),
      adjust: qs('[data-demo-adjust]', decisionDemo),
      reason: qs('[data-demo-reason]', decisionDemo),
      status: qs('[data-demo-status]', decisionDemo),
      plan: qs('[data-demo-plan]', decisionDemo),
      history: qs('[data-demo-history]', decisionDemo),
      context: qs('[data-demo-context]', decisionDemo),
      next: qs('[data-demo-next]', decisionDemo)
    };

    function getDemoDecision() {
      const { tempo, energia, equipamento } = demoState;
      const energiaLabel = { baixa: 'baixo', normal: 'normal', alta: 'alto' }[energia] || energia;
      const equipamentoLabel = { completo: 'completo', limitado: 'limitado', casa: 'casa' }[equipamento] || equipamento;
      const context = `${tempo} min · ${energiaLabel} · ${equipamentoLabel}`;

      if (energia === 'baixa') {
        return {
          status: 'Reduzir sem perder continuidade',
          plan: tempo === '35' ? 'Superior A essencial' : 'Superior A reduzido',
          history: 'Carga recente preservada',
          context,
          kicker: 'Ajuste inteligente',
          title: 'Sessão reduzida para preservar consistência',
          body: 'Mantém o vínculo com o plano, corta volume acessório e evita transformar um dia ruim em abandono.',
          load: 'Manter ou reduzir 5% nas séries principais.',
          adjust: tempo === '35' ? 'Priorizar dois exercícios-base e encerrar com feedback.' : 'Reduzir volume e manter técnica controlada.',
          reason: 'Estado baixo hoje; o objetivo é treinar o suficiente para continuar evoluindo.',
          next: 'Se o feedback vier pesado, o próximo treino reduz volume antes de mexer no foco da semana.'
        };
      }

      if (equipamento === 'casa') {
        return {
          status: 'Mesmo objetivo, outro ambiente',
          plan: 'Superior adaptado',
          history: 'Padrão de movimento mantido',
          context,
          kicker: 'Substituição de contexto',
          title: 'Treino adaptado para casa sem quebrar o foco',
          body: 'Preserva o grupo muscular planejado e troca exercícios por variações compatíveis com o equipamento disponível.',
          load: 'Usar faixa de repetições mais alta e registrar esforço.',
          adjust: tempo === '70' ? 'Adicionar bloco complementar se a execução permanecer estável.' : 'Manter sessão compacta e objetiva.',
          reason: 'Equipamento mudou, mas o objetivo do dia continua válido.',
          next: 'O app guarda a troca e evita comparar carga livre com máquina como se fossem o mesmo estímulo.'
        };
      }

      if (equipamento === 'limitado') {
        return {
          status: 'Preservar foco com alternativa',
          plan: 'Superior A resiliente',
          history: 'Exercício equivalente disponível',
          context,
          kicker: 'Plano preservado',
          title: 'Mesmo foco, exercícios mais resilientes',
          body: 'A sessão troca movimentos dependentes de máquina por alternativas equivalentes e mantém a progressão possível.',
          load: 'Usar a última carga válida quando o padrão de movimento for parecido.',
          adjust: 'Trocar exercício sem trocar o propósito do treino.',
          reason: 'Há restrição de equipamento; o app protege o objetivo antes de trocar tudo.',
          next: 'Se a alternativa funcionar bem, ela fica disponível como substituição confiável no próximo cenário parecido.'
        };
      }

      if (tempo === '35') {
        return {
          status: 'Cumprir o essencial',
          plan: 'Superior A compacto',
          history: 'Prioridade nas séries principais',
          context,
          kicker: 'Treino recomendado',
          title: 'Sessão compacta com prioridade clara',
          body: 'Escolhe o núcleo do treino e deixa acessórios para outro dia, sem apagar a progressão da semana.',
          load: 'Manter carga principal se o aquecimento estiver sólido.',
          adjust: 'Executar menos exercícios, com descanso mais controlado.',
          reason: 'Tempo curto; melhor cumprir o essencial do que improvisar uma sessão longa.',
          next: 'O volume não feito volta para a leitura da semana, sem duplicar tudo no treino seguinte.'
        };
      }

      if (tempo === '70' && energia === 'alta') {
        return {
          status: 'Boa janela para avanço',
          plan: 'Superior A completo',
          history: 'Margem na última sessão',
          context,
          kicker: 'Oportunidade do dia',
          title: 'Sessão completa com progressão agressiva, mas medida',
          body: 'Aproveita condição favorável para buscar avanço nas séries principais e fechar com volume complementar.',
          load: 'Subir 2,5% a 5% se a última sessão indicou margem.',
          adjust: 'Adicionar bloco complementar apenas se a execução continuar limpa.',
          reason: 'Histórico estável, energia alta e tempo suficiente para um estímulo maior.',
          next: 'Se o avanço fechar limpo, a nova carga vira referência para a próxima recomendação.'
        };
      }

      return {
        status: 'Boa janela para progredir',
        plan: 'Superior A',
        history: 'Execução estável',
        context,
        kicker: 'Treino recomendado',
        title: 'Força superior com progressão controlada',
        body: 'Mantém o foco do plano, sugere carga próxima da última sessão válida e deixa a execução pronta para registrar feedback.',
        load: 'Subir 2,5% se a última série fechar limpa.',
        adjust: 'Manter volume planejado e observar esforço percebido.',
        reason: 'Plano ativo, histórico consistente e condição normal para treinar.',
        next: 'Se o feedback vier leve, a próxima sessão pode subir uma faixa de carga.'
      };
    }

    function renderDemoDecision() {
      const decision = getDemoDecision();
      Object.entries(demoEls).forEach(([key, el]) => {
        if (el && decision[key]) el.textContent = decision[key];
      });
    }

    function pulseDecisionBoard() {
      if (!decisionBoard) return;
      decisionBoard.classList.remove('is-updating');
      void decisionBoard.offsetWidth;
      decisionBoard.classList.add('is-updating');
      if (decisionPulseTimer) window.clearTimeout(decisionPulseTimer);
      decisionPulseTimer = window.setTimeout(() => {
        decisionBoard.classList.remove('is-updating');
      }, 720);
    }

    qsa('[data-demo-group]', decisionDemo).forEach(button => {
      const group = button.dataset.demoGroup;
      const value = button.dataset.demoValue;
      button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));

      button.addEventListener('click', () => {
        if (!group || !value) return;
        demoState[group] = value;
        qsa(`[data-demo-group="${group}"]`, decisionDemo).forEach(item => {
          const isActive = item === button;
          item.classList.toggle('is-active', isActive);
          item.setAttribute('aria-pressed', String(isActive));
        });
        renderDemoDecision();
        pulseDecisionBoard();
      });
    });

    renderDemoDecision();
  }

  /* ==========================================================
     JOURNEY NAVIGATION
     ========================================================== */
  const journeyDots  = qsa('.journey-dot');
  const journeyBtn   = qs('.journey-btn');
  const journeyLabel = qs('.journey-btn__label');

  const SECTION_ORDER = [
    'hero', 'ponto-de-vista', 'como-funciona', 'experiencia',
    'funcionalidades', 'construcao', 'para-quem', 'seguranca', 'editorial', 'cta-final'
  ];
  const SECTION_LABELS = {
    'hero':            'Início',
    'ponto-de-vista':  'A premissa',
    'como-funciona':   'Como funciona',
    'experiencia':     'A experiência',
    'funcionalidades': 'O que existe',
    'construcao':      'Em construção',
    'para-quem':       'Para quem é',
    'seguranca':       'Confiança',
    'editorial':       'Editorial',
    'cta-final':       'Acesso antecipado'
  };

  let currentIdx = 0;

  function scrollTo(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  journeyDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const id = dot.dataset.target?.replace('#', '');
      if (id) scrollTo(id);
    });
  });

  journeyBtn?.addEventListener('click', () => {
    const nextId = SECTION_ORDER[Math.min(currentIdx + 1, SECTION_ORDER.length - 1)];
    scrollTo(nextId);
  });

  const allSections = qsa('section[id]');
  if (allSections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id  = entry.target.id;
        const idx = SECTION_ORDER.indexOf(id);
        if (idx === -1) return;

        currentIdx = idx;
        journeyDots.forEach((dot, i) => dot.classList.toggle('is-active', i === idx));

        const nextIdx = idx + 1;
        if (nextIdx < SECTION_ORDER.length) {
          if (journeyLabel) journeyLabel.textContent = SECTION_LABELS[SECTION_ORDER[nextIdx]] || '';
          journeyBtn?.classList.remove('is-hidden');
        } else {
          journeyBtn?.classList.add('is-hidden');
        }
      });
    }, { threshold: 0.38 });

    allSections.forEach(s => sectionObserver.observe(s));
  }

  /* ==========================================================
     SCREENSHOT CAROUSEL
     ========================================================== */
  const carousel = document.getElementById('screenshotsCarousel');
  if (carousel) {
    const stage    = qs('.sc-stage',    carousel);
    const slides   = qsa('.sc-slide',   carousel);
    const dots     = qsa('.sc-dot',     carousel);
    const captions = qsa('.sc-caption', carousel);
    const prevBtn  = qs('.sc-prev',     carousel);
    const nextBtn  = qs('.sc-next',     carousel);

    const total   = slides.length;
    let   current = 0;
    let   dragStartX = 0;
    let   isDragging = false;
    let   dragMoved  = false;

    function applyPositions() {
      slides.forEach((slide, i) => {
        const pos = i - current;
        if      (pos < -2) slide.dataset.pos = 'far-left';
        else if (pos >  2) slide.dataset.pos = 'far-right';
        else               slide.dataset.pos = String(pos);
      });
      dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
      captions.forEach((c, i) => c.classList.toggle('is-active', i === current));

      const activeFrame = stage.querySelector('.sc-slide[data-pos="0"] .sc-frame');
      if (activeFrame) activeFrame.style.transform = '';
    }

    function goTo(idx) {
      current = ((idx % total) + total) % total;
      applyPositions();
    }
    const goPrev = () => goTo(current - 1);
    const goNext = () => goTo(current + 1);

    applyPositions();

    prevBtn?.addEventListener('click', goPrev);
    nextBtn?.addEventListener('click', goNext);
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
    });

    const ZONE_WIDTH = 0.48;
    const DWELL_MS   = 360;
    let hoverZone  = null;
    let dwellTimer = null;

    function setHoverZone(zone) {
      if (zone === hoverZone) return;
      clearTimeout(dwellTimer);
      dwellTimer = null;
      hoverZone  = zone;
      stage.classList.toggle('zone-left',  zone === 'left');
      stage.classList.toggle('zone-right', zone === 'right');
      if (zone) {
        dwellTimer = setTimeout(() => {
          if (zone === 'left') goPrev(); else goNext();
          setHoverZone(null);
        }, DWELL_MS);
      }
    }

    stage.addEventListener('mousedown', e => {
      setHoverZone(null);
      isDragging = true;
      dragMoved  = false;
      dragStartX = e.clientX;
      stage.classList.add('is-dragging');
    });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      if (Math.abs(e.clientX - dragStartX) > 6) dragMoved = true;
    });
    window.addEventListener('mouseup', e => {
      if (!isDragging) return;
      isDragging = false;
      stage.classList.remove('is-dragging');
      if (dragMoved) {
        const diff = e.clientX - dragStartX;
        if (Math.abs(diff) > 38) diff < 0 ? goNext() : goPrev();
      }
    });

    let touchStartX = 0;
    stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) diff < 0 ? goNext() : goPrev();
    });

    let tiltRAF = null;
    stage.addEventListener('mousemove', e => {
      if (isDragging) return;

      const stageRect = stage.getBoundingClientRect();
      const relX = (e.clientX - stageRect.left) / stageRect.width;
      if      (relX < ZONE_WIDTH)       setHoverZone('left');
      else if (relX > 1 - ZONE_WIDTH)   setHoverZone('right');
      else                              setHoverZone(null);

      if (tiltRAF) cancelAnimationFrame(tiltRAF);
      tiltRAF = requestAnimationFrame(() => {
        const activeSlide = stage.querySelector('.sc-slide[data-pos="0"]');
        if (!activeSlide) return;
        const frame = activeSlide.querySelector('.sc-frame');
        if (!frame) return;

        const rect = activeSlide.getBoundingClientRect();
        if (!rect.width) return;

        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width  / 2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));

        const rotY =  dx * 10;
        const rotX = -dy *  7;
        frame.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
    });

    stage.addEventListener('mouseleave', () => {
      setHoverZone(null);
      if (tiltRAF) cancelAnimationFrame(tiltRAF);
      const activeFrame = stage.querySelector('.sc-slide[data-pos="0"] .sc-frame');
      if (activeFrame) {
        activeFrame.style.transition = 'transform 0.5s ease';
        activeFrame.style.transform  = '';
        setTimeout(() => { activeFrame.style.transition = ''; }, 500);
      }
    });
  }

  /* ==========================================================
     SPOTLIGHT CARDS
     ========================================================== */
  qsa('[data-spotlight]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x.toFixed(2)}%`);
      card.style.setProperty('--my', `${y.toFixed(2)}%`);
    });
  });

  /* ==========================================================
     HERO PARALLAX — camada de profundidade responsiva ao mouse
     Move o gradiente de fundo sutilmente conforme o cursor.
     Efeito: sensação de profundidade e presença tecnológica.
     ========================================================== */
  const heroSection    = qs('.hero');
  const parallaxLayer  = qs('.hero__parallax-layer');

  if (heroSection && parallaxLayer) {
    let targetX  = 0;
    let targetY  = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId    = null;
    let isActive = true; // false se hero já passou do viewport

    /* Desativa o parallax quando hero sair do viewport (performance) */
    const heroVisibilityObserver = new IntersectionObserver(entries => {
      isActive = entries[0].isIntersecting;
      if (!isActive) {
        // Reset suave ao sair
        targetX = 0;
        targetY = 0;
      }
    }, { threshold: 0 });
    heroVisibilityObserver.observe(heroSection);

    heroSection.addEventListener('mousemove', e => {
      if (!isActive) return;
      const rect = heroSection.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      /* Normaliza -1 → 1 */
      targetX = (e.clientX - cx) / (rect.width  / 2);
      targetY = (e.clientY - cy) / (rect.height / 2);
    });

    heroSection.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    /* Loop de animação com lerp para seguimento suave */
    const MAX_X = 20; // pixels de translação máxima horizontal
    const MAX_Y = 13; // pixels de translação máxima vertical
    const LERP  = 0.055; // fator de suavidade (menor = mais suave)

    function animateParallax() {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;

      /* Só aplica transform se houver movimento significativo */
      if (Math.abs(currentX) > 0.001 || Math.abs(currentY) > 0.001) {
        parallaxLayer.style.transform =
          `translate(${(currentX * MAX_X).toFixed(3)}px, ${(currentY * MAX_Y).toFixed(3)}px)`;
      }
      rafId = requestAnimationFrame(animateParallax);
    }
    animateParallax();
  }

})();
