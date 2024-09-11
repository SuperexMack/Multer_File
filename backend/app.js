const express = require("express")
require("dotenv").config();
let PORTT = process.env.PORT
console.log(PORTT)
const app = express()
const multerfile = require("./multer")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use("/v1/myfileUpload" , multerfile)

app.listen(PORTT , ()=>{
    console.log(`server is running on the port number ${PORTT}`)
})