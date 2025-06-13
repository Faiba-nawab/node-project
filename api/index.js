const express = require("express");
const cors = require("cors");
const connectToDatabase = require('../mongodbconfig');
const MyUser =require('../mongodbmodel/schema');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/getdata/:id',(req,res) => {  
    console.log(req.params.id);
    res.send("Hellooo worlddddd")
});
app.post('/createdata',async(req,res) => {
const data =req.body;
console.log(data);
const createUser=await MyUser.create(data);
console.log(createUser);
res.send('Data received');
})
const port=3001
connectToDatabase();
app.listen(port, () => {
console.log("server running",{port})

})