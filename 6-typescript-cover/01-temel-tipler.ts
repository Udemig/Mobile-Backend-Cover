export {}

// ── 1) Temel tipler ─────────────────────────────────────────
const ad:string = "Ayşe"
const yas:number = 29;
const aktif:boolean = true;

let puan:number = 90;
// puan = "doksan" // ❌ Type 'string' is not assignable to type 'number'

// ── 2) Type inference:
let sehir = "Ankara" // TS tipi kendisi çıkarır: string
// sehir = 10 !HATA

// ── 3) any ve unknown ───────────────────────────────────────
let a:any = "Merhaba";
// a.olmayanMethod() // any: derleyici susar, program çalışırken patlar

let u:unknown = "merhaba"

if(typeof u === "string"){
  u.toUpperCase() 
}

// ── 4) Array ve tuple ───────────────────────────────────────
const notlar:number[] = [1,5,7,4,6,4,56,7,]
const notlar2:Array<number> = [1,5,7,4,6,4,56,7];
// notlar.push("dört") !HATA

const kisi:[string, number] = ["Ali",35] // sabit uzunluk ve sıra

// ── 5) null güvenliği (strict mod) ──────────────────────────
function selamla(ad:string|null){
    return ad?.toUpperCase() ?? "Varsayılan";
}

console.log(selamla("ali"),selamla(null))