'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkBeers = await queryInterface.bulkInsert('beers', [
      {
        userId: 3,
        breweryId: 299,
        name: 'TRUE',
        category: 'Kölsch',
        style: 'German Kölsch',
        rating: 4,
        comment: 'Very light, refreshing and crisp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        breweryId: 299,
        name: 'Sea Change',
        category: 'IPA',
        style: 'Hazy',
        rating: 5,
        comment: 'A nice hazy punch to the face!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        breweryId: 299,
        name: 'Vibes',
        category: 'Pilsner',
        style: 'Hoppy Pilsner',
        rating: 2,
        comment: 'This was not my favorite.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log('bulkInsert:', bulkBeers)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

