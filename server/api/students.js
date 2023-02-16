const router = require('express').Router();
const { Students, Campuses } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const students = await Students.findAll();
        res.send(students);
    } catch(e) {
        console.log(e);
        next(e);
    }
});

router.get('/:studentId', async (req, res, next) => {
    try{
        const student = await Students.findByPk(req.params.studentId, {
            include: Campuses
        });
        res.send(student);
    } catch(e){
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try{
        const { first, last, email} = req.body
        await Students.create({
            first: first,
            last: last,
            email: email
        })
    } catch(e) {
        next(e);
    }
})

module.exports = router