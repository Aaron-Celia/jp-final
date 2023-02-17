const router = require('express').Router();
const { Campuses } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const schools = await Campuses.findAll();
        res.send(schools);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

router.get('/:campusId', async (req, res, next) => {
    try {
        const campus = await Campuses.findByPk(req.params.campusId)
        res.send(campus);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { name, address } = req.body;
        console.log(name, address);
        await Campuses.create({
            name: name,
            address: address,
        })
    } catch (e) {
        next(e)
    }
})

router.delete('/:campusId', async (req, res, next) => {
    try {
        const campus = await Campuses.findByPk(req.params.campusId)
        await campus.destroy();
        const newList = await Campuses.findAll();
        res.send(newList);
    } catch (e) {
        next(e)
    }
})

module.exports = router