# Cevap Anahtarı (SQLite)

Her kod bloğu bağımsız çalışır. Soru numaraları `alistirmalar.md` ile aynıdır.

---

## Bölüm 2: SELECT temelleri

```sql
-- 2.1
SELECT ad, fiyat FROM urunler;

-- 2.2
SELECT ad, fiyat FROM urunler WHERE fiyat > 500 ORDER BY fiyat DESC;

-- 2.3
SELECT DISTINCT sehir FROM musteriler;

-- 2.4
SELECT ad, fiyat FROM urunler ORDER BY fiyat DESC LIMIT 3;

-- 2.5 (bonus) AND, OR'dan önce çalışır: parantez şart
SELECT * FROM musteriler
WHERE (sehir = 'İstanbul' OR sehir = 'İzmir')
  AND kayit_tarihi > '2024-01-01';
```

## Bölüm 3: İleri filtreleme ve NULL

```sql
-- 3.1
SELECT * FROM musteriler WHERE ad LIKE 'M%';

-- 3.2
SELECT * FROM urunler WHERE kategori IN ('Elektronik', 'Kitap');

-- 3.3
SELECT * FROM urunler WHERE fiyat BETWEEN 50 AND 200;

-- 3.4
SELECT * FROM musteriler WHERE email IS NULL;

-- 3.5 (bonus)
SELECT * FROM musteriler WHERE email LIKE '%gmail.com';
```

## Bölüm 4: Fonksiyonlar ve CASE

```sql
-- 4.1
SELECT ad, fiyat, fiyat * 1.20 AS kdvli_fiyat FROM urunler;

-- 4.2
SELECT ad, COALESCE(email, 'Yok') AS email FROM musteriler;

-- 4.3
SELECT UPPER(ad) AS buyuk_ad, LENGTH(ad) AS uzunluk FROM musteriler;

-- 4.4
SELECT ad, fiyat,
  CASE
    WHEN fiyat < 200  THEN 'Ucuz'
    WHEN fiyat < 1000 THEN 'Orta'
    ELSE 'Pahalı'
  END AS fiyat_grubu
FROM urunler;

-- 4.5 (bonus)
SELECT id, tarih, strftime('%Y', tarih) AS yil FROM siparisler;
```

## Bölüm 5: Aggregate ve GROUP BY

```sql
-- 5.1
SELECT COUNT(*) AS urun_sayisi, AVG(fiyat) AS ortalama_fiyat FROM urunler;

-- 5.2
SELECT kategori, COUNT(*) AS urun_sayisi FROM urunler GROUP BY kategori;

-- 5.3
SELECT kategori, AVG(fiyat) AS ort_fiyat
FROM urunler
GROUP BY kategori
ORDER BY ort_fiyat DESC;

-- 5.4
SELECT kategori, COUNT(*) AS urun_sayisi
FROM urunler
GROUP BY kategori
HAVING COUNT(*) >= 3;

-- 5.5 (bonus) WHERE satırları gruplamadan önce süzer
SELECT kategori, AVG(fiyat) AS ort_fiyat
FROM urunler
WHERE fiyat > 500
GROUP BY kategori;

-- 5.6 COUNT(*) tüm satırları, COUNT(email) yalnızca NULL olmayanları sayar
SELECT COUNT(*) AS tum_musteri, COUNT(email) AS emaili_olan FROM musteriler;
```

## Bölüm 6: JOIN

```sql
-- 6A.1
SELECT m.ad, s.tarih, s.adet
FROM siparisler s
INNER JOIN musteriler m ON s.musteri_id = m.id;

-- 6A.2
SELECT m.ad, s.tarih, s.adet
FROM siparisler s
INNER JOIN musteriler m ON s.musteri_id = m.id
WHERE m.sehir = 'Ankara';

-- 6B.1 COUNT(s.id): eşleşmeyen satırda NULL olduğu için 0 döner (COUNT(*) 1 verirdi!)
SELECT m.ad, COUNT(s.id) AS siparis_sayisi
FROM musteriler m
LEFT JOIN siparisler s ON s.musteri_id = m.id
GROUP BY m.id, m.ad
ORDER BY siparis_sayisi DESC;

-- 6B.2 anti-join kalıbı
SELECT m.ad
FROM musteriler m
LEFT JOIN siparisler s ON s.musteri_id = m.id
WHERE s.id IS NULL;

-- 6C.1
SELECT m.ad AS musteri, u.ad AS urun, s.adet, u.fiyat * s.adet AS tutar
FROM siparisler s
JOIN musteriler m ON s.musteri_id = m.id
JOIN urunler u    ON s.urun_id = u.id;

-- 6C.2
SELECT m.ad, SUM(u.fiyat * s.adet) AS toplam_harcama
FROM siparisler s
JOIN musteriler m ON s.musteri_id = m.id
JOIN urunler u    ON s.urun_id = u.id
GROUP BY m.id, m.ad
ORDER BY toplam_harcama DESC;

-- 6C.3
SELECT u.kategori, SUM(u.fiyat * s.adet) AS toplam_satis
FROM siparisler s
JOIN urunler u ON s.urun_id = u.id
GROUP BY u.kategori
ORDER BY toplam_satis DESC;

-- 6C.4 (bonus)
SELECT m.ad, SUM(u.fiyat * s.adet) AS toplam_harcama
FROM siparisler s
JOIN musteriler m ON s.musteri_id = m.id
JOIN urunler u    ON s.urun_id = u.id
GROUP BY m.id, m.ad
ORDER BY toplam_harcama DESC
LIMIT 3;
```

