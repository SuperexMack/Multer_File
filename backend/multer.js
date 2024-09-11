const express = require("express")
const multer = require("multer")
const router = express.Router();

const storage = multer.diskStorage({
    destination : function(req,file,co){
        co(null , "./uploads")
    },
    filename : function(req,file , co){
        co(null, Date.now()+ "-" + file.originalname)
    }
})

const upload = multer({storage:storage})

router.post("/addfile" , upload.single("myFile") , (req,res)=>{
    console.log(req.file);
    res.json({
        msg:"file uploaded successfully"
    })
})

module.exports = router