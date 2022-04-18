const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    order: [{type: Types.ObjectId, ref: 'Order'}]
})

module.exports = model('User', schema)