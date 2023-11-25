const express= require('express');

const router= express.Router();

const userController= require('../controller/chat');
const userauthentication = require('../middleware/auth')

router.post('/add-chat',userauthentication.authenticate,userController.addChat);
router.get('/get-chats',userauthentication.authenticate,userController.getChats);

module.exports = router;