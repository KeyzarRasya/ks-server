const Forms = require('../model/Form')

const buatPembelian = async(metadata) => {
    const formulir = new Forms({
        nama:metadata.nama,
        alamat:metadata.alamat,
        noTelp:metadata.noTelp,
        jumlahBeli:metadata.jumlahBeli,
        sudahBayar:metadata.sudahBayar,
        totalHarga:metadata.jumlahBeli * 15000
    });
    await formulir.save();
    return {status:200, message:"pesanan sudah dibuat"};
}

module.exports = {buatPembelian};