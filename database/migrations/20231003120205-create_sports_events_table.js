'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('sports_event', {
            event_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            event_name: {
                type: Sequelize.STRING(100),
            },
            odds: {
                type: Sequelize.DECIMAL(10, 2),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('sports_event');
    },
};