## Bölüm 7: Veriyi değiştirmek

```sql
-- 7.1 kopya tablo (primary key taşımaz)
CREATE TABLE musteriler_test AS SELECT * FROM musteriler;

-- 7.2 id değerini elle verin
INSERT INTO musteriler_test (id, ad, sehir, email, kayit_tarihi)
VALUES (31, 'Yeni Musteri', 'Ankara', NULL, '2025-10-01');

-- 7.3
UPDATE musteriler_test SET email = 'yok@ornek.com' WHERE email IS NULL;

-- 7.4
DELETE FROM musteriler_test WHERE sehir = 'Konya';

-- 7.5 (bonus) işlem geri alınır, satır sayısı değişmez
BEGIN;
DELETE FROM musteriler_test;
ROLLBACK;

-- 7.6 temizlik
DROP TABLE musteriler_test;
```

**Güvenli alışkanlık:** UPDATE ve DELETE'ten önce aynı `WHERE` ile bir `SELECT` çalıştırıp hangi satırların etkileneceğini görün. `WHERE` unutulursa tüm satırlar etkilenir.

## Mini proje

```sql
-- P.1 En çok gelir getiren 3 kategori
SELECT u.kategori, SUM(u.fiyat * s.adet) AS gelir
FROM siparisler s
JOIN urunler u ON s.urun_id = u.id
GROUP BY u.kategori
ORDER BY gelir DESC
LIMIT 3;

-- P.2 Şehir bazında toplam harcama
SELECT m.sehir, SUM(u.fiyat * s.adet) AS toplam_harcama
FROM siparisler s
JOIN musteriler m ON s.musteri_id = m.id
JOIN urunler u    ON s.urun_id = u.id
GROUP BY m.sehir
ORDER BY toplam_harcama DESC;

-- P.3 Hiç sipariş vermeyen müşteri sayısı
SELECT COUNT(*) AS siparissiz_musteri
FROM musteriler m
LEFT JOIN siparisler s ON s.musteri_id = m.id
WHERE s.id IS NULL;

-- P.4 (zor) Ortalama satır tutarından büyük en az bir siparişi olan müşteriler
-- (alt sorgu içerir, bir sonraki dersin kancası)
SELECT DISTINCT m.ad
FROM siparisler s
JOIN musteriler m ON s.musteri_id = m.id
JOIN urunler u    ON s.urun_id = u.id
WHERE u.fiyat * s.adet > (
  SELECT AVG(u2.fiyat * s2.adet)
  FROM siparisler s2
  JOIN urunler u2 ON s2.urun_id = u2.id
)
ORDER BY m.ad
```

---

## Hata avı: ne olur, ne söylenmeli (SQLite'ta test edildi)

SQLite diğer sistemlere göre **hoşgörülüdür**. Bazı hatalar burada çalışır, MySQL (katı mod), PostgreSQL ve SQL Server'da hata verir. Bunu öğrencilere açıkça söyleyin, yoksa kötü alışkanlık edinirler.

| # | Sorgu sorunu | SQLite'ta sonuç | Söylenecek |
|---|---|---|---|
| 1 | `email = NULL` | **0 satır** (hata yok) | NULL ile `=` karşılaştırması hiçbir zaman doğru olmaz. `IS NULL` kullanılır. Düzeltme: `WHERE email IS NULL` (6 satır döner). |
| 2 | `SELECT sehir, ad, COUNT(*) ... GROUP BY sehir` | **Çalışır**, her şehir için rastgele bir ad gösterir | PostgreSQL ve SQL Server hata verir. "Gruptaki 5 kişiden hangi adı göstersin?" diye sorun. Düzeltme: `ad` sütununu kaldırın veya `GROUP BY`'a ekleyin. |
| 3 | `WHERE AVG(fiyat) > 500` | **Hata:** `misuse of aggregate` | Aggregate koşulu gruplamadan sonra süzülür, `HAVING` kullanılır. |
| 4 | `FROM musteriler m, siparisler s` (JOIN koşulu yok) | **3000 satır** (30 × 100) | Cartesian product. Her müşteri her siparişle eşleşti. `ON` koşulu eksikti. |
| 5 | `WHERE kdvli > 1000` (alias WHERE'de) | **Çalışır** (SQLite'a özgü) | Standart SQL'de `WHERE`, `SELECT`'ten önce çalıştığı için alias görünmez. PostgreSQL ve MySQL hata verir. Çalışma sırası konusuyla bağlayın. |
| 6 | `"Ankara" OR sehir = 'Bursa' AND ...` | **8 satır** (hata yok) | İki sorun: (a) çift tırnak string için değil, SQLite hoşgörüyle kabul eder, standart olarak tek tırnak kullanılır. (b) `AND`, `OR`'dan önce çalışır, parantezsiz sonuç beklediğinizden farklı olur. Parantezli doğru sonuç: **4 satır**. |

**Bonus tuzak (6B.1 ile bağlantılı):** `LEFT JOIN` + `COUNT(*)` kullanırsanız siparişi olmayan müşteri de "1 sipariş" görünür, çünkü `COUNT(*)` eşleşmeyen satırı da sayar. `COUNT(s.id)` doğru sonucu (0) verir. Canlı gösterin.
