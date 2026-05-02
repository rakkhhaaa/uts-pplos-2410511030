# 🔐 UTS PPLOS A - Auth Service (JWT Laravel)

## 👤 Identitas

* **Nama**: Rakha Aqilatha Farid
* **NIM**: 2410511030
* **Kelas**: A Informatika

---

## 📌 Deskripsi Project

Project ini merupakan **REST API Authentication Service** menggunakan Laravel dengan implementasi **JSON Web Token (JWT)**.

Service ini berfungsi untuk:

* Registrasi user
* Login dan generate token
* Validasi user menggunakan token
* Refresh token
* Logout user

---

## 🧱 Arsitektur Sistem

Project menggunakan konsep **microservice**, dimana:

* Auth Service sebagai service utama autentikasi
* Menggunakan JWT sebagai sistem keamanan
* Endpoint dilindungi menggunakan middleware `auth:api`

---

## ⚙️ Teknologi yang Digunakan

* Laravel
* JWT (`tymon/jwt-auth`)
* MySQL
* Postman (testing API)

---

## 🔗 Endpoint API

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

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan serve --port=8001
```

---

## 🔑 Contoh Data Login

```text
email: rakha@test.com
password: 123456
```

---

## 📢 Catatan

* Server berjalan di:

```text
http://127.0.0.1:8001
```

* Semua endpoint API diawali dengan:

```text
/api
```

* Endpoint `/me`, `/logout`, dan `/refresh` membutuhkan token (Bearer)

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

---

## 📄 Dokumentasi Laporan

Tersedia pada folder:

```text
/docs
```

---

## 🎥 Demo Video

to be announced

---

## 📂 Struktur Project

```text
project-root/
│
├── gateway/
│   ├── server.js
│   ├── package.json
├── services/
│   └── auth-service/
│   └── book-service/
│   └── transaction-service/
│
├── docs/
├── postman/
├── README.md
```

---

## ✅ Status

✔ Register berhasil
✔ Login menghasilkan JWT token
✔ Endpoint protected berjalan
✔ Refresh token berhasil
✔ Logout berhasil

---

## 📌 Penutup

Project ini dibuat untuk memenuhi tugas **UTS PPLOS** dengan implementasi autentikasi berbasis JWT menggunakan Laravel.
