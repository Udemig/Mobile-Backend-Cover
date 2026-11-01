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
