const {setFinished, getFinisedOrder, getUnfinishedOrder, createAdmin} = require('../service/dashboard')

const makeAdmin = async(req, res) => {
    const {password} = req.body;
    const admin = await createAdmin(password);
    res.send(admin);
}

const finishedOrder = async(req, res) => {
    const order = await getFinisedOrder();
    res.send(order);
}

const unfinishedOrder = async(req, res) => {
    const order = await getUnfinishedOrder();
    res.send(order);
}

const setFinish = async(req, res) => {
    const {id} = req.body;
    const order = await setFinished(id);
    res.send(order);
}

module.exports = {
    makeAdmin,
    finishedOrder,
    unfinishedOrder,
    setFinish
}