const mongoose = require('mongoose');
const {v4:uuid} = require('uuid')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    token:{
        type:String,
        require:true,
        default:uuid()
    },
    password:{
        type:String,
        require:true
    }
})  

userSchema.statics.findAndValidate = async function(token, password){
    let findUser = await Model.findOne({token:token});
    if(!findUser){
        return false;
    }
    const isValid = await bcrypt.compare(password, findUser.password);
    return isValid? findUser : false;
}

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const Model = mongoose.model('User', userSchema);

module.exports = Model;