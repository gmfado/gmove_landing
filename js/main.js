/* ============================================================
   G-MOVE — Main JS   version 3.0 · 2026
   ============================================================ */

(function () {
  'use strict';

  /* ---- Helpers -------------------------------------------- */
  const qs  = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

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

  const openMenu  = () => {
    mobileMenu?.classList.add('is-open');
    menuBtn?.classList.add('is-open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu?.classList.remove('is-open');
    menuBtn?.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

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
        meta: 'Ensaio · 01',
        href: '/conteudo/como-evoluir-no-treino-sem-motivacao/',
        image: '/conteudo/como-evoluir-no-treino-sem-motivacao/preset-imagem-conteudo-1.jpg',
        tag: 'Método',
        title: 'Como evoluir no treino sem motivação.',
        excerpt: 'Motivação não é combustível de processo — é sintoma dele. Um ensaio sobre por que quem depende de estado emocional estagna, e por que estrutura supera inspiração em qualquer janela maior que uma semana.',
        reading: '<b>Leitura</b> · 6 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Como evoluir no treino sem motivação'
      },
      {
        num: '02',
        meta: 'Ensaio · 02',
        href: '/conteudo/por-que-voce-comeca-e-para-no-treino/',
        image: '/conteudo/por-que-voce-comeca-e-para-no-treino/preset-imagem-conteudo-2.jpg',
        tag: 'Continuidade',
        title: 'Por que você começa e para no treino.',
        excerpt: 'Começar bem não garante continuidade. O ciclo de impulso, abandono e recomeço quase sempre revela falta de sistema.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Por que você começa e para no treino'
      },
      {
        num: '03',
        meta: 'Ensaio · 03',
        href: '/conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/',
        image: '/conteudo/o-treino-perfeito-que-voce-nunca-consegue-seguir/preset-imagem-conteudo-3.jpg',
        tag: 'Estrutura',
        title: 'O treino perfeito que você nunca consegue seguir.',
        excerpt: 'Um plano pode ser excelente no papel e ruim na semana real. Estrutura boa precisa caber na vida que existe.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: O treino perfeito que você nunca consegue seguir'
      },
      {
        num: '04',
        meta: 'Ensaio · 04',
        href: '/conteudo/treinar-cansado-funciona/',
        image: '/conteudo/treinar-cansado-funciona/preset-imagem-conteudo-4.jpg',
        tag: 'Adaptação',
        title: 'Treinar cansado funciona?',
        excerpt: 'Cansaço não pede sempre pausa nem sempre esforço. O método está em saber quando adaptar a sessão.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Treinar cansado funciona?'
      },
      {
        num: '05',
        meta: 'Ensaio · 05',
        href: '/conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/',
        image: '/conteudo/o-problema-nao-e-falta-de-disciplina-e-falta-de-estrutura/preset-imagem-conteudo-5.jpg',
        tag: 'Estrutura',
        title: 'O problema não é falta de disciplina. É falta de estrutura.',
        excerpt: 'Falta de disciplina para treinar muitas vezes revela ausência de estrutura, clareza e progressão, não falta de força de vontade.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: O problema não é falta de disciplina. É falta de estrutura'
      },
      {
        num: '06',
        meta: 'Ensaio · 06',
        href: '/conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/',
        image: '/conteudo/treinar-sem-registrar-e-repetir-sem-saber-se-esta-evoluindo/preset-imagem-conteudo-6.jpg',
        tag: 'Progressão',
        title: 'Treinar sem registrar é repetir sem saber se está evoluindo.',
        excerpt: 'Sem registro, o treino não vira processo. Vira lembrança, sensação e improviso na próxima sessão.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Treinar sem registrar é repetir sem saber se está evoluindo'
      },
      {
        num: '07',
        meta: 'Ensaio · 07',
        href: '/conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/',
        image: '/conteudo/por-que-trocar-de-treino-toda-hora-atrapalha-sua-evolucao/preset-imagem-conteudo-7.jpg',
        tag: 'Clareza',
        title: 'Por que trocar de treino toda hora atrapalha sua evolução.',
        excerpt: 'Trocar antes de ler o que o treino mostra destrói a referência que permite evoluir com critério.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: Por que trocar de treino toda hora atrapalha sua evolução'
      },
      {
        num: '08',
        meta: 'Ensaio · 08',
        href: '/conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/',
        image: '/conteudo/o-treino-que-voce-consegue-repetir-vale-mais-do-que-o-treino-que-parece-perfeito/preset-imagem-conteudo-8.jpg',
        tag: 'Consistência',
        title: 'O treino que você consegue repetir vale mais do que o treino que parece perfeito.',
        excerpt: 'Um treino bonito, mas inviável, não é um plano. É decoração. O plano real sobrevive à semana.',
        reading: '<b>Leitura</b> · 7 min &nbsp;·&nbsp; Abril de 2026',
        aria: 'Ler o ensaio: O treino que você consegue repetir vale mais do que o treino que parece perfeito'
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
            _subject:  'G-MOVE — novo acesso antecipado',
            _captcha:  'false',
            _template: 'table'
          })
        });
        if (res.ok) { showSuccess(); } else { throw new Error('send failed'); }
      } catch (_) {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Entrar na lista'; }
      }
    });
  }

  /* ==========================================================
     JOURNEY NAVIGATION
     ========================================================== */
  const journeyDots  = qsa('.journey-dot');
  const journeyBtn   = qs('.journey-btn');
  const journeyLabel = qs('.journey-btn__label');

  const SECTION_ORDER = [
    'hero', 'ponto-de-vista', 'experiencia',
    'funcionalidades', 'construcao', 'para-quem', 'cta-final'
  ];
  const SECTION_LABELS = {
    'hero':            'Início',
    'ponto-de-vista':  'A premissa',
    'experiencia':     'A experiência',
    'funcionalidades': 'O que existe',
    'construcao':      'Em construção',
    'para-quem':       'Para quem é',
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
