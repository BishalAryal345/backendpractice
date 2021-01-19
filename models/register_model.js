const mongoose = require('mongoose'); //third party

const Register = mongoose.model('Register',{
    FullName: {
        type:String
    },
    Address: {
        type: String
    },
    PhoneNo:{
        type : String
    },
    Email:{
        type : String
    },
    Password:{
        type : String
    }
})
module.exports = Register;