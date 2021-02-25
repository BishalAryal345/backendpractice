const express = require('express');
const Artist = require('../models/Artist_model');
const router = express.Router();
const {check,validationResult} =require('express-validator');
const Authenticate = require('../Middleware/Authenticate');

const artist = require('../models/Artist_model');

router.post('/artist/insert',/*auth.verifyUser, auth.verifyDocter,*//*upload.single('pimage'),*/ function(req,res){
    console.log(req.file);
    if (req.file ==undefined){
        return res.status(400).json({message:"invalid file format"})
    }
const FullName=req.body.FullName;
const Address = req.body.Address;
const Email = req.body.Email;
const Phone = req.body.Phone;
const Profession = req.body.Profession;
const PriceRate = req.body.PriceRate;
    const pdata = new Product({
    FullName:FullName,
    Address:Address,
    Email:Email,
    Phone:Phone,
    Profession:Profession,
    PriceRate:PriceRate
    })
    pdata.save()
    .then(function(res){
        res.status(201).json({messge : "Successfully added!!"})
    })
    .catch(function(eeeeee){
        res.status(500).json({ message : eeeeee})
    })

})


router.get('/artist/show', function(req,res){
    // console.log("this is for showing data")
    // res.send("test show")
    login.find().then(function(data){
    // console.log(data);
        res.send(data);
})
})

// for delete
router.delete('/arrtist/delete/:id', function(req,res){
//delete code
const id = req.params.id;
Login.deleteOne({_id : id}).then(function(){
    res.send("Deleted !")
})

})
// for update
router.put('/artist/update/:id', function(req,res){
    const id = req.params.id;
    const book_name = req.body.book_name;
    Book.updateOne({_id : id},{Username : Username}).then(function(){
        res.send("Updated!")
    })
})
module.exports = router;


// check('FullName',"username is incorrect !").not().isEmpty(),
// check('Address',"Required Password").not().isEmpty(),
// check('Email',"username is incorrect !").not().isEmpty(),
// check('Phone',"Required Password").not().isEmpty(),
// check('Profession',"username is incorrect !").not().isEmpty(),
// check('PriceRate',"Required Password").not().isEmpty()