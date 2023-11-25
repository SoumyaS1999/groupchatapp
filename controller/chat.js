const Chat= require('../models/chat');
const User = require('../models/users');

const addChat= async(req,res,next)=>{
    try{
        if (!req.body.chat) {
            throw new Error('Chat is mandatory')
          }
        const chat= req.body.chat;
        const data= await Chat.create({chat: chat, userId: req.user.id })
        res.status(201).json({ newChatDetail: data });

    }catch(err){
        res.status(500).json({
            success: false, error: err
          })
    }
}

const getChats= async(req,res,next)=>{
    try{
        const Chats= await Chat.findAll();
        res.status(200).json({allChats:Chats});

    }catch(err){
    console.log('Get chat is failing', JSON.stringify(err))
    res.status(500).json({ error: err })
    }
}

module.exports={
    addChat,
    getChats
};