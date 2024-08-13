module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      message: {
        type: DataTypes.TEXT
      }
    });
  
    return Message;
  };
  