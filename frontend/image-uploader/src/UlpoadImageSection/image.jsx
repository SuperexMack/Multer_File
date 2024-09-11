import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

function UploadImage(){
    const clicktouploadimage = useRef()

    const makeRef = ()=>{
        clicktouploadimage.current.click();
    }

    const[file,setFile] = useState(null)

    const handleFileChange = (event)=>{
        setFile(event.target.files[0]);
    }

    const handleSubmit = ()=>{
        if(!file){
           toast.error("Please enter a file")
        }
        else{
            let newFileData = new FormData()
            newFileData.append("myFile" , file)

            try{
              axios.post("http://localhost:9000/v1/myfileUpload/addfile" , newFileData , {
                headers :{
                    "Content-Type": "multipart/form-data",
                }
              })
              toast.success("File added successfully")
            }
            catch(error){
                console.log("something went wrong " + error)
                toast.error("Unable to upload the file to the backend")
            }
        }
    }

    return(
        <>
        <div className="flex justify-center h-screen mt-2">
           <div className=" h-[20rem] flex flex-col justify-center items-center rounded-lg w-[40rem] relative top-[5rem]">
              <h1 onClick={makeRef}  className="text-[30px] bg-blue-300 rounded-xl p-3 cursor-pointer hover:bg-yellow-500 font-medium">Tap to enter the image</h1>
              <input onChange={handleFileChange} ref={clicktouploadimage} className="hidden" type="file"></input>
              <button onClick={handleSubmit} className="mt-10 btn p-3 bg-red-500 rounded-lg w-[200px] text-2xl font-bold text-white hover:bg-green-700">Submit</button>
           </div>
        </div>
         <ToastContainer />
        </>
    )
}

export default UploadImage