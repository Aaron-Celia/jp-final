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

router.put('/:campusId', async (req, res, next) => {
    try {
        const { name, imageUrl, address, description } = req.body;
        const campus = await Campuses.findOne({
            where: { id: req.params.campusId }
        });
        if (campus) {
            campus.name = name;
            campus.imageUrl = imageUrl;
            campus.address = address;
            campus.description = description;
            await campus.save();
            res.send(campus);
        } else {
            res.status(404).send('Student not found!');
        }
    } catch (e) {
        next(e);
    }
})

module.exports = router