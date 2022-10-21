'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  funcionarios.init({
    Nome: DataTypes.STRING,
    DataNasc: DataTypes.STRING,
    Cpf: DataTypes.STRING,
    Email: DataTypes.STRING,
    Telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'funcionarios',
  });
  return funcionarios;
};