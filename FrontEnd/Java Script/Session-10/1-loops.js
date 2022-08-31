//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

const dizi = [-5, 15, 22, -4, 45, 78];

const topla = (n) => {
  let negatifler = 0;
  let pozitifler = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler += n[i];
    } else {
      pozitifler += n[i];
    }
  }
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

let adSoyad = [];
for (let i in adlar) {
  adSoyad[i] = adlar[i] + " " + soyAdlar[i];
}
console.log(`Ad Soyad birleşimi : `, adSoyad);

const birlestir = (arr1, arr2) => {
  let adSoyad = [];
  for (let i in arr1) {
    adSoyad[i] = arr1[i] + arr2[i];
  }
  console.log(`Ad Soyad birleşim fonksiyon ile : `, adSoyad);
};

birlestir(adlar, soyAdlar);

//*?-------------------------------------------------------
//*? SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//*? ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//*? ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*? fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//*? fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//?--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
const findStudent = (arr, search) => {
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
  }
  if (!counter) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};

const name = prompt("Please enter a name").toLocaleLowerCase();
console.log(findStudent(students, name));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
