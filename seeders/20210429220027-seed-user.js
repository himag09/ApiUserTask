'use strict';
var bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Users', [{
      nombre: "Mario Benítez",
      celular: "0981748371",
      email: "email@email.com",
      password: bcrypt.hashSync("123456", 8),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
   }, {
      nombre: "John Doe",
      celular: "0928371643",
      email: "email2@email2.com",
      password: bcrypt.hashSync("123456", 8),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
   }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
