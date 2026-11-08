// ===== 07-09 · DOM, EVENT VE FORM=====
// Çalıştır: index.html'i Live Server ile aç, F12 ile konsolu göster.

// ---------- ADIM 1: SEÇME ----------
const baslik = document.querySelector("#baslik");
const maddeler  = document.querySelectorAll(".madde");
console.log(baslik);
console.log(maddeler.length);

// SOR: Olmayan bir seçici ne döndürür?
console.log(document.querySelector("#yok")) // null

// ---------- ADIM 2: DEĞİŞTİRME ----------
baslik.textContent = "Yeni Başlık"
baslik.classList.add("kirmizi")
baslik.classList.remove("kirmizi")
baslik.classList.toggle("kirmizi") // varsa çıkarır yoksa ekler

// Yeni eleman üretme
const yeniMadde = document.createElement("li")
yeniMadde.textContent = "Kiraz";
yeniMadde.classList.add("madde");
document.querySelector(".liste").append(yeniMadde)

// ---------- ADIM 3: EVENT ----------
const sayacBtn = document.querySelector("#sayac-btn");
let sayac = 0;

sayacBtn.addEventListener("click", () => {
    sayac++
    sayacBtn.textContent = `Tıklama: ${sayac}`
})

// ---------- ADIM 4: FORM (görev listesi) ----------
const form = document.querySelector("#gorev-form")
const input = document.querySelector("#gorev-input")
const liste = document.querySelector("#gorev-listesi")

form.addEventListener("submit", (e) => {
    e.preventDefault(); // sayfa yenilemesini engelledik
    const metin = input.value.trim();
    if(!metin) return;

    const li = document.createElement("li");
    li.textContent = metin;
    liste.append(li);
    input.value = ""
})

// ---------- ADIM 5: EVENT DELEGATION ----------
// Yeni eklenen li'lere tek tek dinleyici eklemeyiz; ebeveyni dinleriz.
liste.addEventListener("click", e => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("bitti") // tamamlandı / geri al
    }
})

liste.addEventListener("dblclick", e => {
    if(e.target.tagName === "LI"){
        e.target.remove() // çift tıkla sil
    }
})