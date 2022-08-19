console.log("Js is Runnig");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}-Merhaba`);
// }
// /** DÖNGÜ BAŞLAMADIĞI İÇİN ÇALIŞMAZ */
// for (let j = 0; j == 100; j++) {
//   console.log(`${j}`);
// }

//* n'e kadar olan sayıların Toplamını Yazan Kod:*/
// const n = Number(prompt("Bir Sayı Giriniz"));
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   // toplam = toplam + i
//   toplam += i;
//   console.log(toplam, i);
// }
// console.log(`Sonuç = ${toplam}`);

//* 0-100 Arasında 10 adet rastgele tam sayı üreten Kodu For Dongüsü İle yazınız */

// let rastgele = 0;
// for (let i = 1; i <= 10; i++) {
//   rastgele = Math.round(Math.random() * 100);
//   console.log(rastgele);
// }
// console.log(rastgele);

//* Girilen SAyının Asal Sayı Olup Olmadığını Kontrol Ediniz */

// const sayi = Number(prompt("Bir Sayı Giriniz"));
// let asal = true;
// if (sayi <= 1) {
//   alert("SAYI 1'den Büyük Olmalıdır");
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       asal = false;
//       break;
//     }
//   }
//   const sonuc = asal === true ? "Asaldır" : "Asal Değildir";
//   console.log(`${sayi} ${sonuc}`);
// }

// const sayi = Number(prompt("Bir Sayı Giriniz"));
// if (sayi <= 1) {
//   alert("SAYI 1'den Büyük Olmalıdır");
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       console.log(`${sayi} Asal Değildir`);
//       break;
//     } else if (sayi % i === !0) {
//       console.log(`${sayi} Asaldır`);
//       break;
//     }
//   }
// }

// const sayi = Number(prompt("Bir Sayı Giriniz"));
// if (sayi <= 1) {
//   alert("SAYI 1'den Büyük Olmalıdır");
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0 ? console.log(`${sayi} Asal Değildir`) : console.log(`${sayi} Asal Değildir`)
//     }
//   }

// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

const n = Number(prompt("Bir sayi girniz:"));

let toplam = 0;
for (let i = 1; i <= n; i++) {
  // toplam = toplam + i;
  toplam += i;
  console.log(toplam, i);
}

console.log("SONUC:", toplam);

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

for (let i = 1; i <= 10; i++) {
  const rasgele = Math.round(Math.random() * 100);
  console.log(rasgele);
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
let asal = true;

if (sayi <= 1) {
  alert("Sayi 1'den buyuk olmalidir.");
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asal = false;
      break;
    }
  }

  const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
  console.log(`${sayi} ${sonuc}`);
}

// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not = +prompt("Lutfen 0-100 arasinda bir not girniz.");

while (not < 0 || not > 100) {
  console.log("Not 0-100 arasinda olmalidir");
  not = prompt("Lutfen 0-100 arasinda bir not giriniz.");
}

console.log("Giridiginiz Not:", not);

// if (not < 0 || not > 100) {
//   alert("Not 0-100 arasinda olmalidir");
// }

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

let not1;
do {
  not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
  if (not1 < 0 || not1 > 100) {
    console.log("Not 0-100 arasinda olmaldir.");
    alert("Not 0-100 arasinda olmaldir.");
  }
} while (not1 < 0 || not1 > 100);

console.log("Giridiginiz Not:", not1);

//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

let tahmin;
do {
  tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
  hak -= 1;
  if (tahmin === rastgele) {
    console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
    break;
  } else if (tahmin < rastgele) {
    console.log("ARTTIR ⬆️");
  } else {
    console.log("AZALT ⬇️");
  }
} while (hak > 0);

if (tahmin !== rastgele) {
  console.log("Uzgunuz oyunu kaybettiniz 😔😔");
}

// for (hak;hak>0; hak--){

// }
