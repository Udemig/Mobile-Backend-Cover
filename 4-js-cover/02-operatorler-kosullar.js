// ===== 02 · OPERATÖRLER VE KOŞULLAR (12 dk) =====
// Çalıştır: node 02-operatorler-kosullar.js

// ADIM 1: == ve ===
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); // true
// Kural: her zaman === kullan

// ADIM 2: mantıksal operatörler
const yas = 20;
console.log(yas >= 18 && yas < 65); // true (ve)
console.log(yas < 18 || yas > 65); // false (veya)
console.log(!(yas >= 18)); // false (değili - tersi)
console.log("---------------------------------------");

// ADIM 3: truthy / falsy
// Falsy: false, 0, '', null, undefined, NaN. Gerisi truthy.
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(NaN));
// console.log(Boolean([])); true
console.log("---------------------------------------");

// ADIM 4: || ile varsayılan değer
const kullanici1 = "";
const kullanici2 = "Ali";
console.log(kullanici1 || "Misafir"); // Misafir
console.log(kullanici2 || "Misafir"); // Ali
console.log("---------------------------------------");

// ADIM 5: if / else if / else
const not = 23;

if (not >= 90) {
  console.log("Pekiyi");
} else if (not >= 50) {
  console.log("Geçti");
} else {
  console.log("Kaldı");
}

console.log("-----------------------------------");

// ADIM 6: terneray operator
const durum = not >= 90 ? "Pekiyi" : not >= 50 ? "Geçti" : "Kaldı";
console.log(durum);
console.log("-----------------------------------");

// ADIM 7: switch case
// aynı değişkenin farklı değerleri üzerinden koşul yazılıcaksa kullanılır
const gun = 6;

switch (gun) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  default:
    console.log("Başka bir gün");
}
