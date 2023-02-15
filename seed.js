// const db = require('./server/db/database');

const studentsData = [
    {
        first: 'Clavin',
        last: 'Smith',
        email: 'CSmith@gmail.com.com',
        imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        gpa: 3.8,
        campusId: 1
    },
    {
        first: 'Alex',
        last: 'Trotter',
        email: 'Alex@gmail.com',
        imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        gpa: 3.2,
        campusId: 3
    },
    {
        first: 'Nick',
        last: 'Ceh',
        email: 'Nick@gmail.com',
        imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        gpa: 3.9,
        campusId: 3
    },
    {
        first: 'Jacob',
        last: 'Yoder',
        email: 'JY@gmail.com',
        imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        gpa: 2.8,
        campusId: 1
    },
    {
        first: 'Manny',
        last: 'Hoss',
        email: 'MannyH@gmail.com',
        imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        gpa: 4.0,
        campusId: 2
    },
    {
        first: 'Evan',
        last: 'Veider',
        email: 'EvanV@gmail.com',
        imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        gpa: 3.4,
        campusId: 2
    }
];



const campusesData = [
    {
        name: 'MIT',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ae/World_Peace_Library%2C_MIT_College%2C_Pune.jpg',
        address: '77 Massachusetts Ave, Cambridge, MA 02139',
        description: 'Massachusetts Institute of Technology (MIT), privately controlled coeducational institution of higher learning famous for its scientific and technological training and research.'
    },
    {
        name: 'Princeton',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Cannon_Green_and_Nassau_Hall%2C_Princeton_University.jpg/220px-Cannon_Green_and_Nassau_Hall%2C_Princeton_University.jpg',
        address: 'Princeton, NJ 08544',
        description: 'Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746 in Elizabeth as the College of New Jersey.'
    },
    {
        name: 'UIC',
        imageUrl: 'https://today.uic.edu/wp-content/uploads/2020/08/EIB-Entrance-with-Sign.jpeg',
        address: '1200 W Harrison St, Chicago, IL 60607',
        description: 'The University of Illinois Chicago is a public research university in Chicago, Illinois.'
    }
]

module.exports = {
    studentsData,
    campusesData
}