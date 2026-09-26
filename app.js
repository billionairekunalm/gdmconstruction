/**
 * Good Vibes Roofing - Interactive Master Engine
 * Houston, TX
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. HERO VIDEO & SMOOTH INTRO REVEAL
  // ==========================================
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    document.body.classList.add('video-done');
    heroVideo.play().catch(() => {
      // Fallback if autoplay restricted
      console.log('Video autoplay initiated with poster fallback');
    });
  } else {
    document.body.classList.add('video-done');
  }

  // ==========================================
  // 2. NAVBAR SCROLL EFFECT
  // ==========================================
  const onScroll = () => {
    document.body.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ==========================================
  // 3. SCROLL REVEAL (IntersectionObserver)
  // ==========================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ==========================================
  // 4. MEET JORDAN VIDEO PLAYER FACADE
  // ==========================================
  const vframe = document.getElementById('vframe');
  const vplay = document.getElementById('vplay');
  if (vframe && vplay) {
    vplay.addEventListener('click', () => {
      const ytId = vframe.getAttribute('data-yt') || 'MchZQAwvhpk';
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1&autoplay=1`;
      iframe.title = "Jordan's Message - Good Vibes Roofing";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.setAttribute('allowfullscreen', '');
      vframe.classList.add('playing');
      vframe.appendChild(iframe);
    });
  }

  // ==========================================
  // 5. PROCESS TIMELINE SCROLL TRACKER
  // ==========================================
  (function initProcessTimeline() {
    const stepsEl = document.getElementById('procSteps');
    const fill = document.getElementById('procLineFill');
    const star = document.getElementById('procStar');
    const steps = document.querySelectorAll('.proc-step');
    const images = document.querySelectorAll('.proc-image-frame img');

    if (!stepsEl || !fill || !star) return;

    let ticking = false;

    function updateTimeline() {
      ticking = false;
      const rect = stepsEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.65;
      const end = vh * 0.35;
      const total = (rect.height + start - end) || 1;
      const passed = start - rect.top;
      const progress = Math.max(0, Math.min(1, passed / total));

      fill.style.height = (progress * 100) + '%';
      star.style.top = (progress * 100) + '%';

      let activeIdx = 0;
      steps.forEach((step, i) => {
        const stepPos = i / Math.max(1, steps.length - 1);
        const isLit = progress >= (stepPos - 0.04);
        step.classList.toggle('lit', isLit);
        if (isLit) activeIdx = i;
      });

      images.forEach((img, i) => {
        img.classList.toggle('active', i === activeIdx);
      });
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTimeline);
      }
    }, { passive: true });

    // Click step to preview
    steps.forEach((step, i) => {
      step.addEventListener('click', () => {
        images.forEach((img, idx) => img.classList.toggle('active', idx === i));
      });
    });

    updateTimeline();
  })();

  // ==========================================
  // 6. GAF LEARNING CENTER TABS
  // ==========================================
  const gafData = {
    warranty: {
      title: "Enhanced GAF Factory-Backed Warranties",
      html: `
        <div style="margin-bottom:20px;">
          <p style="font-size:15px; color:var(--ink-soft); margin-bottom:16px;">
            Because Good Vibes Roofing is a <strong>GAF Certified Installer</strong>, your roof qualifies for manufacturer warranties that non-certified contractors legally cannot offer.
          </p>
          <div style="overflow-x:auto;">
            <table class="gaf-table">
              <thead>
                <tr>
                  <th>Coverage Feature</th>
                  <th>Standard Shingle Warranty</th>
                  <th>GAF System Plus <span class="gaf-badge-rec">Certified</span></th>
                  <th>GAF Golden Pledge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Material Defect Coverage</strong></td>
                  <td>10 Years</td>
                  <td><strong style="color:var(--amber-deep);">50 Years (100% Non-Prorated)</strong></td>
                  <td>50 Years (100% Non-Prorated)</td>
                </tr>
                <tr>
                  <td><strong>Workmanship Coverage</strong></td>
                  <td>None (Contractor only)</td>
                  <td><strong>Up to 2 Years by GAF</strong></td>
                  <td><strong>25 Years GAF Backed</strong></td>
                </tr>
                <tr>
                  <td><strong>Tear-Off Cost Included</strong></td>
                  <td>No</td>
                  <td><strong style="color:#12b76a;">Yes, 100% Covered</strong></td>
                  <td>Yes, 100% Covered</td>
                </tr>
                <tr>
                  <td><strong>Disposal Cost Included</strong></td>
                  <td>No</td>
                  <td>No</td>
                  <td><strong style="color:#12b76a;">Yes, 100% Covered</strong></td>
                </tr>
                <tr>
                  <td><strong>Transferable Warranty</strong></td>
                  <td>Limited</td>
                  <td><strong>Yes (Adds Home Value)</strong></td>
                  <td>Yes (Adds Home Value)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    compare: {
      title: "Compare Industry-Leading Shingles",
      html: `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:20px; margin-top:10px;">
          <div style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:22px;">
            <span style="font-size:11px; font-weight:700; color:var(--amber-deep); text-transform:uppercase;">Most Popular #1 in US</span>
            <h4 style="font-family:var(--serif); font-size:20px; margin:6px 0;">Timberline HDZ®</h4>
            <p style="font-size:13.5px; color:var(--ink-soft); margin-bottom:14px;">LayerLock™ technology with infinite wind speed warranty when installed with 4 required accessories.</p>
            <ul style="font-size:13px; color:var(--ink); line-height:1.8; list-style:none; padding-left:0;">
              <li>✓ Wind Speed: Infinite mph</li>
              <li>✓ StainGuard Plus™ Algae Protection</li>
              <li>✓ Class A Fire Rating</li>
              <li>✓ StrikeZone™ 99.9% Nailing Accuracy</li>
            </ul>
          </div>
          <div style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:22px;">
            <span style="font-size:11px; font-weight:700; color:var(--amber-deep); text-transform:uppercase;">Ultra-Dimensional</span>
            <h4 style="font-family:var(--serif); font-size:20px; margin:6px 0;">Timberline® UHDZ</h4>
            <p style="font-size:13.5px; color:var(--ink-soft); margin-bottom:14px;">Thicker profile with Dual Shadow Line creating deep architectural sunset dimensions.</p>
            <ul style="font-size:13px; color:var(--ink); line-height:1.8; list-style:none; padding-left:0;">
              <li>✓ Wind Speed: Infinite mph</li>
              <li>✓ 30-Year StainGuard Plus PRO™</li>
              <li>✓ Dual Shadow Line Depth</li>
              <li>✓ Up to 20% thicker dimensional feel</li>
            </ul>
          </div>
          <div style="background:#fff; border:1px solid var(--line); border-radius:14px; padding:22px;">
            <span style="font-size:11px; font-weight:700; color:var(--amber-deep); text-transform:uppercase;">Impact Resistance</span>
            <h4 style="font-family:var(--serif); font-size:20px; margin:6px 0;">Timberline® AS II</h4>
            <p style="font-size:13.5px; color:var(--ink-soft); margin-bottom:14px;">Class 4 Impact Resistant SBS-modified asphalt shingle designed for severe hail areas.</p>
            <ul style="font-size:13px; color:var(--ink); line-height:1.8; list-style:none; padding-left:0;">
              <li>✓ UL 2218 Class 4 Impact Rating</li>
              <li>✓ Potential Home Insurance Discounts</li>
              <li>✓ Enhanced flexibility in cold weather</li>
              <li>✓ Exceptional Texas storm resilience</li>
            </ul>
          </div>
        </div>
      `
    },
    hdz: {
      title: "Inside Timberline HDZ® Technology",
      html: `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:center;">
          <div>
            <h4 style="font-family:var(--serif); font-size:22px; margin-bottom:12px;">The StrikeZone™ Advantage</h4>
            <p style="font-size:14.5px; color:var(--ink-soft); line-height:1.6; margin-bottom:14px;">
              Timberline HDZ shingles feature the industry's widest nailing area — up to <strong>99.9% nail placement accuracy</strong> in tests. This ensures faster, immaculate installations with zero nail blow-throughs.
            </p>
            <h4 style="font-family:var(--serif); font-size:20px; margin:18px 0 8px;">LayerLock™ Mechanical Fusion</h4>
            <p style="font-size:14.5px; color:var(--ink-soft); line-height:1.6;">
              Dual-phase shingle layers are mechanically locked together during manufacturing and fuse with Dura Grip™ adhesive during sun exposure, giving you unmatched wind blow-off resistance.
            </p>
          </div>
          <div style="background:var(--white); border-radius:16px; border:1px solid var(--line); padding:24px; text-align:center;">
            <div style="font-size:48px; font-weight:700; color:var(--amber); line-height:1;">130+</div>
            <div style="font-size:14px; font-weight:600; color:var(--ink); margin-top:6px;">Standard Wind Rating (MPH)</div>
            <hr style="margin:16px 0; border:none; border-top:1px solid var(--line);">
            <div style="font-size:42px; font-weight:700; color:var(--ink); line-height:1;">∞</div>
            <div style="font-size:14px; font-weight:600; color:var(--amber-deep); margin-top:6px;">WindProven™ Infinite Wind Warranty</div>
            <p style="font-size:12.5px; color:var(--ink-mute); margin-top:8px;">When installed by certified crews with 4 qualifying GAF accessory products.</p>
          </div>
        </div>
      `
    },
    parts: {
      title: "Anatomy of a Complete Roofing System",
      html: `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:18px;">
          <div style="background:var(--white); padding:18px; border-radius:12px; border:1px solid var(--line);">
            <span style="font-weight:700; color:var(--amber); font-size:12px;">LAYER 1</span>
            <h4 style="font-size:16px; margin:6px 0;">Solid Roof Deck</h4>
            <p style="font-size:13px; color:var(--ink-soft);">Clean, inspect, and replace any rotted or warped plywood decking.</p>
          </div>
          <div style="background:var(--white); padding:18px; border-radius:12px; border:1px solid var(--line);">
            <span style="font-weight:700; color:var(--amber); font-size:12px;">LAYER 2</span>
            <h4 style="font-size:16px; margin:6px 0;">Leak Barrier</h4>
            <p style="font-size:13px; color:var(--ink-soft);">Self-adhering membrane sealed around valleys, chimneys, and eaves.</p>
          </div>
          <div style="background:var(--white); padding:18px; border-radius:12px; border:1px solid var(--line);">
            <span style="font-weight:700; color:var(--amber); font-size:12px;">LAYER 3</span>
            <h4 style="font-size:16px; margin:6px 0;">Synthetic Underlayment</h4>
            <p style="font-size:13px; color:var(--ink-soft);">Breathable moisture shield offering 25x stronger tear resistance than felt.</p>
          </div>
          <div style="background:var(--white); padding:18px; border-radius:12px; border:1px solid var(--line);">
            <span style="font-weight:700; color:var(--amber); font-size:12px;">LAYER 4</span>
            <h4 style="font-size:16px; margin:6px 0;">Starter Strip Shingles</h4>
            <p style="font-size:13px; color:var(--ink-soft);">Factory sealant prevents wind blow-off along all perimeter edges.</p>
          </div>
          <div style="background:var(--white); padding:18px; border-radius:12px; border:1px solid var(--line);">
            <span style="font-weight:700; color:var(--amber); font-size:12px;">LAYER 5</span>
            <h4 style="font-size:16px; margin:6px 0;">Architectural Shingles</h4>
            <p style="font-size:13px; color:var(--ink-soft);">Durable, heavy-duty architectural grade with rich color blends.</p>
          </div>
          <div style="background:var(--white); padding:18px; border-radius:12px; border:1px solid var(--line);">
            <span style="font-weight:700; color:var(--amber); font-size:12px;">LAYER 6</span>
            <h4 style="font-size:16px; margin:6px 0;">Attic Ventilation & Ridge</h4>
            <p style="font-size:13px; color:var(--ink-soft);">Solar fans and ridge vents allow heat & moisture to escape continuously.</p>
          </div>
        </div>
      `
    }
  };

  const gafTabs = document.querySelectorAll('.gaf-tab');
  const gafContainer = document.getElementById('gafDynamicContent');
  const gafCaption = document.getElementById('gafCaption');

  if (gafTabs.length && gafContainer) {
    function loadGafTab(key) {
      const data = gafData[key] || gafData.warranty;
      gafTabs.forEach(t => {
        const isActive = t.dataset.tab === key;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      if (gafCaption) gafCaption.textContent = data.title;
      gafContainer.innerHTML = data.html;
    }

    gafTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const key = tab.getAttribute('data-tab');
        loadGafTab(key);
      });
    });

    loadGafTab('warranty');
  }

  // ==========================================
  // 7. RECENT WORK GALLERY & LIGHTBOX
  // ==========================================
  const PROJECTS = [
    {
      n: "Walter Residence",
      a: "Huckleberry St · Missouri City, TX",
      cover: "images/gallery-skyline.jpg",
      photos: ["images/gallery-skyline.jpg", "images/gallery-crew-team.jpg", "images/svc-replacement-repair.jpg"]
    },
    {
      n: "David Horan",
      a: "Huckleberry St · Missouri City, TX",
      cover: "images/gallery-estate.jpg",
      photos: ["images/gallery-estate.jpg", "images/cta-aerial.jpg"]
    },
    {
      n: "Casey Home",
      a: "Indigo Ln · Missouri City, TX",
      cover: "images/gallery-dormers.jpg",
      photos: ["images/gallery-dormers.jpg", "images/gallery-estate.jpg"]
    },
    {
      n: "Linda Dumpling World",
      a: "Commercial Flat Roof · Houston, TX",
      cover: "images/svc-commercial.jpg",
      photos: ["images/svc-commercial.jpg", "images/gallery-crew-team.jpg"]
    },
    {
      n: "John Tomlinson",
      a: "Trailridge Ct · Missouri City, TX",
      cover: "images/gallery-crew-team.jpg",
      photos: ["images/gallery-crew-team.jpg", "images/gallery-skyline.jpg"]
    },
    {
      n: "Mark & Rosaly",
      a: "Winter Springs Dr · Pearland, TX",
      cover: "images/svc-replacement-repair.jpg",
      photos: ["images/svc-replacement-repair.jpg", "images/cta-aerial.jpg"]
    },
    {
      n: "Anthony Hawkins",
      a: "Bluegrass Ct · Missouri City, TX",
      cover: "images/svc-solar-ventilation.jpg",
      photos: ["images/svc-solar-ventilation.jpg", "images/gallery-estate.jpg"]
    },
    {
      n: "Tanya Mack",
      a: "Hoatzin Ct · Missouri City, TX",
      cover: "images/svc-storm.jpg",
      photos: ["images/svc-storm.jpg", "images/gallery-dormers.jpg"]
    },
    {
      n: "James Fischer",
      a: "Green Springs Dr · Houston, TX",
      cover: "images/cta-aerial.jpg",
      photos: ["images/cta-aerial.jpg", "images/gallery-skyline.jpg"]
    }
  ];

  const projGrid = document.getElementById('projGrid');
  const seeMoreBtn = document.getElementById('seeMore');
  const lb = document.getElementById('lightbox');
  const lbGrid = document.getElementById('lbGrid');
  const lbTitle = document.getElementById('lbTitle');
  const lbSub = document.getElementById('lbSub');
  const lbClose = document.getElementById('lbClose');

  if (projGrid) {
    const INITIAL_COUNT = 6;

    PROJECTS.forEach((pr, i) => {
      const card = document.createElement('div');
      card.className = `proj ${i >= INITIAL_COUNT ? 'proj-hidden' : ''}`;
      card.innerHTML = `
        <img loading="lazy" alt="Good Vibes Roofing project in ${pr.a}" src="${pr.cover}">
        <div class="proj-veil"></div>
        <div class="proj-count">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          ${pr.photos.length} photos
        </div>
        <div class="proj-meta">
          <h3>${pr.n}</h3>
          <span>${pr.a}</span>
        </div>
      `;
      card.addEventListener('click', () => openLightbox(i));
      projGrid.appendChild(card);
    });

    if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', () => {
        projGrid.querySelectorAll('.proj-hidden').forEach(c => c.classList.remove('proj-hidden'));
        seeMoreBtn.parentElement.style.display = 'none';
      });
    }
  }

  function openLightbox(idx) {
    const project = PROJECTS[idx];
    if (!project || !lb) return;
    lbTitle.textContent = project.n;
    lbSub.textContent = `${project.a} · ${project.photos.length} photos`;
    lbGrid.innerHTML = project.photos.map(src => `<img loading="lazy" src="${src}" alt="Good Vibes Roofing project photo">`).join('');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb && lb.classList.contains('open')) closeLightbox();
  });

  // ==========================================
  // 8. GOOGLE REVIEWS CAROUSEL SCROLLING
  // ==========================================
  (function initReviewsCarousel() {
    const scroller = document.getElementById('rvScroller');
    const prev = document.getElementById('rvPrev');
    const next = document.getElementById('rvNext');
    if (!scroller || !prev || !next) return;

    function getCardWidth() {
      const card = scroller.querySelector('.rv-card');
      return card ? card.getBoundingClientRect().width + 22 : 380;
    }

    function updateNav() {
      prev.disabled = scroller.scrollLeft <= 5;
      next.disabled = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 10;
    }

    prev.addEventListener('click', () => {
      scroller.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
      scroller.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });

    scroller.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  })();

  // ==========================================
  // 9. HEARTH FINANCING CALCULATOR
  // ==========================================
  (function initFinancingCalc() {
    const amountSlider = document.getElementById('calcAmount');
    const amountDisplay = document.getElementById('calcAmountDisplay');
    const termBtns = document.querySelectorAll('.calc-term-btn');
    const monthlyDisplay = document.getElementById('calcMonthlyPayment');
    const termNote = document.getElementById('calcTermNote');

    if (!amountSlider || !monthlyDisplay) return;

    let selectedMonths = 60;
    let interestRate = 0.0899; // 8.99% standard APR

    function calculatePayment() {
      const principal = parseFloat(amountSlider.value) || 12500;
      amountDisplay.textContent = `$${principal.toLocaleString()}`;

      let monthly = 0;
      if (selectedMonths === 12) {
        // 0% APR Promo for 12 months
        monthly = principal / 12;
        termNote.textContent = '12 months with 0% APR promo financing';
      } else {
        const monthlyRate = interestRate / 12;
        monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, selectedMonths)) / (Math.pow(1 + monthlyRate, selectedMonths) - 1);
        termNote.textContent = `${selectedMonths} months estimated fixed rate payment`;
      }
      monthlyDisplay.textContent = `$${Math.round(monthly)}`;
    }

    amountSlider.addEventListener('input', calculatePayment);

    termBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        termBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedMonths = parseInt(btn.dataset.months) || 60;
        calculatePayment();
      });
    });

    calculatePayment();
  })();

  // ==========================================
  // 10. 4-STEP ESTIMATE MODAL
  // ==========================================
  (function initEstimateFlow() {
    const modal = document.getElementById('estimateModal');
    const backdrop = document.getElementById('estimateBackdrop');
    const closeBtn = document.getElementById('estimateClose');
    const steps = modal ? modal.querySelectorAll('.est-step') : [];
    const progress = document.getElementById('estProgress');
    const dots = progress ? progress.querySelectorAll('.est-dot') : [];

    if (!modal) return;

    let currentStep = 0;
    const leadData = {
      service: '',
      name: '',
      phone: '',
      address: ''
    };

    function showStep(idx) {
      currentStep = idx;
      steps.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === idx);
        d.classList.toggle('done', i < idx);
      });
      const input = steps[idx].querySelector('input');
      if (input) setTimeout(() => input.focus(), 200);
    }

    function openModal() {
      currentStep = 0;
      showStep(0);
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('estFlow').style.display = 'block';
      document.getElementById('estFinal').style.display = 'none';
      if (progress) progress.style.visibility = 'visible';
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.open-estimate').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Step 1: Service selection
    modal.querySelectorAll('.est-service-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        modal.querySelectorAll('.est-service-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        leadData.service = opt.getAttribute('data-value');
        setTimeout(() => showStep(1), 220);
      });
    });

    // Step 2: Name
    const nameInput = document.getElementById('estName');
    const step2Next = document.getElementById('estStep2Next');
    const step2Back = document.getElementById('estStep2Back');

    if (step2Next && nameInput) {
      step2Next.addEventListener('click', () => {
        const val = nameInput.value.trim();
        if (val.length < 2) {
          nameInput.focus();
          return;
        }
        leadData.name = val;
        showStep(2);
      });
      nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); step2Next.click(); }
      });
    }
    if (step2Back) step2Back.addEventListener('click', () => showStep(0));

    // Step 3: Phone
    const phoneInput = document.getElementById('estPhone');
    const step3Next = document.getElementById('estStep3Next');
    const step3Back = document.getElementById('estStep3Back');

    if (phoneInput && step3Next) {
      phoneInput.addEventListener('input', () => {
        if (!phoneInput.value.startsWith('+1')) {
          phoneInput.value = '+1 ' + phoneInput.value.replace(/^\+?1?\s*/, '');
        }
      });
      step3Next.addEventListener('click', () => {
        const digits = phoneInput.value.replace(/\D/g, '');
        if (digits.length < 11) {
          phoneInput.focus();
          return;
        }
        leadData.phone = phoneInput.value;
        showStep(3);
      });
      phoneInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); step3Next.click(); }
      });
    }
    if (step3Back) step3Back.addEventListener('click', () => showStep(1));

    // Step 4: Address & Submit
    const addrInput = document.getElementById('estAddress');
    const submitBtn = document.getElementById('estSubmit');
    const step4Back = document.getElementById('estStep4Back');

    if (submitBtn && addrInput) {
      submitBtn.addEventListener('click', () => {
        const val = addrInput.value.trim();
        if (val.length < 3) {
          addrInput.focus();
          return;
        }
        leadData.address = val;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Securing inspection…';

        setTimeout(() => {
          document.getElementById('estFlow').style.display = 'none';
          document.getElementById('estFinal').style.display = 'block';
          if (progress) progress.style.visibility = 'hidden';
          const greetName = leadData.name.split(' ')[0] || 'Neighbor';
          const greetEl = document.getElementById('estGreetName');
          if (greetEl) greetEl.textContent = greetName;
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send it';
        }, 600);
      });
      addrInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); submitBtn.click(); }
      });
    }
    if (step4Back) step4Back.addEventListener('click', () => showStep(2));

  })();

  // ==========================================
  // 11. AUTOMATED BOOKING APPOINTMENT CALENDAR
  // ==========================================
  (function initAutomatedBooking() {
    const bookingModal = document.getElementById('bookingModal');
    const bookingBackdrop = document.getElementById('bookingBackdrop');
    const bookingClose = document.getElementById('bookingClose');
    const datesScroll = document.getElementById('bookingDates');
    const slotsGrid = document.getElementById('bookingSlots');
    const bookingForm = document.getElementById('bookingForm');
    const confirmedCard = document.getElementById('bookingConfirmed');

    if (!bookingModal || !datesScroll) return;

    let selectedDate = '';
    let selectedSlot = '';

    // Generate dates (Next 14 Days)
    const daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();

    datesScroll.innerHTML = '';
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = daysArr[d.getDay()];
      const dayNum = d.getDate();
      const monthName = monthsArr[d.getMonth()];
      const dateString = `${dayName}, ${monthName} ${dayNum}`;

      const pill = document.createElement('div');
      pill.className = `booking-date-pill ${i === 0 ? 'selected' : ''}`;
      if (i === 0) selectedDate = dateString;
      pill.innerHTML = `
        <div class="day-name">${dayName}</div>
        <div class="day-num">${dayNum}</div>
        <div style="font-size:10px; opacity:0.75;">${monthName}</div>
      `;
      pill.addEventListener('click', () => {
        datesScroll.querySelectorAll('.booking-date-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        selectedDate = dateString;
        generateSlots();
      });
      datesScroll.appendChild(pill);
    }

    // Time Slots
    const standardSlots = [
      "9:00 AM", "10:30 AM", "11:30 AM", 
      "1:00 PM", "2:30 PM", "4:00 PM"
    ];

    function generateSlots() {
      slotsGrid.innerHTML = '';
      standardSlots.forEach((slot, idx) => {
        const btn = document.createElement('div');
        btn.className = `booking-slot ${idx === 0 ? 'selected' : ''}`;
        if (idx === 0) selectedSlot = slot;
        btn.textContent = slot;
        btn.addEventListener('click', () => {
          slotsGrid.querySelectorAll('.booking-slot').forEach(s => s.classList.remove('selected'));
          btn.classList.add('selected');
          selectedSlot = slot;
        });
        slotsGrid.appendChild(btn);
      });
    }
    generateSlots();

    // Booking Submission
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('bookName').value;
        const phone = document.getElementById('bookPhone').value;
        const address = document.getElementById('bookAddress').value;
        const service = document.getElementById('bookService').value;

        const summaryBox = document.getElementById('bookingSummaryDetails');
        if (summaryBox) {
          summaryBox.innerHTML = `
            <div style="margin-bottom:8px;"><strong>Inspection Date:</strong> ${selectedDate} at ${selectedSlot}</div>
            <div style="margin-bottom:8px;"><strong>Property:</strong> ${address}</div>
            <div style="margin-bottom:8px;"><strong>Service:</strong> ${service}</div>
            <div style="margin-bottom:8px;"><strong>Lead Inspector:</strong> Jordan (Owner) & Crew</div>
            <div><strong>Contact:</strong> ${name} (${phone})</div>
          `;
        }

        bookingForm.style.display = 'none';
        confirmedCard.classList.add('show');
      });
    }

    window.openBookingModal = function() {
      bookingModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (bookingForm) bookingForm.style.display = 'block';
      if (confirmedCard) confirmedCard.classList.remove('show');
    };

    function closeBookingModal() {
      bookingModal.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (bookingClose) bookingClose.addEventListener('click', closeBookingModal);
    if (bookingBackdrop) bookingBackdrop.addEventListener('click', closeBookingModal);
    document.querySelectorAll('.open-booking').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openBookingModal();
      });
    });
  })();

  // ==========================================
  // 12. LIVE CHATBOT WIDGET
  // ==========================================
  (function initChatbot() {
    const launcher = document.getElementById('chatLauncher');
    const panel = document.getElementById('chatPanel');
    const body = document.getElementById('chatBody');
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const chips = document.getElementById('chatChips');

    if (!launcher || !panel || !body) return;

    let chatStarted = false;

    const BOT_RULES = [
      {
        k: ['book', 'appointment', 'slot', 'schedule', 'calendar', 'time', 'when'],
        r: "I can lock in your free on-site roof inspection right now! Let me open our automated booking calendar for you.",
        action: 'book'
      },
      {
        k: ['leak', 'leaking', 'hole', 'water', 'drip', 'ceiling'],
        r: "Active leaks are treated with priority! We'll diagnose the exact point of entry honestly and provide a photo report. Let's schedule an inspection immediately.",
        action: 'book'
      },
      {
        k: ['estimate', 'quote', 'price', 'cost', 'how much', 'rates'],
        r: "Every estimate is 100% free with itemized good/better/best options and zero pressure. Click 'Book appointment' or select a slot to meet Jordan on-site.",
        action: 'book'
      },
      {
        k: ['storm', 'hail', 'wind', 'insurance', 'claim'],
        r: "We document storm damage with full forensic photo reports required by insurance carriers. Our team helps make the claims process seamless.",
        action: 'book'
      },
      {
        k: ['human', 'person', 'jordan', 'call', 'talk', 'phone', 'number'],
        r: "You can reach owner Jordan and our team directly at (281) 910-2873, or email info@goodvibesroofingtx.com. We answer promptly!"
      },
      {
        k: ['warranty', 'gaf', 'tamko', 'guarantee', 'certified'],
        r: "As GAF and TAMKO certified installers, our projects unlock enhanced 50-year non-prorated factory warranties on materials and workmanship."
      },
      {
        k: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
        r: "Hey there! 👋 Thanks for visiting Good Vibes Roofing. How can we help you today — an inspection, leak repair, or storm assessment?"
      }
    ];

    const FALLBACK_MSG = "Great question! The fastest way to get exact answers and honest pricing is a quick, no-obligation inspection. Would you like to pick a time on our calendar?";

    function addMessage(text, sender) {
      const msg = document.createElement('div');
      msg.className = `msg ${sender}`;
      msg.textContent = text;
      body.appendChild(msg);
      body.scrollTop = body.scrollHeight;
    }

    function botReply(text, action) {
      const typing = document.createElement('div');
      typing.className = 'typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      body.appendChild(typing);
      body.scrollTop = body.scrollHeight;

      setTimeout(() => {
        typing.remove();
        addMessage(text, 'bot');
        if (action === 'book' && window.openBookingModal) {
          setTimeout(() => window.openBookingModal(), 600);
        }
      }, 700);
    }

    function processUserMessage(rawText) {
      const text = rawText.trim();
      if (!text) return;
      addMessage(text, 'user');

      const lower = text.toLowerCase();
      let matched = false;

      for (const rule of BOT_RULES) {
        if (rule.k.some(key => lower.includes(key))) {
          botReply(rule.r, rule.action);
          matched = true;
          break;
        }
      }

      if (!matched) {
        botReply(FALLBACK_MSG, 'book');
      }
    }

    function toggleChat() {
      const isOpen = document.body.classList.contains('chat-open');
      document.body.classList.toggle('chat-open', !isOpen);
      if (!isOpen && !chatStarted) {
        chatStarted = true;
        botReply("Hi there! Welcome to Good Vibes Roofing Houston. Need a free estimate, leak inspection, or emergency repair?");
      }
      if (!isOpen && input) setTimeout(() => input.focus(), 300);
    }

    launcher.addEventListener('click', toggleChat);

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        processUserMessage(input.value);
        input.value = '';
      });
    }

    if (chips) {
      chips.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip')) {
          processUserMessage(e.target.textContent);
        }
      });
    }
  })();

});
