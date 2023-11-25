const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');

const User=require('./models/users.js');
const Chat=require('./models/chat.js');


var cors=require('cors');

const app = express();

const dotenv = require('dotenv');

// get config vars
dotenv.config();


app.use(cors());

app.set('views', 'views');

const userRoutes=require('./routes/user');
const chatRoutes=require('./routes/chat');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user',userRoutes);
app.use('/chat',chatRoutes);


app.use((req,res)=>{
  console.log(req.url);
  res.sendFile(path.join(__dirname,`views/${req.url}`));
})

User.hasMany(Chat);
Chat.belongsTo(User);


sequelize.sync()
  .then(result => {
    // console.log(result);
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });