const Forms = require('../model/Form');
const User = require('../model/User');

const createAdmin = async(password) => {
    const newAdmin = new User({
        password
    })
    await newAdmin.save();
    return {status: 200, account:newAdmin};
}

const setFinished = async(id) => {
    const order = await Forms.findById(id);
    order.pesananSelesai = true;
    await order.save();
    return {status:200, message:`order from ${id} has been set to finish`};
}

const getUnfinishedOrder = async() => {
    const unfinished = await Forms.find({pesananSelesai:false});
    return {status:200, order:unfinished};
}

const getFinisedOrder = async() => {
    const finished = await Forms.find({pesananSelesai:true});
    return {status:200, order:finished};
}

module.exports = {
    setFinished,
    getUnfinishedOrder,
    getFinisedOrder,
    createAdmin
}