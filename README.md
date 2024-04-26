# Laporan Praktikum
| MatKul | Pemrograman Berbasis Framework |
| ---    | ---           |
| Nama   | Faricha Aulia |
| NIM    | 2141720155    |
| Kelas  | TI - 3I       |


<table><tr><td>Saya melampirkan screenshot dari setiap step yang saya lakukan pada src/assets</td></tr></table>
<table><tr><td>Namun, saya memiliki permasalahan yaitu style buttonnya tidak muncul. Namun fungsinya masih bekerja. </td></tr></table>

## Praktikum 1
Tampilan web : 
![Hasil](src/assets/01-3.png)
<br/>
Saat cursor diarahkan ke tombol : 
![Hasil](src/assets/01-6.png)
<br/>
Saat cursor dialihkan dari tombol : 
![Hasil](src/assets/01-8.png)
<br/>
Saat tombol ditekan : 
![Hasil](src/assets/01-9.png)

---

## Praktikum 2
![Hasil](src/assets/02-3.png)
**Penjelasan :**
Ketika tombol "Pesan" ditekan, sebuah kotak alert akan muncul dengan pesan "Ini Pesanku". Karena di dalam komponen Tombol_2, Anda telah menambahkan event listener onClick pada tombol tersebut. Ketika tombol ditekan, fungsi alert(isiPesan) akan dipanggil, yang akan menampilkan kotak dialog dengan pesan yang diberikan melalui properti isiPesan.

---

## Praktikum 3
![Hasil](src/assets/03-3.png)
![Hasil](src/assets/03-4.png)
<br/>
Setelah propagation dihentikan : 
![Hasil](src/assets/03-6.png)
--- 

## Praktikum 4
![Hasil](src/assets/04-3.png)
![Hasil](src/assets/04-4.png)
![Hasil](src/assets/04-5.png)
![Hasil](src/assets/04-6.png)
![Hasil](src/assets/04-7.png)

---

## Praktikum 5
Tebak hewan : 
![Hasil](src/assets/05-2.png)
![Hasil](src/assets/05-3.png)

Form nama : 
![Hasil](src/assets/05-5.png)

**Perbedaan** antara kedua komponen tersebut adalah:
- Form memiliki logika validasi dan pengiriman data ke server, sedangkan Form_2 hanya menampilkan dan memperbarui nilai input fields secara real-time.
- Form menggunakan textarea sebagai input, sedangkan Form_2 menggunakan input fields teks.
- Form memiliki state yang lebih kompleks (answer, error, status), sedangkan Form_2 hanya memiliki state untuk firstName dan lastName.


**Keuntungan menghapus state fullName:**
Pada komponen Form_2, nilai fullName dihitung secara real-time dari kombinasi firstName dan lastName. Ini berarti bahwa nilai fullName tidak perlu disimpan dalam state karena bisa dihitung setiap kali firstName atau lastName berubah.

---

## Praktikum 6
![Hasil](src/assets/06-2.png)
![Hasil](src/assets/06-3.png)

Form chat : 
![Hasil](src/assets/06-5.png)

**Penjelasan :**
1. Tujuan dari penulisan key={to.email} pada <Chat key={to.email} contact={to} /> adalah untuk memberikan sebuah identitas unik pada setiap elemen Chat yang dirender. Dalam kasus ini, nilai email dari objek contact (to.email) digunakan sebagai kunci unik untuk setiap elemen Chat.
2. Fungsi dari props key dalam React adalah untuk membantu React mengidentifikasi secara unik setiap elemen dalam sebuah daftar yang dirender. Ketika sebuah daftar dirender ulang, React akan menggunakan key untuk menentukan elemen mana yang telah diubah, ditambahkan, atau dihapus. Dengan demikian, React dapat mengoptimalkan proses render dan hanya memperbarui elemen yang berubah, daripada merender ulang seluruh daftar secara tidak efisien.

---
