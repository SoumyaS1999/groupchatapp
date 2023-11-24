const Sequelize= require('sequelize');
const dotenv = require('dotenv');

// get config vars
dotenv.config();


const sequelize=new Sequelize('chatapp','root','Soumya#sharp99',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports= sequelize;