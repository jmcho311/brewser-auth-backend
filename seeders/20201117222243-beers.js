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
      },
      {
      userId: 4,
      breweryId: 7482,
      name: 'Rogers',
      category: 'Pilsner',
      style: 'Hoppy Pilsner',
      rating: 3,
      comment: 'Darn tasty Pilsner.',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 4,
        breweryId: 7350,
        name: 'City Lies In Dust',
        category: 'IPA',
        style: 'Hazy',
        rating: 4,
        comment: 'Fruity, hazy IPA and really enjoyed this one.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        breweryId: 7350,
        name: 'Eagle Harbor NW',
        category: 'IPA',
        style: 'Classic IPA',
        rating: 4,
        comment: 'Firm hop aroma and a tasty classic IPA.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        breweryId: 299,
        name: 'Disco Daze',
        category: 'IPA',
        style: 'Citrusy',
        rating: 4,
        comment: 'Citrusy IPA with lychee and berry notes, another good one.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        breweryId: 7350,
        name: 'City Lies In Dust',
        category: 'IPA',
        style: 'Hazy',
        rating: 5,
        comment: 'Fruity refreshing IPA. Loved this one!',
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

