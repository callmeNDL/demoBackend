'use strict';

module.exports = {
  /*  email: DataTypes.STRING,
    password:DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber:DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image:DataTypes.STRING,
    roleId:DataTypes.STRING,
    positionId:DataTypes.STRING,*/
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName:"Nguyen",
      lastName:"Duc Long",
      address:"Quy Nhon",
      gender:1,
      //image:,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
