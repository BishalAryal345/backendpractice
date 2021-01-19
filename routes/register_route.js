const express= require('express');
const Register = require('../models/register_model');
const router = express.Router();

router.post('/register_insert',function(req,res){
    const FullName = req.body.FullName;
    const Address = req.body.Address;
    const PhoneNo = req.body.PhoneNo;
    const Email = req.body.Email;
    const Password = req.body.Password;
    // console.log(us);
    // console.log(add);
   
   
    const data = new Register({
        FullName: FullName,
        Address: Address,
        PhoneNo: PhoneNo,
        Email :  Email,
        Password: Password
    });
    data.save();
    })
    
    router.get('/register_show', function(req,res){
        // console.log("this is for showing data")
        // res.send("test show")
        Register.find().then(function(data){
        // console.log(data);
            res.send(data);
    })
})

// for delete
router.delete('/register_delete/:id', function(req,res){
    //delete code
    const id = req.params.id;
    Register.deleteOne({_id : id}).then(function(){
        res.send("Deleted !")
    })
    
    })
    // for update
    router.put('/register_update/:id', function(req,res){
        const id = req.params.id;
        const book_name = req.body.book_name;
        Book.updateOne({_id : id},{Email : Email}).then(function(){
            res.send("Updated!")
        })
    })
module.exports = router;