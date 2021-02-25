const mongoose = require('mongoose');

const Artist = mongoose.model('Artist',{
    FullName : {
        type : String,
        required : true
    },
    Address: {
        type : String,
        required : true
    },
    Phone: {
        type : String,
        required : true
    },
    Email: {
        type : String,
        required : true
    },
    Profession: {
        type : String,
        required : true
    },
    Pimage: {
        type : String
       
    },
    PriceRate: {
        type : String,
        required : true
    }
   
})
module.exports=Artist;