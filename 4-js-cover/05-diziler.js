// ===== 05 · DİZİLER VE ARRAY METOTLARI (22 dk) =====
// Çalıştır: node 05-diziler.js

// ---------- 1. TEMEL ----------
// ADIM 1: tanımla, eriş
const meyve = ["elma","armut","muz"]
console.log(meyve[0]) // elma
console.log(meyve.at(0)) // elma
console.log(meyve.length) // 3
console.log(meyve[meyve.length - 1]) // muz
console.log(meyve.at(-1)) // muz

// ADIM 2: ekle / çıkar
meyve.push("karpuz") // sona ekle
console.log(meyve);

const cikan = meyve.pop() // sondan çıkar
console.log(cikan,meyve)

meyve.unshift("kiraz") // başa ekle
console.log(meyve)

const cikan2 = meyve.shift() // baştakini çıkar
console.log(cikan2,meyve)

// ADIM 3: arama
console.log(meyve.includes("elma"))    // true
console.log(meyve.includes("deneme"))  // false
console.log(meyve.indexOf("armut"))    // 1 (yoksa -1)

// ---------- 2. METOTLAR ----------
const sayilar = [1,2,3,4,5,6]

// ADIM 4: önce for ile iki katını bul, sonra map ile kısalt
const ikiKati = [];
for(const s of sayilar){
    ikiKati.push(s * 2)
}
console.log(ikiKati)

console.log(sayilar.map((s =>  s * 2)))

// ADIM 5: forEach (yeni dizi döndürmez)
sayilar.forEach(s => console.log("Sayı:",s))

// ADIM 6: filter
const ciftler = sayilar.filter(s => s % 2 === 0);
console.log(ciftler) // [2,4,6]

// ADIM 7: find
const ilkBuyuk = sayilar.find((s) => s > 3) 
console.log(ilkBuyuk) // 4

// ADIM 8: reduce (toplam)
const toplam = sayilar.reduce((t,s) => t + s,0);
console.log(toplam) // 21

// ADIM 9: sort
const karisik = [10,2,33,4]
console.log(karisik.sort()) // [ 10, 2, 33, 4 ]
console.log(karisik.sort((a,b) => b-a)) // [ 33, 10, 4, 2 ]

// ADIM 10: zincirleme
const sonuc = 
sayilar.filter((s) => s % 2 === 0).map((s) => s * 10)

console.log(sonuc)