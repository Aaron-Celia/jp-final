const db = require('../database');
const Sequelize = require('sequelize');

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
        }
    }
});



Campuses.hasMany(Students, { 
    foreignKey: Campuses.id,
    constraints: false
});
Students.belongsTo(Campuses);

module.exports = {
    Students,
    Campuses
}