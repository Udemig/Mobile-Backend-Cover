// ── 1) Union: "şu veya bu" ──────────────────────────────────
type Id = string | number;
let kullaniciId: Id = 101;
kullaniciId = "A-101";
// kullaniciId = true; // ❌ boolean, Id'ye atanamaz


// ── 2) Literal tipler: izin verilen değerleri sınırla ───────
type Rol = "admin" | "ogretmen" | "ogrenci";
let rol:Rol = "ogretmen"

// ── 3) Narrowing: tipi kod akışıyla daralt ──────────────────
function yazdir(d:string|number){
    if(typeof d === "string"){
        console.log(d.toUpperCase()) // burada d: string
    }else{
        console.log(d.toFixed(2)) // burada d: number
    }

    return d; // burada d: string | number
}

yazdir("selam")

// ── Mini görev: sipariş durumu ──────────────────────────────
type Durum = "bekliyor" | "yolda" | "teslimat"

function durumYazisi(d:Durum):string{
    switch (d) {
        case "bekliyor":
            return "Siparişiniz hazırlanıyor";
        case "yolda":
            return "Siparişiniz yolda";
        case "teslimat":
            return "Siparişiniz teslim edildi";
    }
}

console.log(durumYazisi("yolda"))