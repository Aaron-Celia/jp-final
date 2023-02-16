const router = require('express').Router();
const { Campuses, Students } = require('../db/models');

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
        // const campus = await Campuses.findByPk(req.params.campusId, {
        //     include: Students
        // });
        const campus = await Campuses.findByPk(req.params.campusId)
        res.send(campus);
        // res.send('heyyyyyyyyyyyyyyyy')
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

router.delete('/', async (req, res, next) => {
    try {
        // const { name } = req.body;
        // await Campuses.destroy(Campuses.findOne({
        //     where: {
        //         name: req.body.name
        //     }
        // }))
        await Campuses.destroy({
            where: {
                id: req.body.id
            }
        })
    } catch (e) {
        next(e)
    }
})

module.exports = router