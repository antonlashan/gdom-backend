'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('sports_event', [
            {
                event_name: 'Italy Cup. Liga Pro',
                odds: 2.31,
            },
            {
                event_name: 'UEFA Champions League',
                odds: 5.22,
            },
            {
                event_name: 'German Championship. Women',
                odds: 1.13,
            },
            {
                event_name: 'European. Pro Series. Women',
                odds: 8.41,
            },
            {
                event_name: 'German Championship. DEL',
                odds: 3.48,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('sports_event', null, {});
    },
};
