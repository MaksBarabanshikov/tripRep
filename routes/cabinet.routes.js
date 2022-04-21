const {Router} = require('express')
const Order = require('../models/Order')
const Tour = require('../models/Tour')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const {userId} = req.query

        const order = await Order.find({owner: userId})

        if (order.length === 0 ) {
            return res.status(404).json({message: 'У вас пока нет забронированных туров'})
        }

        const tourId = order[0].orderTour.tour

        const tour = await Tour.findById(tourId)

        res.json({order, tour})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({_id: req.params.id})
        res.json(order)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.get('/personal', async (req, res) => {
    try {
        const {userId} = req.query

        const user = await User.findById(userId)

        res.json(user)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router