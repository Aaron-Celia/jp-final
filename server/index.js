const port = process.env.PORT || 3000;
const { app } = require('./app');
const db = require('./db/database');
const { Students, Campuses } = require('../server/db/models');
const { studentsData, campusesData } = require('../seed');

const syncAndSeed = async () => {
    try {
        await db.sync({ force: true });
        campusesData.map(camp => {
            Campuses.create({
                name: camp.name,
                imageUrl: camp.imageUrl,
                address: camp.address,
                description: camp.description
            })
        });
        studentsData.map(stud => {
            Students.create({
                first: stud.first,
                last: stud.last,
                email: stud.email,
                imageUrl: stud.imageUrl,
                gpa: stud.gpa,
                campusId: stud.campusId

            })
        })
        console.log('seeded')
    } catch (e) {
        console.log('ERROR =>', e);
    }
}

syncAndSeed();

app.listen(port, () => console.log(`listening on port ${port}`));
