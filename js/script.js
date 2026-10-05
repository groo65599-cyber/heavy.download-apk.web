/* =========================================================
   HEAVYY PROJECT X — GAMING DOWNLOAD CENTER
   Vanilla JavaScript
   ========================================================= */

/* ---------------------------------------------------------
   1) DOWNLOAD CONFIG
   ---------------------------------------------------------
   Edit this object to change versions, sizes and download URLs.
   Replace the "#" values with your real download links.
--------------------------------------------------------- */
const HPX_DOWNLOADS = {
  smine: {
    name: "HPX SMINE",
    sub: "FOR MOBILE",
    version: "2.0.6",
    platform: "ANDROID",
    size: "6.4 MB",
    status: "READY TO DOWNLOAD",
    icon: "bi-android2",
    url: "https://github.com/groo65599-cyber/HEAVYy_PROJECT-X/releases/download/v2.0.6/HPX-SMINE-v2.0.6.apk"
  },
  mousepro: {
    name: "HPX MOUSE PRO",
    sub: "FOR MOBILADOR ANDROID AND IOS",
    version: "3.2.1",
    platform: "ANDROID / IOS",
    size: "42 MB",
    status: "READY TO DOWNLOAD",
    icon: "bi-mouse2-fill",
    url: "#" /* <-- ganti dengan link download HPX MOUSE PRO */
  },
  pirate: {
    name: "HPX PIRATE",
    sub: "FOR PC",
    version: "1.8.5",
    platform: "WINDOWS PC",
    size: "120 MB",
    status: "READY TO DOWNLOAD",
    icon: "bi-windows",
    url: "#" /* <-- ganti dengan link download HPX PIRATE */
  }
};

document.addEventListener("DOMContentLoaded", function () {

  /* ---------------------------------------------------------
     2) NAVBAR — scroll state + active link (scrollspy)
  --------------------------------------------------------- */
  const navbar = document.getElementById("hpxNavbar");
  const navLinks = Array.from(document.querySelectorAll(".hpx-nav .nav-link"));
  const sections = ["home", "download", "features", "update", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (navbar) navbar.classList.toggle("scrolled", y > 40);

    // scrollspy
    let current = "home";
    const offset = 140;
    sections.forEach((sec) => {
      if (sec && y >= sec.offsetTop - offset) current = sec.id;
    });
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", href === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     3) MOBILE MENU — close on link click
  --------------------------------------------------------- */
  const navMenu = document.getElementById("hpxNavMenu");
  document.querySelectorAll("#hpxNavMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("show")) {
        const toggler = document.querySelector(".hpx-toggler");
        if (toggler) toggler.click();
      }
    });
  });

  /* ---------------------------------------------------------
     4) SMOOTH SCROLL with navbar offset
  --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ---------------------------------------------------------
     5) DOWNLOAD MODAL
  --------------------------------------------------------- */
  const modalEl = document.getElementById("downloadModal");
  let bsModal = null;
  if (modalEl && window.bootstrap) {
    bsModal = new bootstrap.Modal(modalEl);
  }

  const els = {
    icon: document.getElementById("modalIcon"),
    name: document.getElementById("modalName"),
    sub: document.getElementById("modalSub"),
    version: document.getElementById("modalVersion"),
    platform: document.getElementById("modalPlatform"),
    size: document.getElementById("modalSize"),
    status: document.getElementById("modalStatus"),
    confirm: document.getElementById("modalConfirm")
  };

  document.querySelectorAll("[data-download]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-download");
      const data = HPX_DOWNLOADS[key];
      if (!data) return;

      if (els.icon) els.icon.className = "bi " + data.icon;
      if (els.name) els.name.textContent = data.name;
      if (els.sub) els.sub.textContent = data.sub;
      if (els.version) els.version.textContent = data.version;
      if (els.platform) els.platform.textContent = data.platform;
      if (els.size) els.size.textContent = data.size;
      if (els.status) els.status.textContent = data.status;
      if (els.confirm) {
        els.confirm.setAttribute("href", data.url);
        els.confirm.classList.remove("is-disabled");
        els.confirm.innerHTML = 'CONFIRM DOWNLOAD <i class="bi bi-download"></i>';
      }

      if (bsModal) bsModal.show();
    });
  });

  // Handle placeholder "#" links gracefully
  if (els.confirm) {
    els.confirm.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        const original = this.innerHTML;
        this.innerHTML = 'LINK COMING SOON <i class="bi bi-hourglass-split"></i>';
        this.classList.add("is-disabled");
        setTimeout(() => {
          this.innerHTML = original;
          this.classList.remove("is-disabled");
        }, 1800);
      }
    });
  }

  /* ---------------------------------------------------------
     6) SCROLL REVEAL
  --------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), (i % 3) * 90);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ---------------------------------------------------------
     7) FLOATING PARTICLES
  --------------------------------------------------------- */
  const particles = document.getElementById("particles");
  if (particles && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const COUNT = window.innerWidth < 768 ? 22 : 46;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement("span");
      p.className = "pt";
      const size = Math.random() * 3 + 1.5;
      p.style.left = Math.random() * 100 + "vw";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = Math.random() * 12 + 9 + "s";
      p.style.animationDelay = Math.random() * 12 + "s";
      p.style.setProperty("--dx", (Math.random() * 120 - 60) + "px");
      p.style.opacity = Math.random() * 0.6 + 0.3;
      particles.appendChild(p);
    }
  }

  /* ---------------------------------------------------------
     8) PERIODIC GLITCH on hero title
  --------------------------------------------------------- */
  const glitchEls = document.querySelectorAll(".hero-title.glitch");
  if (glitchEls.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => {
      glitchEls.forEach((el) => el.classList.add("glitch-on"));
      setTimeout(() => glitchEls.forEach((el) => el.classList.remove("glitch-on")), 520);
    }, 4200);
  }

  /* ---------------------------------------------------------
     9) FOOTER YEAR (safety)
  --------------------------------------------------------- */
  // Kept static at 2026 per brand spec.

  console.log("%cHEAVYY PROJECT X", "color:#ff1f8f;font-weight:bold;font-size:16px;");
  console.log("%cGaming Download Center — SYSTEM ONLINE", "color:#b9bfc9;");
});
