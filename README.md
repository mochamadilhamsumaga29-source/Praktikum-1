# Praktikum 1: Kartu Profil Mahasiswa

## Deskripsi & Tujuan
Praktikum ini bertujuan untuk memahami konsep dasar JavaScript dalam lingkungan peramban (*web browser*), yang meliputi:
1. Menghubungkan berkas JavaScript eksternal ke dalam dokumen HTML menggunakan tag `<script>` dengan atribut `defer`.
2. Mendeklarasikan variabel menggunakan kata kunci `const` dan `let` sesuai karakteristik nilainya.
3. Mengenal dan menggunakan berbagai tipe data dasar JavaScript (*String*, *Number*, *Boolean*, dan *Array*).
4. Menampilkan hasil keluaran (*output*) ke tab **Console** peramban (*developer tools*) dan ke antarmuka halaman web melalui manipulasi Document Object Model (DOM) serta *template literal*.

---

## Struktur Berkas
- **`index.html`**: Dokumen HTML utama yang memuat struktur kartu profil mahasiswa (`.kartu`), penataan gaya visual CSS internal, dan pemanggilan berkas JavaScript eksternal.
- **`script.js`**: Berkas logika JavaScript yang berisi deklarasi data mahasiswa, pencetakan data ke Console, dan manipulasi elemen HTML untuk menampilkan data ke halaman.
- **`README.md`**: Berkas dokumentasi pembahasan kode dan jawaban atas seluruh pertanyaan analisis praktikum.

---

## Pembahasan Kode

### 1. Dokumen HTML (`index.html`)
- **Struktur Halaman**:
  Menggunakan elemen container `<div class="kartu">` yang memuat elemen heading `<h2 id="nama">Nama</h2>` untuk menampung nama mahasiswa dan paragraf `<p id="detail">Detail</p>` untuk menampung rincian informasi lainnya.
- **Atribut `id`**:
  Atribut `id="nama"` dan `id="detail"` berfungsi sebagai pengenal unik (*unique identifier*) yang akan diakses oleh JavaScript melalui metode DOM `document.getElementById()`.
- **Pemanggilan Skrip dengan `defer`**:
  ```html
  <script src="script.js" defer></script>
  ```
  Tag skrip diletakkan pada bagian `<head>` dengan menambahkan atribut `defer`. Atribut ini memastikan berkas `script.js` diunduh secara asinkron bersamaan dengan pemindaian (*parsing*) HTML, tetapi eksekusinya ditunda hingga seluruh struktur pohon DOM selesai dibentuk.

### 2. Logika JavaScript (`script.js`)

#### A. Deklarasi Variabel dan Tipe Data
```javascript
// 1. Deklarasi variabel
const nama = "Rahmat Imran";
const nim = "05301425096";
let semester = 3;
const aktif = true;
const hobi = ["Coding", "Bermain Gitar", "Berenang"];
```
- **`const`**: Digunakan untuk nilai yang tidak akan diubah/ditugaskan ulang (*re-assign*), seperti `nama` (*String*), `nim` (*String*), status `aktif` (*Boolean*), dan daftar `hobi` (*Array*).
- **`let`**: Digunakan untuk variabel `semester` (*Number*) karena nilainya bersifat dinamis dan dapat bertambah seiring waktu.
- **Tipe Data yang Digunakan**:
  - `String`: Teks diapit tanda kutip (`"Rahmat Imran"`, `"05301425096"`).
  - `Number`: Bilangan bulat numerik (`3`).
  - `Boolean`: Nilai logika kebenaran (`true`).
  - `Array`: Kumpulan nilai berurutan berindeks berbasis nol (*zero-based index*) (`["Coding", "Bermain Gitar", "Berenang"]`).

#### B. Menampilkan Output ke Console
```javascript
// 2. Output ke Console
console.log("Nama:", nama);
console.log("Tipe data semester:", typeof semester);
console.log("Tipe data aktif:", typeof aktif);
console.log("Hobi pertama:", hobi[0]);
```
- **`console.log()`**: Perintah standar untuk mencetak data atau pesan ke konsol peramban (*DevTools* F12), sangat berguna dalam proses *debugging*.
- **Operator `typeof`**: Digunakan untuk mengevaluasi tipe data variabel saat *runtime*. `typeof semester` menghasilkan `"number"`, dan `typeof aktif` menghasilkan `"boolean"`.
- **Pengaksesan Array**: Elemen pertama array diakses melalui indeks ke-0 (`hobi[0]`).

#### C. Menampilkan Output ke Halaman Web (Manipulasi DOM)
```javascript
// 3. Output ke halaman
document.getElementById("nama").textContent = nama;
document.getElementById("detail").innerHTML = `
    NIM: ${nim}<br>
    Semester: ${semester}<br>
    Status: ${aktif ? "Aktif" : "Cuti"}<br>
    Hobi: ${hobi.join(", ")}
`;
```
- **`document.getElementById("nama").textContent = nama;`**:
  Mengambil elemen dengan `id="nama"` dan menetapkan nilai teksnya secara aman menggunakan properti `textContent`.
- **`document.getElementById("detail").innerHTML = ...`**:
  Mengisi elemen `id="detail"` dengan struktur HTML (menggunakan tag `<br>` untuk pemisah baris).
