# PPWL 11 / Monorepo - AWS Team

### 👥 Kelas A / Tim 1

| Nama                              | Job                                      |
|-----------------------------------|-------------------------------------------|
| Aisyah                            | Admin                                     |
| Adhelia Issabel                   | Budget & Cost                             |
| Chalsyta Setyani                  | RDS Database                              |
| Adhelia Issabel & Chalsyta Setyani| Lambda Backend                            |
| Iqlima Nurain                     | S3 + CloudFront Frontend, Test & Docs     |

---

## 🎨 Link Desain
- Canva: https://canva.link/zt5n0he0vl939nl

---

## 📌 Deskripsi Project
Project ini merupakan implementasi arsitektur **Monorepo berbasis AWS** yang digunakan untuk mendukung pengembangan aplikasi secara terintegrasi dalam satu repository.

---

## 🏗️ Arsitektur yang Digunakan
Beberapa layanan AWS yang digunakan dalam project ini:

- **AWS Lambda** → Backend (serverless)
- **Amazon RDS** → Database
- **Amazon S3** → Penyimpanan frontend
- **Amazon CloudFront** → CDN untuk distribusi frontend
- **IAM & Management** → Akses dan kontrol


## Bug 
🐛 Bug Report: Lambda Tidak Bisa Konek ke RDS PostgreSQL
Pesan Error:
Invalid `prisma.user.findMany()` invocation:
Can't reach database server at 
monorepo-db.cq56a8ueg13r.us-east-1.rds.amazonaws.com
Lokasi Bug:
Fase 3 & 4 – RDS Database + Lambda Backend. Tepatnya di: AWS Lambda → monorepo-backend → koneksi ke RDS PostgreSQL.
Alur Sebelum Bug Didapatkan:

RDS PostgreSQL berhasil dibuat dengan status Available
Data berhasil dimigrate ke RDS via pgAdmin4
Lambda function berhasil di-deploy dengan DATABASE_URL yang benar
Parameter Store /monorepo/DATABASE_URL sudah diupdate dengan connection string yang benar
Saat frontend mengakses /users, Lambda gagal konek ke RDS
Muncul error Can't reach database server

Solusi yang Sudah Dicoba:

❌ Memastikan DATABASE_URL sudah benar di Parameter Store dan Lambda env vars
❌ Mengubah FRONTEND_URL di Parameter Store agar CORS tidak error
❌ Memastikan security group postgrePublic allow inbound 0.0.0.0/0 port 5432
❌ Memastikan security group sgRdsInternal sudah terpasang di RDS
❌ Menambahkan Lambda ke VPC yang sama dengan RDS
❌ Mengeluarkan Lambda dari VPC kembali

Status: 🔴 Belum Terselesaikan

Diduga terkait konfigurasi network antara Lambda dan RDS. Kemungkinan RDS tidak memiliki Public accessibility yang aktif, namun opsi tersebut tidak tersedia saat Modify DB instance karena menggunakan template Sandbox.
