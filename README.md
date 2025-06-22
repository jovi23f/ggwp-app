# Kelola Kontak Ahli Gizi

Proyek ini adalah aplikasi penyedia makanan sehat yang dipersonalisasi berdasarkan kebutuhan dan preferensi pengguna. Kali ini, aplikasi fokus pada **manajemen kontak ahli gizi** berbasis **SOA (Service-Oriented Architecture)** menggunakan **Node.js (Express)** di backend dan **React.js** di frontend.

---

## 📁 Struktur Proyek

```
project-root/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── prisma/
│   ├── prismaClient.js
│   ├── app.js
│   └── .env
├── frontend/
│   ├── src/components/
│   ├── src/services/
│   ├── src/App.js
│   ├── public/
│   └── .env
└── README.md
```

---

## 🚀 Cara Menjalankan

### 1️⃣ Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
node app.js
```

### 2️⃣ Frontend
```bash
cd frontend
npm install
npm start
```

---

## ⚙️ Fitur Utama

- Tambah, edit, hapus kontak ahli gizi
- Validasi nomor telepon format +62
- Cek duplikat nomor telepon
- Filter kontak berdasarkan status (Active/Inactive)
- Export data kontak ke file Excel
- UI responsif dengan React.js

---

## 🌐 API Endpoints

| Method | Endpoint | Deskripsi |
|---------|-------------------------------|-------------------------------------------|
| GET | /api/nutritionists | Mendapatkan semua daftar kontak |
| POST | /api/nutritionists | Menambahkan kontak baru |
| PUT | /api/nutritionists/:id | Memperbarui data kontak |
| DELETE | /api/nutritionists/:id | Menghapus kontak |

---

## 📝 Catatan
- Pastikan file `.env` sudah dikonfigurasi dengan URL database Postgres.
- Frontend berjalan di port 3000, backend berjalan di port 5000.

---

## 💻 Kontributor
- Nama: Fidela Jovita Kanedi
- NIM: 6026242016
- Proyek untuk: Mata Kuliah PPS (Pengembangan dan Penerapan Sistem)

---

## 📌 Lisensi
Proyek ini dibuat untuk keperluan akademik.
