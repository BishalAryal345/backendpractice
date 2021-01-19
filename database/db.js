const mongoose = require('mongoose'); //third party

mongoose.connect('mongodb://127.0.0.1:27017/ArtistChaiyo',{
//to remove deprecated warnings....
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology : true
})