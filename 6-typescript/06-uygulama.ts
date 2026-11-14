// kullanıcı tipi
interface Kullanici  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {lat:string,lng:string}
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

// Sonuç tipi
type Sonuc<T> = {durum:"basarili", veri:T} | {durum:"hata", mesaj:string}

// api isteğ atan fonksiyon
async function kullanicilariGetir(): Promise<Sonuc<Kullanici[]>> {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
    
        if(!res.ok) return {durum:"hata",mesaj: "Sunucu hatası" }

        const veri = await res.json() as Kullanici[];

       return {durum:"basarili", veri}
    } catch (error) {
        return {durum:"hata",mesaj: "Sunucu hatası" }
    }
}

