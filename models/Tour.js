const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    "name": {type: String, required: true},
    "region": {type: String, required: true},
    "country": {type: String, required: true},
    "days": {type: String, required: true},
    "price": {type: String, required: true},
    "rate": {type: String, required: true},
    "src": {type: String, required: true},
    "type": {type: String, required: true},
    "group": {type: Number, required: true},
    "lang": {type: String, required: true},
    "description" : {type: String, required: true},
    "highlights": {type: Array, required: true},
    "route": {type: Array, required: true},
    orderTour: {type: Types.ObjectId, ref: "Order"}
})


module.exports = model('tours', schema)
