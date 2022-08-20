// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//* ORNEK:
//************************************************/

yazdir();
//!Fonksiyonun Tanımlanması (declaration)
function yazdir() {
  console.log("Merhaba");
}

yazdir(); //*invoke, call, çağırma/*
yazdir();

//* Örnek 2;
//************************************************* */

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

function selamla(ad, soyAd = "") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}

selamla("Can", "Yilmaz");
selamla("Ayse");

//*ÖRNEK3;
//***************************************************** */

function yasHesapla(isim, dogumTarihi) {
  const sonuc = `${isim} in yası ${new Date().getFullYear() - dogumTarihi} dir`;
  return sonuc;
}
const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980));

//*ÖRNEK:
//************************************************** */

function tekCift(sayi) {
  return sayi % 2
    ? `Girilen ${sayi} Sayisi Tektir`
    : `Girilen ${sayi} Sayisi Cifttir`;
}

console.log(tekCift(5));
console.log(tekCift(2));

const sayi = +prompt("Bir Sayi Giriniz:");
console.log(tekCift(sayi));
