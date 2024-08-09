// sql_script/seed.js
const { sequelize, User, Property, Message } = require('../models');

const seed = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');

    // Seed initial data
    await User.bulkCreate([
      { username: 'admin', email: 'admin@example.com', password: 'hashed_password' },
      // Add more users if needed
    ]);

    await Property.bulkCreate([
      { address: '123 Main St', description: 'A beautiful home' },
      // Add more properties if needed
    ]);

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};

seed();
