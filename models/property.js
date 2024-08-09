module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define('Property', {
      location: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.FLOAT
      },
      bedrooms: {
        type: DataTypes.INTEGER
      },
      bathrooms: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.TEXT
      }
    });
  
    return Property;
  };
  