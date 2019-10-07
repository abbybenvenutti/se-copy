const router = require('express').Router()
const Campus = require('../db/models/Campus')

router.get('/', async (req, res, next) => {

    const campuses = await Campus.findAll()
    res.status(200).json(campuses)
})

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const foundCampus = await Campus.findById(id)
        if (!foundCampus) res.sendStatus(404)
        res.status(200).json(foundCampus)
    } catch (err) {
        res.status(err)
        next(err)
    }
})

// router.post('/', async (req, res, next) => {
//     try {
//         const campus = await Campus.create(req.body)
//         res.status(201).json({campus})

//     } catch (err){
//         res.status(err)
//         next(err)
//     }
// })

router.post('/', function (req, res, next) {
    Campus.create(req.body)
        .then(campus => res.json(campus))
        .catch(next);
});

router.put('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const campusSearch = await Campus.findById(id)
        const updatedCampus = await campusSearch.update(req.body)
        res.json({
            campus: updatedCampus
        })
    } catch (err) {
        res.status(err)
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        await Campus.destroy({
            where: {
                id: id
            }
        })
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router
