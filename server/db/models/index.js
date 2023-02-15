const db = require('../database');
const Sequelize = require('sequelize');
const id = require('volleyball/lib/id');

const Campuses = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        validate: {
            isUrl: true
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    description: {
        type: Sequelize.TEXT
    }
});


const Students = db.define('student', {
    first: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    last: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
        validate: {
            isUrl: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            max: 4.0,
            min: 0.0,
            isNumeric: true,
            isDecimal: true
        }
    },
    campusId: {
        type: Sequelize.INTEGER,
        references: {
            model: Campuses,
            key: 'id'
        },
        // allowNull: false
    }
});



Campuses.hasMany(Students, { 
    foreignKey: Campuses.id,
    constraints: false // to avoid the possible error of not this not knowing which table to make first when the db is synced
});
Students.belongsTo(Campuses);

// Campuses.hasMany(
//     Students, 
//     {
//         as: 'school',
//         foreignKey: 'campusId',
//         onDelete: 'CASCADE',
//         onUpdatate: 'CASCADE'
//     }
// )

// Students.belongsTo(
//     Campuses, 
//     {
//         as: 'students',
//         foreignKey: 'campusId',
//         constraints: false,
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE'
//     }
// ); 

module.exports = {
    Students,
    Campuses
}