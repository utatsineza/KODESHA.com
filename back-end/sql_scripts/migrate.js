// sql_script/migrate.js
const { sequelize } = require('../models');

const migrate = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
    
    // Apply migrations or schema updates
    await sequelize.sync({ alter: true }); // Use `force: true` to drop/recreate tables

    console.log('Database migration completed.');
  } catch (error) {
    console.error('Error during migration:', error);
  }
};

migrate();
