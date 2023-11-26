const Sequelize= require('sequelize');
const sequelize=require('../util/database');

const Group=sequelize.define('groups',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    groupName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    admin:{
        type: Sequelize.INTEGER,
    }
});
    module.exports=Group;