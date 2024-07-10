const {buatPembelian} = require('../service/form');

const handleBeli = async(req, res) => {
    const {nama, alamat, noTelp, jumlahBeli, sudahBayar} = req.body;
    const pembelian = await buatPembelian({nama, alamat, noTelp, jumlahBeli, sudahBayar});
    res.send(pembelian);
}

module.exports = {
    handleBeli
}