// ===== 01 · DEĞİŞKENLER VE VERİ TİPLERİ =====
// Çalıştır: node 01-degiskenler-tipler.js

// ADIM 1: const ve let
const ad = "Ayşe";
let puan = 80;

puan = puan + 10;
// ad = 'Ali';   // TypeError: Assignment to constant variable.

console.log(ad, puan); // Ayşe 90

// ADIM 2: isimlendirme
const ogrenciAdi = "Mehmet"; // camelCase
const OGRENCI_SAYISI = 25; // sabitde değerler için kullanılabiliyor

// ADIM 3: veri tipleri ve typeof
console.log(typeof "merhaba"); // string
console.log(typeof 42); // number
console.log(typeof "42"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof { ad: "ali" }); // object

// ADIM 4: undefined ve null farkı
let bos;
console.log(bos); // undefined: değer verilmemiş
const hicbirSey = null;
console.log(hicbirSey); // null: bilerek boş

// ADIM 5: string birleştirme ve template literal
const mesaj1 = "Merhaba " + ad + ", puanın " + puan;
const mesaj2 = `Merhaba ${ad}, puanın ${puan}`;

console.log(mesaj1);
console.log(mesaj2);

// ADIM 6: tip dönüşümü
console.log(Number("42") + 1); // 43
console.log("42" + 1); // '421'
console.log(Number("abc")); // NaN
console.log(String(123) + 4); // '1234'
