interface Kullanici {
  id: number;
  ad: string;
  mail: string;
}

// ── 1) Utility types: mevcut tipten yeni tip türet ──────────
type Guncelleme = Partial<Kullanici> // tüm alanlar opsiyonel
type Zorunlu = Required<Guncelleme> // tüm alanlar zorunlu
type Ozet = Pick<Kullanici, "id"|"ad"> // sadece seçilenler
type Mailsiz = Omit<Kullanici,"mail"> // seçilen hariç
type Puanlar = Record<string,number> // anahtar -> değer

// Örnek
const x:Guncelleme = {ad:"Ali"} 

const sinav:Puanlar = {
    ali:90,
    mehmet:40
}

// ReturnType: fonksiyonun dönüş tipini al
function kullaniciOlustur(){
    return {id:1,ad:"Yeni",aktif:true}
}

// { id: number; ad: string; aktif: boolean }
type Olusan = ReturnType<typeof kullaniciOlustur>

// ── 2) enum yerine union ve as const ────────────────────────
const Roller = ["admin", "ogretmen", "ogrenci"] as const;

const rol: "admin" | "ogretmen" | "ogrenci" = Roller[0]