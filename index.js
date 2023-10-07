const express=require('express');
const mongoose=require("mongoose");
const cors =require ('cors');
const UserLogin=require("./routes/login");
const UserRegister=require("./routes/register");
const crud =require("./routes/crud")
const app=express();
require('dotenv').config();
const url=process.env.MONGODB_URL;
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("MongoDB is connected!!!");
})
.catch((err)=>{
console.log("Error: ",err);
});
app.use(express.json()); // For parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/",todo);
// app.use("/add",addTodo);
// app.use("/delete",Delete);
app.use("/login",UserLogin);
app.use("/register",UserRegister);
app.use("/crud",crud);
app.listen(8080,()=>{
    console.log("It's connected");
})