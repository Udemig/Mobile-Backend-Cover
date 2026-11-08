// ===== 06 · NESNELER =====
// Çalıştır: node 06-object.js

// ADIM 1: nesne tanımla ve eriş
const ogrenci = {ad:"Ali", yas: 20}
console.log(ogrenci.ad)     // nokta ile
console.log(ogrenci["yas"]) // köşeli parantez ile

// ADIM 2: değiştir, ekle, sil
ogrenci.yas = 21
ogrenci.sinif = "A"
delete ogrenci.sinif
console.log(ogrenci)

// ADIM 3: destructuring
const {ad,yas} = ogrenci
console.log(ad,yas)

// ADIM 4: spread ile kopyala ve güncelle (orijinal bozulmaz)
const kopya = {...ogrenci, sinif:"B"}
console.log(kopya)

// ADIM 5: iç içe nesne
const ogr = {
    ad:"zeynep",
    notlar: {vize:70,final:90},
    hobiler: ["kitap","yüzme"]
}
console.log(ogr.notlar.final) // 90
console.log(ogr.hobiler[0])   // kitap
console.log("===========================")

// ADIM &: Object.keys / entries
console.log("object: ",ogrenci) 
console.log("keys: ", Object.keys(ogrenci)) 
console.log("values: ", Object.values(ogrenci)) 
console.log("entries: ", Object.entries(ogrenci)) 
