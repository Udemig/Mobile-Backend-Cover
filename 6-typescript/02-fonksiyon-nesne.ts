// ── 1) Fonksiyon tipleri ────────────────────────────────────
function topla(a:number,b:number):number {
    return a + b
}

topla(20,40)

// opsiyonel (?) ve varsayılan (=) parametre
function selamla(ad:string,unvan?:string):string{
    return unvan ?  `${unvan} ${ad}` : ad
}

console.log(selamla("Ayşe"))

function us(taban:number, kuvvet:number = 1):number{
    return taban ** kuvvet
}

console.log(us(2,10))

// değer döndürmeyen fonksiyon: void
function logla(mesaj:string):void{
    console.log(`[LOG] ${mesaj}`)
}

function req():void{
    fetch("/ürün/3",{method:"DELETE"})
}


// ── 2) interface: nesnenin şeklini tanımla ──────────────────
interface Ogrenci {
    id:number;
    ad:string;
    mail?:string; // opsiyonel
    readonly kayitYili:number; // sonradan değiştirilmez
}

const zeynep:Ogrenci = {id:1, ad:"Zeynep", kayitYili:2025};
zeynep.id = 2;
// zeynep.kayitYili = 2026; !HATA

// ── 3) type: takma ad (union, tuple vb. için) ───────────────
type Sd = string[]
const ogrenciler:Sd = ["a","b","c"]

type Kordinat = [number,number,number]
const x:Kordinat = [45.3422,56.4354,14000]