- **Template Literal (Tanda Backtick `` ` ``)**:
  Memungkinkan penyisipan variabel langsung ke dalam string dengan sintaks `${...}` serta penulisan string multi-baris tanpa perlu konkatenasi manual tanda plus (`+`).
- **Ternary Operator `${aktif ? "Aktif" : "Cuti"}`**:
  Kondisi ringkas: jika variabel `aktif` bernilai `true`, teks yang ditampilkan adalah `"Aktif"`; jika `false`, menampilkan `"Cuti"`.
- **`hobi.join(", ")`**:
  Metode array bawaan untuk menggabungkan seluruh elemen array menjadi sebuah string tunggal yang dipisahkan oleh tanda koma dan spasi.

---

## Jawaban dan Penjelasan Pertanyaan Analisis

### Pertanyaan 1
> **Apa pesan error yang muncul pada langkah 7 dan mengapa terjadi?**

#### Jawaban:
Pesan error yang muncul di tab Console browser adalah:
```text
Uncaught TypeError: Assignment to constant variable.
```

#### Penjelasan:
- Pesan kesalahan tersebut terjadi karena variabel `nama` dideklarasikan menggunakan kata kunci **`const`** (*constant*).
- Variabel yang dideklarasikan dengan `const` memiliki sifat *read-only* (hanya-baca) setelah dilakukan inisialisasi nilai awal. Variabel tersebut tidak mengizinkan penugasan ulang nilai (*re-assignment*).
- Ketika kita mengeksekusi perintah `nama = "Tes";`, mesin JavaScript mendeteksi pelanggaran aturan penetapan nilai konstanta sehingga melempar pengecualian bertipe **`TypeError`** dan menghentikan eksekusi kode di baris tersebut.

---

### Pertanyaan 2
> **Apa yang terjadi jika atribut `defer` dihapus? Jelaskan penyebabnya.**

#### Jawaban:
Jika atribut `defer` dihapus dari tag `<script src="script.js">` yang terletak di dalam `<head>`, maka halaman web akan **gagal menampilkan data profil** (kartu tetap berisi teks default "Nama" dan "Detail"), dan di Console browser akan muncul pesan error:
```text
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
```
(atau `setting 'innerHTML'`).

#### Penyebab:
1. **Urutan Parsing Dokumen HTML**:
   Secara *default*, ketika peramban membaca tag `<script>` tanpa atribut `defer` di dalam bagian `<head>`, peramban akan langsung menghentikan sementara proses pembacaan (*parsing*) HTML dan langsung mengeksekusi berkas JavaScript tersebut.
2. **Elemen DOM Belum Terbentuk**:
   Pada saat skrip dieksekusi, elemen `<body>` beserta elemen `<h2 id="nama">` dan `<p id="detail">` belum sempat dibaca dan belum dibuat di dalam memori struktur pohon DOM (*Document Object Model*).
3. **Mengembalikan `null`**:
   Akibatnya, pemanggilan fungsi `document.getElementById("nama")` menghasilkan nilai `null` (elemen tidak ditemukan). Mengakses properti `.textContent` atau `.innerHTML` dari sebuah objek yang bernilai `null` menyebabkan terjadinya kesalahan fatal *runtime* (`TypeError`).
4. **Fungsi `defer`**:
   Atribut `defer` memberi instruksi kepada browser untuk mengunduh skrip di latar belakang dan baru mengeksekusinya **setelah seluruh struktur pohon DOM selesai dibentuk**, sehingga semua elemen dengan aman dapat ditemukan.

---

### Pertanyaan 3
> **Apa perbedaan hasil `textContent` dan `innerHTML` jika diisi teks `<b>Halo</b>`?**

#### Perbandingan Hasil:
| Properti | Tampilan di Layar | Interpretasi Browser | Tingkat Keamanan |
| :--- | :--- | :--- | :--- |
| **`textContent`** | `<b>Halo</b>` | Diperlakukan murni sebagai string teks biasa (*plain text*). Karakter `<` dan `>` diubah otomatis menjadi entitas teks (`&lt;` dan `&gt;`). | **Sangat Aman**, kebal terhadap serangan injeksi skrip berbahaya (*Cross-Site Scripting* / XSS). |
| **`innerHTML`** | **Halo** (teks tebal) | Di-parse dan dirender sebagai tag markup HTML oleh *browser HTML parser*. Tag `<b>` dieksekusi menjadi elemen cetak tebal. | **Berisiko XSS**, jika teks masukan berasal dari input pengguna tanpa sanitasi ketat. |

#### Penjelasan:
- **`textContent`** hanya menyisipkan teks literal ke dalam node elemen tanpa memicu *HTML parser*. Sangat disarankan untuk menampilkan data teks murni, nama pengguna, atau masukan form agar terhindar dari celah keamanan.
- **`innerHTML`** mengevaluasi seluruh string sebagai sintaks HTML penuh, membuat elemen-elemen baru di dalam node DOM. Digunakan ketika kita memang sengaja ingin menambahkan tag pemformatan (seperti tag `<br>`, `<span>`, `<strong>`, dll.).
