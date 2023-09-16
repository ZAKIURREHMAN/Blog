import React, { useEffect, useState } from 'react'
import './Allblog.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Allblog() {
    const [data,setdata] = useState([])
    const [cout,setcout] = useState(211)
    const [timeconter,settimecouter] = useState(10)
    useEffect(()=>{
        axios.get("http://localhost:4000/getblogingapi")
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>console.log(err))
        
    },[data])
    const DeletData = (id)=>{
        axios.delete("http://localhost:4000/deletdata/"+id)
        .then((res)=>{
            console.log(res)
        })
    }
  return (
    <>
       <div className="allblog-container">
   {
    data.map((i)=>{
        return(
            <div className="over-data" key={i._id} >
                <div className="img" target='blanck' >
                   <Link to = {`/details/`+i._id} > <img src={i.img} alt="" /></Link>
                </div>
                <div className="titels">
                    <h5>{i.titel}</h5>
                </div>
                <div className="desctiption">
                    {i.des.slice(0,cout)}
                </div>
                <div className="username">
                  {i.name}
                </div>
                <div className="time">
                    {i.date.slice(0,timeconter)} <br />
                    <button onClick={()=>DeletData(i._id)} >Delet</button>
                </div>

            </div>
        )
    })
}
</div>
    </>
  )
}

export default Allblog
