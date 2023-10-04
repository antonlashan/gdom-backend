'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('user', [
            {
                email: 'admin@abc.com',
                password: '$2a$08$nQ751A/6l3XpFHRQqNWPSe4AtBeTArmf4whlwuj3bTHVhqcSjCA9W',
            },
            {
                email: 'user@abc.com',
                password: '$2a$08$nQ751A/6l3XpFHRQqNWPSe4AtBeTArmf4whlwuj3bTHVhqcSjCA9W',
            },
            {
                email: 'demo@abc.com',
                password: '$2a$08$nQ751A/6l3XpFHRQqNWPSe4AtBeTArmf4whlwuj3bTHVhqcSjCA9W',
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('user', null, {});
    },
};
