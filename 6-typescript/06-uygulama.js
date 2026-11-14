"use strict";
async function kullanicilariGetir() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok)
            return { durum: "hata", mesaj: "Sunucu hatası" };
        const veri = await res.json();
        console.log(veri);
    }
    catch (error) {
        return { durum: "hata", mesaj: "Sunucu hatası" };
    }
}
kullanicilariGetir();
