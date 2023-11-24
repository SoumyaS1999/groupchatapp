const sequelize=require('../util/database');

const Expense=sequelize.define('chats',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    chat:{
        type: Sequelize.STRING,
        allowNull:false
    }
});
    module.exports=Expense;