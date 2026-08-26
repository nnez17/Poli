// ==========================================================
    // ✎ KONFIGURASI — identitas tim dari proposal
    // ==========================================================
    const TEAM_NAME = 'Sons of Figma';   // tampil di footer setiap slide

    // ---- sisipkan chrome (header / footer) ke setiap slide ----
    (function injectChrome() {
      const sections = document.querySelectorAll('.reveal .slides section');
      const total = sections.length;
      sections.forEach((section, i) => {
        const mode = section.dataset.chrome || 'full';
        const num = String(i + 1).padStart(2, '0');

        if (mode !== 'none') {
          const hideBrand = section.dataset.brand === 'off';
          const top = document.createElement('header');
          top.className = 'chrome-top' + (hideBrand ? ' no-brand' : '');
          top.innerHTML = `
            ${hideBrand ? '' : `
            <div class="brand-mini">
              <img src="public/Logo.png" alt="" />
              LaporWarga
            </div>`}
            <div class="chrome-right">
              <span class="page-num">${num} / ${String(total).padStart(2, '0')}</span>
              <button class="fs-btn" title="Layar penuh (F)" aria-label="Alihkan layar penuh"><i data-lucide="maximize"></i></button>
            </div>`;
          section.appendChild(top);

          top.querySelector('.fs-btn').addEventListener('click', toggleFullscreen);
        }

        if (mode === 'full') {
          const bottom = document.createElement('footer');
          bottom.className = 'chrome-bottom';
          bottom.innerHTML = `<span>Elektro Expo 2026 — Lomba Desain UI/UX · SMK Negeri 1 Kandeman</span><b>${TEAM_NAME}</b>`;
          section.appendChild(bottom);
        }
      });
    })();

    // ---- layar penuh ----
    function toggleFullscreen() {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen().catch(() => {});
    }

    // ---- inisialisasi Reveal ----
    const reveal = new Reveal({
      hash: true,
      progress: true,
      controls: false,
      transition: 'fade',
      transitionSpeed: 'default',
      width: 1280,
      height: 720,
      margin: 0.02,
      minScale: 0.2,
      maxScale: 2.5,
      center: false,
      keyboard: true,
      overview: true,
    });
    reveal.initialize();
    window.deck = reveal;

    // ---- keyboard: F = layar penuh, ? = panel bantuan ----
    document.addEventListener('keydown', (e) => {
      if (e.key === 'f' || e.key === 'F') { toggleFullscreen(); e.preventDefault(); }
      if (e.key === '?') document.getElementById('help-overlay').classList.toggle('show');
    });

    // ---- ikon ----
    if (window.lucide) lucide.createIcons();
