const {Router} = require('express')
const Tour = require('../models/Tour')
const router = Router()

router.get('/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        res.json(tour)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router

