const ensureAuthenticated = require('../Middleware/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated ,(req,res)=>{
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "laptop",
            price: 20000
            }
    ]
    )
})

module.exports = router;