# SQL Alıştırmaları (SQLite)

Veri seti: `musteriler`, `urunler`, `siparisler` (`veri_seti.sql` dosyasını çalıştırın).

```
musteriler(id, ad, sehir, email, kayit_tarihi)
urunler(id, ad, kategori, fiyat)
siparisler(id, musteri_id, urun_id, adet, tarih)
```

Tarihler `'2024-05-17'` biçiminde metin olarak saklanır.

---

## Bölüm 2: SELECT temelleri
1. Tüm ürünlerin adını ve fiyatını listeleyin.
2. Fiyatı 500 TL'den pahalı ürünleri, fiyata göre azalan sırayla listeleyin.
3. Müşterilerin yaşadığı şehirleri tekrarsız listeleyin.
4. En pahalı 3 ürünü getirin.
5. *(Bonus)* İstanbul veya İzmir'de yaşayan ve 2024'ten sonra kayıt olan müşterileri listeleyin.

## Bölüm 3: İleri filtreleme ve NULL
1. Adı "M" ile başlayan müşterileri listeleyin.
2. Kategorisi 'Elektronik' veya 'Kitap' olan ürünleri `IN` ile listeleyin.
3. Fiyatı 50 ile 200 TL arasında olan ürünleri listeleyin.
4. E-postası kayıtlı olmayan müşterileri listeleyin.
5. *(Bonus)* E-postası `gmail.com` ile biten müşterileri listeleyin.

## Bölüm 4: Fonksiyonlar ve CASE
1. Ürünleri %20 KDV dahil fiyatıyla birlikte listeleyin.
2. E-postası boş olan müşterilerde "Yok" yazdırın.
3. Müşteri adlarını büyük harfle ve ad uzunluğuyla birlikte getirin.
4. Ürünleri fiyata göre "Ucuz" (<200), "Orta" (<1000), "Pahalı" olarak etiketleyin.
5. *(Bonus)* Siparişleri yıl bilgisiyle listeleyin (`strftime`).

## Bölüm 5: Aggregate ve GROUP BY
1. Toplam ürün sayısını ve ortalama fiyatı bulun.
2. Kategori başına ürün sayısını bulun.
3. Kategori başına ortalama fiyatı, pahalıdan ucuza sıralayın.
4. En az 3 ürünü olan kategorileri bulun.
5. *(Bonus)* Fiyatı 500 TL üstü ürünler arasında kategori başına ortalama fiyatı bulun.
6. `COUNT(*)` ile `COUNT(email)` sonuçlarını `musteriler` tablosunda karşılaştırın. Neden farklı?

## Bölüm 6: JOIN

**A. INNER JOIN**
1. Her siparişin müşteri adını, tarihini ve adedini listeleyin.
2. Ankara'daki müşterilerin siparişlerini listeleyin.

**B. LEFT JOIN**
1. Tüm müşterileri sipariş sayılarıyla listeleyin (siparişi olmayanlar 0 görünsün).
2. Hiç sipariş vermemiş müşterileri bulun.

**C. Çoklu JOIN**
1. Müşteri adı, ürün adı, adet ve satır tutarını listeleyin.
2. Müşteri başına toplam harcamayı bulun, çoktan aza sıralayın.
3. Kategori bazında toplam satış tutarını bulun.
4. *(Bonus)* En çok harcama yapan ilk 3 müşteriyi bulun.

---

## Bölüm 7: Veriyi değiştirmek (INSERT, UPDATE, DELETE)
Orijinal tabloları bozmamak için kopya tablo üzerinde çalışın.
1. `musteriler` tablosunun kopyasını oluşturun: `musteriler_test` (`CREATE TABLE ... AS SELECT`).
2. Kopyaya yeni bir müşteri ekleyin (`INSERT`).
3. E-postası boş olanlara `yok@ornek.com` yazın (`UPDATE`).
4. Konya'daki müşterileri kopyadan silin (`DELETE`).
5. *(Bonus)* `BEGIN` ile başlayıp tüm kopyayı silin, sonra `ROLLBACK` ile geri alın.
6. Temizlik: `DROP TABLE musteriler_test;`

---

## Mini proje: "Siz bir e-ticaret şirketinin veri analistisiniz"
1. En çok gelir getiren 3 ürün kategorisi hangisi?
2. Hangi şehirden gelen müşteriler toplamda en çok harcıyor?
3. Hiç sipariş vermeyen müşteri sayısı kaç?
4. *(Zor)* Ortalama sipariş satırı tutarından (fiyat × adet) daha büyük en az bir siparişi olan müşteriler kimler?

---

## "Neden çalışmadı?" hata avı (derste canlı gösterim için)
Aşağıdaki sorguların her biri bir hata veya tuzak içerir. Her biri için sorun ne, nasıl düzeltilir?

```sql
-- 1
SELECT * FROM musteriler WHERE email = NULL;

-- 2
SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;

-- 3
SELECT kategori, AVG(fiyat) FROM urunler WHERE AVG(fiyat) > 500 GROUP BY kategori;

-- 4
SELECT m.ad, s.tarih FROM musteriler m, siparisler s;

-- 5
SELECT fiyat * 1.2 AS kdvli FROM urunler WHERE kdvli > 1000;

-- 6
SELECT * FROM musteriler WHERE sehir = "Ankara" OR sehir = 'Bursa' AND kayit_tarihi > '2024-01-01';
```
