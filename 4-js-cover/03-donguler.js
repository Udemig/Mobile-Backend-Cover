// ===== 03 · DÖNGÜLER =====
// Çalıştır: node 03-donguler.js

// ADIM 1: for
for (let i = 1; i <= 3; i++) {
  console.log("Tur", i);
}
console.log("===========================");

// ADIM 2: çarpım tablosu
for (let sayi = 1; sayi <= 10; sayi++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${sayi} x ${i} = ${sayi * i}`);
  }
}
console.log("===========================");

// ADIM 3: 1-10 arası çift sayılar (continue)
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue; // tek sayıyı atla

  console.log(i);
}
console.log("===========================");

// ADIM 4: while
let n = 3;

while (n > 0) {
  console.log(n);
  n--; // bunu unutursak sonsuz döngü olur
}
console.log("===========================");

// ADIM 5: break ile erken çıkış
for (i = 1; i <= 100; i++) {
  if (i * i > 50) {
    console.log("İlk karesi 50den büyük sayı: ", i);
    break;
  }
}
console.log("===========================");

// ADIM 6: for...of ile dizi gezme
const meyveler = ["elma", "armut", "muz"];

for (const meyve of meyveler) {
  console.log(meyve);
}
console.log("===========================");

// ADIM 7: indeksli gezme
for (let i = 0; i < meyveler.length; i++) {
  console.log(i, meyveler[i]);
}
console.log("===========================");

// ADIM 8: toplam hesaplama (biriktirici desen)
let toplam = 0;

for (let i = 1; i <= 5; i++) {
  toplam += i;
}
console.log("1...5 toplamı: ", toplam);
