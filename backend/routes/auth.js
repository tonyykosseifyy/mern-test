const express = require("express") ;


const router = express.Router() ;


const { users } = require("../controllers/auth") ;



router.post("/register" , (req, res) => {
 console.log(req.body);
});

module.exports = router ;
