const mongoose = require('mongoose');
 function connectToDatabase(){
    mongoose.connect('mongodb+srv://faibanawab:Faiba2006@cluster0.ec59ch3.mongodb.net/form')
      .then(() => {
         console.log('Connected to MongoDB');
      })
    }
module.exports=connectToDatabase;