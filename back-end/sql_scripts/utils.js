// sql_script/utils.js
const { sequelize } = require('../models');

const cleanup = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');

    // Example: Delete old messages
    await sequelize.query('DELETE FROM Messages WHERE createdAt < NOW() - INTERVAL 30 DAY');

    console.log('Database cleanup completed.');
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
};

cleanup();
