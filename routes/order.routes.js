const {Router} = require('express')
const Order = require('../models/Order')
const router = Router()

router.post('/', async (req, res) => {
    try {
        const {firstName, lastName, tel, email, orderTour, owner} = req.body

        const order = new Order({
            firstName,
            lastName,
            tel,
            email,
            owner,
            orderTour
        })

        await order.save()

        res.status(201).json({message: "Бронирование прошло успешно"})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!!'})
    }
})

module.exports = router