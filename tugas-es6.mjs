const transaksi = [
    { id: 1, barang: "Facial Wash", harga: 35000, qty: 2, kategori: "Skincare" },
    { id: 2, barang: "Moisturizer", harga: 65000, qty: 1, kategori: "Skincare" },
    { id: 3, barang: "Sunscreen", harga: 50000, qty: 2, kategori: "Skincare" },
    { id: 4, barang: "Lip Tint", harga: 45000, qty: 2, kategori: "Makeup" },
    { id: 5, barang: "Foundation", harga: 85000, qty: 1, kategori: "Makeup" },
    { id: 6, barang: "Mascara", harga: 40000, qty: 1, kategori: "Makeup" }
];

console.log("Data Transaksi Belanja");
console.table(transaksi);

const skincare = transaksi.filter(
    ({ kategori }) => kategori === "Skincare"
);

console.log("Barang Kategori Skincare");
console.table(skincare);

const hasilBelanja = transaksi.map(
    ({ barang, harga, qty }) => ({
        barang,
        harga,
        qty,
        subtotal: harga * qty
    })
);

console.log("Subtotal Setiap Barang");
console.table(hasilBelanja);

const total = hasilBelanja.reduce(
    (jumlah, { subtotal }) => jumlah + subtotal,
    0
);

const totalSkincare = skincare.reduce(
    (jumlah, { harga, qty }) => jumlah + harga * qty,
    0
);

console.log("Total Belanja: Rp" + total.toLocaleString("id-ID"));
console.log("Total Skincare: Rp" + totalSkincare.toLocaleString("id-ID"));