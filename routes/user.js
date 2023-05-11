const { register, login, getData } = require("../controller/user");
const authorizer=require("../authorizer/authorizer")
const router=require("express").Router();

router.post("/register", register)
router.post("/login", login)
router.get("/getData", authorizer, getData)

module.exports=router;