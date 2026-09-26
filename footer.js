/* ==========================================================
   footer.js — Footer มาตรฐานของเว็บ "คัมภีร์ใช้ AI" (ศูนย์ AiBA / PIM)
   วิธีใช้: วาง <script src="footer.js"></script> ก่อน </body> ในทุกหน้า
   แก้ลิงก์โซเชียล/ข้อความที่นี่ที่เดียว มีผลทุกหน้า
========================================================== */
(function () {
  const LINKS = {
    facebook: "https://www.facebook.com/AiBACenter",
    youtube:  "https://www.youtube.com/@AiBAPIM",
    tiktok:   "https://www.tiktok.com/@aiba_center",
    website:  "https://et.pim.ac.th/aiba-home/"
  };
  const AIBA_TEXT = "AiBA Center · Artificial Intelligence Beyond Academy · ศูนย์ความเป็นเลิศด้านปัญญาประดิษฐ์แบบครบวงจร";
  const PIM_TEXT  = 'สถาบันการจัดการปัญญาภิวัฒน์ · 85/1 หมู่ 2 ถ.แจ้งวัฒนะ ต.บางตลาด อ.ปากเกร็ด นนทบุรี 11120 · โทร 0 2855 0000 · <a href="https://www.pim.ac.th" target="_blank" rel="noopener">www.pim.ac.th</a>';
  const COPY = "© 2026 ศูนย์ AiBA — สถาบันการจัดการปัญญาภิวัฒน์ | ALL RIGHTS RESERVED";

  const ICON = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z"/></svg>',
    youtube:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2c-.3-1-1-1.8-2-2C19.2 4.7 12 4.7 12 4.7s-7.2 0-9 .5c-1 .3-1.8 1-2 2C.5 9 .5 12 .5 12s0 3 .5 4.8c.3 1 1 1.8 2 2 1.8.5 9 .5 9 .5s7.2 0 9-.5c1-.3 1.8-1 2-2 .5-1.8.5-4.8.5-4.8s0-3-.5-4.8zM9.7 15.1V8.9l6 3.1-6 3.1z"/></svg>',
    tiktok:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8c-1.1-.7-1.8-1.9-1.9-3.3h-3.2v13.1c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .6 0 .9.1V9.5c-.3 0-.6-.1-.9-.1-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1V9c1.3.9 2.9 1.5 4.6 1.5V7.3c-1 0-1.9-.5-2.7-1.5z"/></svg>',
    website:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg>'
  };

  const CSS = `
  .site-footer { margin-top: 50px; font-family: "Sarabun","Noto Sans Thai",Tahoma,sans-serif; --sf-dark: #2b2140; --sf-text: #e9ddff; --sf-a: #ff6f61; --sf-b: #ff9f43; --sf-head: "Kanit","Noto Sans Thai",Tahoma,sans-serif; }
  .site-footer .footer-top { background: var(--sf-dark); color: var(--sf-text); text-align: center; padding: 16px 18px 14px;
      background-image: radial-gradient(circle at 20% 30%, rgba(255,255,255,.06) 0 2px, transparent 3px), radial-gradient(circle at 70% 70%, rgba(255,255,255,.05) 0 2px, transparent 3px); background-size: 140px 140px, 200px 200px; }
  .site-footer .footer-socials { display: flex; justify-content: center; gap: 12px; margin-bottom: 10px; }
  .site-footer .soc { width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, var(--sf-a), var(--sf-b)); color: #fff; display: inline-flex; align-items: center; justify-content: center; transition: transform .15s, filter .15s; }
  .site-footer .soc svg { width: 22px; height: 22px; }
  .site-footer .soc:hover { transform: translateY(-3px); filter: brightness(1.1); }
  .site-footer .footer-center { display: inline-flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
  .site-footer .footer-aiba-logo { height: 40px; width: auto; background: #fff; border-radius: 10px; padding: 3px 6px; }
  .site-footer .footer-center-name { font-family: var(--sf-head); font-weight: 600; font-size: 16px; color: #fff; letter-spacing: .3px; }
  .site-footer .footer-bottom { background: linear-gradient(135deg, var(--sf-a), var(--sf-b)); color: #fff; text-align: center; padding: 16px 18px 14px; }
  .site-footer .footer-inst { display: inline-flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center; font-family: var(--sf-head); font-weight: 600; font-size: 16px; letter-spacing: .3px; }
  .site-footer .footer-inst a { color: #fff; text-decoration: underline; }
  .site-footer .footer-pim-logo { height: 40px; width: auto; background: #fff; border-radius: 10px; padding: 3px; }
  .site-footer .footer-copy { font-size: 12.5px; opacity: .9; margin-top: 8px; letter-spacing: .5px; }
  `;

  const html = `<footer class="site-footer">
    <div class="footer-top">
      <div class="footer-socials">${Object.keys(ICON).map(k => `<a class="soc" href="${LINKS[k]}" target="_blank" rel="noopener" title="${k}">${ICON[k]}</a>`).join("")}</div>
      <div class="footer-center"><img src="logo-aiba.png" alt="AiBA" class="footer-aiba-logo"><span class="footer-center-name">${AIBA_TEXT}</span></div>
    </div>
    <div class="footer-bottom">
      <div class="footer-inst"><img src="logo-pim.png" alt="PIM" class="footer-pim-logo"><span>${PIM_TEXT}</span></div>
      <div class="footer-copy">${COPY}</div>
    </div>
  </footer>`;

  function mount() {
    if (document.querySelector(".site-footer")) return;
    const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
    const wrap = document.createElement("div"); wrap.innerHTML = html;
    document.body.appendChild(wrap.firstElementChild);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
