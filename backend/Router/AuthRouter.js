const {registerValidation,loginValidation}=require('../Middleware/AuthValidator');
const {register,login}=require('../Controller/AuthController')

const router=require('express').Router();

router.post('/register',registerValidation,register);
router.post('/login',loginValidation,login);

module.exports=router;