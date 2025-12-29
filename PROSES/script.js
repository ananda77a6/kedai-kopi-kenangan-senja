function hitungLuas() {
  let r = document.getElementById('jari').value
  let luas = Math.PI * r * r
  alert(`KALAU JARI JARI NYA ADALAH ${r} MAKA LUAS LINGKARAN NYA ADALAH ${luas.toFixed(2)}`)
}
// CODINGAN BUAT CARI LUAS SEGITIGA
function hitungSegitiga() {
  const A = document.getElementById('alas').value
  const T = document.getElementById('tinggi').value
  const H = 0.5 * A * T
  alert(`JIKA ALASNYA ADALAH ${A} DAN TINGIINYA ADALAH ${T} MAKA LUAS SEGITIGA TERSEBUT ADALAH ${H.toFixed(2)}`)
}
// PERSEGI 
function hitungPersegi() {
  const sisi = document.getElementById('sisi').value
  const hasilPersegi = sisi * sisi 
  alert(`KALAU SISI DARI PERSEGI ADALAH ${sisi} MAKA LUAS PERSEGI ADALAH ${hasilPersegi}`)
}

// JAJAR GENJANG 
function hitungJajar() {
const bawah = document.getElementById('bawah').value
const atas = document.getElementById('atas').value
const jawab = bawah * atas 
alert(`JIKA ALAS NYA ADALAH ${bawah} DAN TINGINYA ADALAH ${atas} MAKA LUASDARI JAJAR GENJANG TERSEBUT ADALAH ${jawab.toFixed(2)}`)
}

// SELESAI 





// TUGAS KE2 
function totalGaji() {
  const nama = document.getElementById('nama').value
  const gaji = document.getElementById('gaji').value
  const absen = document.getElementById('absen').value
  const total = gaji * absen 
  alert(`HALO ${nama} TOTAL GAJI KAMU BULAN INI ADALAH ${total.toFixed(3)}`)
}