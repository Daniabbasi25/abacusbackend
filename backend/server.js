const express= require('express')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleWare')
const port=process.env.PORT || 5000
const colors=require('colors')
const connectDB=require('./config/db')
connectDB()
const app=express()
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/exersises",require('./route/exersiseRoutes'));
app.use("/api/questions",require('./route/questionRoute'));
app.use(errorHandler)
app.listen(port,()=>console.log(`server started at port number= ${port}`))
