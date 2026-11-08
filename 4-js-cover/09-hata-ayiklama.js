// ===== 11 · HATA AYIKLAMA  =====
// Çalıştır: node 09-hata-ayiklama.js
// Her hatayı sırayla yorumdan çıkar, oku, tekrar yoruma al. Slogan: Oku. Yaz. Boz. Tekrar dene.

// HATA 1: ReferenceError
// console.log(olmayanDegisken);

// HATA 2: TypeError (en sık karşılaşılan)
// const nesne = null;
// console.log(nesne.ad);

// HATA 3: SyntaxError (parantez eksik)
// console.log('merhaba';

// HATA 4: const'a değer atama
// const sabit = 1;
// sabit = 2;

// ARAÇ 1: console.log ile değeri gör
const urunler = [
  { ad: 'Kalem', fiyat: 10 },
  { ad: 'Defter', fiyat: 25 },
];
console.log(urunler);

// ARAÇ 2: console.table
console.table(urunler);

// ARAÇ 3: typeof ile tipi kontrol et
const girdi = '5';
console.log(typeof girdi, girdi + 1); // string 51 (beklenen 6 değil!)
console.log(Number(girdi) + 1);       // 6

// ARAÇ 4: try / catch ile hatayı yakala
try {
  JSON.parse('{ bozuk json }');
} catch (err) {
  console.log('Yakalanan hata:', err.name, '-', err.message);
}

// ARAÇ 5: debugger (tarayıcıda F12 açıkken kodu durdurur)
function hesapla(a, b) {
  // debugger;  // tarayıcıda yorumu kaldır
  return a * b;
}
console.log(hesapla(3, 4));

// MİNİ ALIŞTIRMA: aşağıdaki kod neden 'NaN' yazar?
function toplam(sayilar) {
  let t = 0;
  for (const s of sayilar) {
    t += s;
  }
  return t;
}
console.log(toplam([1, 2, 'a'])); // '3a' (string birleşti!) -> tip kontrolü
console.log(toplam([1, 2, undefined])); // NaN
