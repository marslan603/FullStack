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

// function tekCift(sayi) {
//   return sayi % 2
//     ? `Girilen ${sayi} Sayisi Tektir`
//     : `Girilen ${sayi} Sayisi Cifttir`;
// }

// console.log(tekCift(5));
// console.log(tekCift(2));

// const sayi = +prompt("Bir Sayi Giriniz:");
// console.log(tekCift(sayi));

// ! 1.YÖNTEM  : FUNCTION Expression
// !------------------------------------------------

console.log("****** FUNC Expression *********");

const tekCift1 = function (sayi) {
  return sayi % 2
    ? `Girilen ${sayi} Sayisi Tektir`
    : `Girilen ${sayi} Sayisi Cifttir`;
};
console.log(tekCift1(23));

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

console.log(`Girilen Sayiların En Buyugu ${buyukBul(5, 7, 345435)}'tur`);
console.log(`Girilen Sayiların En Buyugu ${buyukBul(5, 7)}'tur`);
console.log(`Girilen Sayiların En Buyugu ${buyukBul(12, 345435)}'tur`);

//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//**************************************************/
const topla = function (s1, s2) {
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  return sonuc;
};

console.log(hesapla(3, 5, "+"));
console.log(hesapla(4, 3, "/"));
