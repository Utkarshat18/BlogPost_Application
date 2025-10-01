const { addblog } = require('../Controller/BlogController');

const router=require('express').Router();

router.post('/addblog',addblog);

module.exports=router;