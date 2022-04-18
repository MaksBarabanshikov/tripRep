const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: "User"},
    orderTour: {
        people: {type: Array, required: true},
        price: {type: Number, required: true},
        tour: {type: Types.ObjectId, ref: "tours"}
    },
})


module.exports = model('Order', schema)
