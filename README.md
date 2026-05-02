# 🔐 UTS PPLOS A - Sistem Auth dengan API Gateway (JWT Laravel)

## 👤 Identitas

* **Nama**: Rakha Aqilatha Farid
* **NIM**: 2410511030
* **Kelas**: Informatika (A)

---

## 📌 Deskripsi Project

Project ini merupakan implementasi **arsitektur microservice** dengan **API Gateway** sebagai pintu utama komunikasi client.

Sistem terdiri dari:

* **API Gateway (Node.js)** → menerima semua request dari client
* **Auth Service (Laravel)** → menangani autentikasi menggunakan JWT

Fitur utama:

* Registrasi user
* Login & generate token
* Validasi user (protected route)
* Refresh token
* Logout

---

## 🧱 Arsitektur Sistem

Sistem menggunakan konsep **API Gateway + Microservices**:

* Client mengakses API melalui Gateway
* Gateway meneruskan request ke Auth Service
* Auth Service memproses autentikasi menggunakan JWT

---

## ⚙️ Teknologi yang Digunakan

* Node.js (API Gateway)
* Laravel (Auth Service)
* JWT (`tymon/jwt-auth`)
* MySQL / SQLite
* Postman (testing API)

---

## 🌐 Struktur Service & Port

| Service      | Port | Keterangan          |
| ------------ | ---- | ------------------- |
| API Gateway  | 8000 | Entry point client  |
| Auth Service | 8001 | Service autentikasi |

---

## 🔗 Endpoint API (Melalui Gateway)

Semua request dilakukan melalui:

```text
http://127.0.0.1:8000/api
```

---

### 🔐 Auth

* `POST /api/register` → registrasi user
* `POST /api/login` → login & mendapatkan token
* `POST /api/refresh` → refresh token

---

### 🔒 Protected Route

* `GET /api/me` → mendapatkan data user
* `POST /api/logout` → logout user

---

## 🚀 Cara Menjalankan Project

### 1️⃣ Jalankan Auth Service

```bash
cd services/auth-service
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan serve --port=8001
```

---

### 2️⃣ Jalankan API Gateway

```bash
cd gateway
npm install
node server.js
```

---

## 🔑 Contoh Data Login

```text
email: rakha2@test.com
password: 123456
```

---

## 📢 Catatan

* Gateway berjalan di:

```text
http://127.0.0.1:8000
```

* Semua request client HARUS melalui gateway

* Endpoint `/me`, `/logout`, dan `/refresh` membutuhkan:

```text
Authorization: Bearer TOKEN
```

---

## 📸 Dokumentasi API

Tersedia pada folder:

```text
/postman
```

Berisi:

* register
* login
* me
* refresh
* logout

---

## 📄 Dokumentasi Laporan

Tersedia pada folder:

```text
/docs
```

---

## 🎥 Demo Video

https://youtu.be/s3h49RJzIEc?si=HNvH4E_TpfadKX1h

---

## 📂 Struktur Project

```text
UTS-PPLOS-A-2410511030/
│
├── gateway/
│   ├── server.js
│   ├── package.json
│
├── services/
│   └── auth-service/
│   └── book-service/
│   └── transaction-service/
│
├── docs/
│   └── Diagram-Arsitektur.png/
│   └── Laporan-UTS-PPLOS-2410511030.pdf/
├── postman/
│   └── collection.json/
│   └── login.png/
│   └── logout.png/
│   └── me.png/
│   └── refresh.png/
│   └── register.png/
│   └──test.png/
├── README.md
```

---

## ✅ Status

✔ API Gateway berjalan
✔ Auth Service berjalan
✔ Register berhasil
✔ Login menghasilkan JWT token
✔ Endpoint protected berjalan
✔ Refresh token berhasil
✔ Logout berhasil

---

## 📌 Penutup

Project ini dibuat untuk memenuhi tugas **UTS PPLOS** dengan implementasi **arsitektur microservice menggunakan API Gateway dan autentikasi JWT berbasis Laravel**.

---
