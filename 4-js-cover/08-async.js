// ===== 10 · ASENKRON JAVASCRIPT =====
// Çalıştır: node 08-async.js

// ADIM 1:  Promise ile fetch
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log("Hata!:", err.message))

// ADIM 2: async await (aynı iş)
async function getir(){
    try {
       const res = await fetch(url)
       if(!res.ok) throw new Error("Sunucu hatası: " + res.status)
       const data = await res.json()
       console.log(data.map((u) => u.name))
    } catch (error) {
       console.log(error)
    }
}

getir()


// ADIM 3: setTimeout
function bekle(ms){
    return new Promise(cozuldu => setTimeout(cozuldu,ms))
}

async function  sirayla() {
    console.log("Başladı");
    await bekle(1000);
    console.log("1 sn geçti")
    await bekle(4000)
    console.log("5 sn geçti")
}

sirayla()