import React from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const {_id} = useParams()
  const items = props.data.find((i)=>i._id ==_id)
  return (
    <div>
      <div className="Detail-container">
        <div className="images">
       <img src={items.img} alt="" />
        </div>
        <div className="alldiscription">
          <h1>Desctiption</h1>
          {items.des}
        </div>
        <div className="authername">
          {items.name}
        </div>
        <div className="time">
          {items.date}
        </div>
      </div>
    </div>
  )
}

export default Detail
