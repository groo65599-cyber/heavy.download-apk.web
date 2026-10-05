# HEAVYY PROJECT X — Gaming Download Center

Official download center for **HPX SMINE**, **HPX MOUSE PRO** and **HPX PIRATE**.
A modern, responsive, cyberpunk-styled static website built with **HTML5, CSS3, Bootstrap 5.3, Bootstrap Icons and vanilla JavaScript** — no build step, no framework.

> HEAVY METAL + CYBERPUNK + GAMING + HACKER TERMINAL + NEON PINK + CHROME METAL

---

## ✨ Features

- Sticky glass navbar with neon-pink border, blur and scroll state
- Fullscreen hero with chrome-metallic title, glitch effect, HUD panels, chains, grid & floating particles
- 3 futuristic download cards (HPX SMINE / HPX MOUSE PRO / HPX PIRATE) with hover glow, scanline & corner decorations
- Bootstrap modal for download confirmation (version / platform / size / status)
- Terminal-style **System Status** monitor with blinking indicators
- Cyberpunk **Latest Update** timeline
- Features grid, community CTA, and a neon footer with TikTok & WhatsApp links
- Scroll-reveal animations, button shine, logo glow pulse — all lightweight
- Fully responsive: 1920 / 1440 / 1366 / 1024 / 768 / 480 / 390 / 360 px
- SEO + Open Graph metadata

---

## 📁 File Structure

```
heavyy-project/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── heavyy-logo.png
│   ├── bg.jpg
│   └── icons/
└── README.md
```

---

## 🚀 Cara Menggunakan / Deploy

1. **Buka `index.html`** langsung di browser, atau
2. Jalankan server lokal:
   ```bash
   python3 -m http.server 8080
   ```
   lalu buka `http://localhost:8080`
3. **Hosting gratis:** upload repo ini ke GitHub lalu import ke **Vercel / Netlify** (lihat tutorial di video).

---

## 🔗 Mengubah Link Download

Semua data download ada di satu tempat: **`js/script.js`** → objek `HPX_DOWNLOADS`.

```js
const HPX_DOWNLOADS = {
  smine:    { version:"2.0.6", size:"6.4 MB", url:"https://.../HPX-SMINE-v2.0.6.apk" },
  mousepro: { version:"3.2.1", size:"42 MB",  url:"#" },  // <-- ganti di sini
  pirate:   { version:"1.8.5", size:"120 MB", url:"#" }   // <-- ganti di sini
};
```

Ganti nilai `url` dengan link download asli. Versi & ukuran juga bisa diubah di sini.
Angka yang tampil di kartu (HTML) bisa disesuaikan di `index.html` pada bagian `dl-card__meta`.

---

## 🎨 Kustomisasi Warna

Warna utama diatur sebagai CSS variables di bagian atas `css/style.css`:

```css
:root{
  --pink:#ff1f8f;   /* aksen neon pink  */
  --silver-2:#e6e9ee;
  --bg-0:#050506;   /* background hitam */
}
```

---

## 📞 Kontak

- WhatsApp: **08569035254**
- TikTok: [@elskral_](https://www.tiktok.com/@elskral_)

---

© 2026 **HEAVYY PROJECT X** — ALL RIGHTS RESERVED.
