const express=require('express')
const mogoose=require('mongoose')

require('dotenv').config()
const app=express()
const PORT =3000
app.get('/',(req,res)=>{
    resizeBy.get("welcome to mern stack")
})

mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully")
).catch(
  (err)=>console.log(err)
)


app.listen(PORT,()=>{
    if(err)
    {
        console.log(err)
    }
    console.log("server is running on port:"+PORT)
})


