// ── 1) Problem: any tipi kaybettirir ────────────────────────
function ilkEleman(liste:string[]):string {
   return liste[0]
}
function ilkEleman2(liste:number[]):number {
   return liste[0]
}

ilkEleman(["a","b","c"])
ilkEleman2([1,2,3])

// ── 2) Çözüm: generic fonksiyon <T> ─────────────────────────
function ilk<T>(liste:T[]):T {
    return liste[0]
}

const a = ilk<string>(["a","b","c"])
const b = ilk<number>([1,2,3])

// ── 3) Extends: kısıt koymak <T> ─────────────────────────
interface Dizi<T extends string | number>{
    deger: T[],
    ekle: (eleman:T) => void
}

const ogrenciler:Dizi<string> = {
    deger: ["Ali","Veli","Osman"],
    ekle: (eleman) => ogrenciler.deger.push(eleman)
}