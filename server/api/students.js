const router = require('express').Router();
const { Students } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const students = await Students.findAll();
        res.send(students);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

router.get('/:studentId', async (req, res, next) => {
    try {
        const student = await Students.findByPk(req.params.studentId);
        res.send(student);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { first, last, email } = req.body
        await Students.create({
            first: first,
            last: last,
            email: email
        })
    } catch (e) {
        next(e);
    }
});

router.delete('/:studentId', async (req, res, next) => {
    try {
        const student = await Students.findByPk(req.params.studentId)
        await student.destroy();
        const newList = await Students.findAll();
        res.send(newList);
    } catch (e) {
        next(e)
    }
})

router.put('/:studentId', async (req, res, next) => {
    try {
        const { first, last, email, imageUrl, gpa} = req.body;
        const student = await Students.findOne({
            where:{id: req.params.studentId}
        });
        if(student){
        student.first = first;
        student.last = last;
        student.email = email;
        student.imageUrl = imageUrl;
        student.gpa = gpa;
        await student.save();
        res.send(student);
        } else {
            res.status(404).send('Campus not found!');
        }
    } catch (e) {
        next(e);
    }
})

module.exports = router