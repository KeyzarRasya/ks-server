const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    nama:{
        type:String,
        require:true
    },
    alamat:{
        type:String,
        require:true
    },
    noTelp:{
        type:String,
        require:true
    },
    jumlahBeli:{
        type:Number,
        require:true
    },
    totalHarga:{
        type:Number,
        require:true
    },
    sudahBayar:{
        type:Boolean,
        require:true
    },
    pesananSelesai:{
        type:Boolean,
        require:true,
        default:false
    }
})

const Model = mongoose.model('Form', FormSchema);

module.exports = Model;