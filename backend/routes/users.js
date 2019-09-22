const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    }).catch(err =>{
        res.json('Error:'+err)
    });
})

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const newUser = new User({ username });
    newUser.save()
    .then((response)=>{
        res.json("Data Saved")
    })
    .catch((error)=>{
        res.status(400).json('Error:' + error)
    })
    
})

module.exports = router;
