const {registerValidation}=require('../Middleware/AuthValidator');
const {register}=require('../Controller/AuthController')

const router=require('express').Router();

router.post('/register',registerValidation,register);

module.exports=router;