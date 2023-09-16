import React, { useState } from 'react'
import './Uploadimages.css'
import axios from 'axios'
function Uploadimages() {
    const [titel,settitel] = useState("")
    const [name,setname] = useState("")
    const [des,setdes] = useState("")

    const [img,setimg] = useState("")
    const Baseimages64 = async(file)=>{
        const reader = new FileReader()
       await reader.readAsDataURL(file)
        const data =new Promise ((resolve,reject)=>{
            reader.onload = ()=>resolve(reader.result)
            reader.onerror = (err)=>reject(err)
        })
        return data
    }
    const GetImgaes = async(e)=>{
        const file = e.target.files[0];
        const baseimages = await Baseimages64(file)
        setimg(baseimages)
    }
    const UploadData = ()=>{
        const formData = {}
        axios.post("http://localhost:4000/blogapi",{img,titel,name,des})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div>
      <div className="upload-container">
        <div className="select-img">
        <img src={img} alt=""/>
        </div>
      </div>
            <input type="file"  id="selectfile" onChange={GetImgaes}/>
        <h2>Titel</h2>
       <div className="upload-data">
       <div className="titel">
        <input type="text" name="titel"  id="" placeholder='Enter Your Titel'  onChange={(e)=>settitel(e.target.value)}   />
       </div>
       <div className="name">
        <input type="text" name="name" id=""placeholder='Enter Your Full Name'  onChange={(e)=>setname(e.target.value)}   />
       </div>
       </div>
       <div className="discribtion">
        <textarea name="des"  id="" cols="30" rows="10"  onChange={(e)=>setdes(e.target.value)}  ></textarea>
       </div>
       <div className="uploadbtn">
       <button onClick={UploadData} > <i className="fa-solid fa-upload">Upload</i></button>
       </div>
    </div>
  )
}

export default Uploadimages;