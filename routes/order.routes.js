const {Router} = require('express')
const Order = require('../models/Order')
// const User = require('../models/User')
// const config = require('config')
// const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/', async (req, res) => {
    try {
        const {firstName, lastName, tel, email} = req.body

        const order = new Order({
            firstName,
            lastName,
            tel,
            email,
        })

        await order.save()

        console.log(order)

        res.status(201).json({message: "Бронирование прошло успешно"})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!!'})
    }
})

module.exports = router