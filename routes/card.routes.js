const {Router} = require('express')
const Tour = require('../models/Tour')


const router = Router()

router.get('/', async (req, res) => {
    try {
        const tour = await Tour.find()
        res.json(tour)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!!'})
    }
})

module.exports = router

