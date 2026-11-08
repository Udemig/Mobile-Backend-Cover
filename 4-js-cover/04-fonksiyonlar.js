// ===== 04 · FONKSİYONLAR VE SCOPE  =====
// Çalıştır: node 04-fonksiyonlar.js

// ADIM 1: Klasik fonksiyon
function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}
console.log(topla(2, 3)); // 5

// ADIM 2: arrow function (aynı işin kısa yazımı) (one line function)
const carp = (sayi1, sayi2) => sayi1 * sayi2;
console.log(carp(2, 3)); // 6

// tek parametre, tek satır
const selam = (ad) => `Merhaba ${ad}`;
console.log(selam("Ali"));

// Adım 3: return yoksa
function yazdir(x){
  console.log(x);
}

// Adım 4: varsayılan parametre
function selamla(ad = "Dünya"){
  return `Hoş geldin ${ad}`
}

console.log(selamla())
console.log(selamla("Zeynep"))

// ADIM 5: Örnek
function ortalama(sayilar){
  let toplam = 0;
  for(const sayi of sayilar){
    toplam += sayi
  }
  return toplam / sayilar.length
}

console.log(ortalama([70,80,90,100]))

// ADIM 6: fonksiyonu basşka bir fonksiyon içerisinde kullanmak (callback)
function tekrarla(kac,islem){
  for (let i = 0; i < kac; i++) {
    islem(i)
  }
}

tekrarla(3, (i) => console.log("Merhaba",i))

// ====== SCOPE ====== 
// ADIM 7: dış değişkeni içeriden okumak

const okul = "Merkez"

function sinif(){
  const hoca = "Ayşe"
  console.log(okul,hoca)
}

sinif()

// ADIM 8: Blok Scope
if(true){
  let blokici ="sadece blok"
  console.log(blokici)
}

// console.log(blokici) // refference error 