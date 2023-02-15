const router = require('express').Router();
const {Campuses, Students} = require('../db/models');


router.get('/campuses', async (req, res, next) => {
    try {
        const schools = await Campuses.findAll();
        res.send(schools);
    } catch(e) {
        console.log(e);
        next(e);
    }
});

router.get('/students', async (req, res, next) => {
    try {
        const students = await Students.findAll();
        res.send(students);
    } catch(e) {
        console.log(e);
        next(e);
    }
});

router.get('/campuses/:campusId', async (req, res, next) => {
    try{
        const campus = await Campuses.findByPk(req.params.campusId, {
            include: Students
        });
        res.send(campus);
    } catch(e){
        next(e);
    }
});

router.get('/students/:studentId', async (req, res, next) => {
    try{
        const student = await Students.findByPk(req.params.studentId, {
            include: Campuses
        });
        res.send(student);
    } catch(e){
        next(e);
    }
})

module.exports = router


