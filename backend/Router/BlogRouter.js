const { addblog ,getblog} = require('../Controller/BlogController');

const router=require('express').Router();

router.post('/addblog',addblog);
router.get('/getblog',getblog);

module.exports=router;