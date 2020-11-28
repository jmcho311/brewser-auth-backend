'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const bulkBreweries = await queryInterface.bulkInsert('breweries', [
        {
          userId: 1,
          breweryId: 299,
          name: 'Almanac Beer Company',
          city: 'Alameda',
          state: 'California',
          rating: 5,
          comment: "love this place! Can't wait to go back!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          breweryId: 299,
          name: 'Almanac Beer Company',
          city: 'Alameda',
          state: 'California',
          rating: 3,
          comment: "Terrible service, but great beer. You have to try their IPA if you go.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          breweryId: 299,
          name: 'Almanac Beer Company',
          city: 'Alameda',
          state: 'California',
          rating: 4,
          comment: "There's such a great energy and crowd here! Not a huge fan of the beer I had, but my friends loved theirs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
        userId: 3,
        breweryId: 7350,
        name: 'Bainbridge Island Brewing',
        city: 'Seattle',
        state: 'Washington',
        rating: 4,
        comment: "A nice quick ferry ride from Seattle and enjoyed their beers.",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          userId: 4,
          breweryId: 7350,
          name: 'Bainbridge Island Brewing',
          city: 'Seattle',
          state: 'Washington',
          rating: 4,
          comment: "We had a great time, staff was friendly, beer good and definitely will be coming back.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          breweryId: 299,
          name: 'Almanac Beer Company',
          city: 'Alameda',
          state: 'California',
          rating: 4,
          comment: "Stumbled upon this place and liked the vibe of the place.",
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {returning: true})
      console.log('bulk insert: ', bulkBreweries)
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
