const {Schema, model} = require("mongoose");

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    tel: {type: String, required: true, unique: true},
    // orders: {type: Object, required: true},
})


module.exports = model('Order', schema)
