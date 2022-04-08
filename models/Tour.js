const {Schema, model} = require("mongoose");

const schema = new Schema({
    "name": {type: String, required: true},
    "region": {type: String, required: true},
    "country": {type: String, required: true},
    "days": {type: String, required: true},
    "price": {type: String, required: true},
    "rate": {type: String, required: true}
})


module.exports = model('tour', schema)
