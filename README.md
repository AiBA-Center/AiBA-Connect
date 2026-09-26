# AiBA Connect — ฉบับใช้ง่ายสำหรับทุกคน

เว็บสอนผู้สูงอายุใช้ AI แบบไม่ต้องจำคำสั่ง ทุกระบบทำงานเหมือนกัน: เลือกปุ่ม → ได้ Prompt สำเร็จรูป → คัดลอกไปวางใน ChatGPT / Gemini / CapCut

## โครงไฟล์
```
index.html            หน้าหลัก (เมนู 4 หมวด)
style.css             ธีมกลาง (สว่างสดใส + โหมดมืด)
app.js                โค้ดทุกระบบ (ปุ่มเลือก, ช่องอื่น ๆ, พูดแทนพิมพ์, คัดลอก, เปิดแอป, จำงาน, โหมดทีละข้อ)
page-*.html           หน้าแยกแต่ละระบบ (image, poster, greeting, flow, capcut, gem, ask, post, scam, scam-game, guide)
img-XX.jpg            ภาพตัวอย่าง (โปสเตอร์ 12 ภาพ, ภาพอวยพร 4 ภาพ)
game.html             เกมปิดท้าย (มือถือผู้เข้าอบรม)
screen.html           จอกลาง (โปรเจกเตอร์ + แถบควบคุมของวิทยากร)
setup.html            ตั้งค่า Google Sheet/Apps Script + สร้าง QR (วิทยากร ทำครั้งเดียว)
manifest.webmanifest, icon-*.png, apple-touch-icon.png, favicon-32.png   ไอคอน "เพิ่มไปหน้าจอหลัก"
```

## แก้อะไร ที่ไหน
- คำถามควิซปิดท้าย → `QUESTIONS` ใน game.html และ screen.html (ต้องตรงกัน)
- สถานการณ์เกมวัยเก๋ารู้ทัน → `GAME_SCENES` ใน app.js
- ลิงก์แอป → `APP_LINKS` / `MOBILE_APPS` ใน app.js
- ภาพตัวอย่างโปสเตอร์/อวยพร → `POSTER_DATA` / `GREET_STYLES` ใน app.js 
- สีธีม → ตัวแปร `:root` ต้นไฟล์ style.css
