const express = require('express');
const Login = require('../models/login_model');
const router = express.Router();
const login = require('../models/login_model');
router.post('/login_insert',function(req,res){

const Username=req.body.Username;
const Password = req.body.Password;

const data = new Login({
    Username: Username,
    Password:Password
});
data.save();

})
router.get('/login_show', function(req,res){
    // console.log("this is for showing data")
    // res.send("test show")
    login.find().then(function(data){
    // console.log(data);
        res.send(data);
})
})

// for delete
router.delete('/login_delete/:id', function(req,res){
//delete code
const id = req.params.id;
Login.deleteOne({_id : id}).then(function(){
    res.send("Deleted !")
})

})
// for update
router.put('/login_update/:id', function(req,res){
    const id = req.params.id;
    const book_name = req.body.book_name;
    Book.updateOne({_id : id},{Username : Username}).then(function(){
        res.send("Updated!")
    })
})
module.exports = router;