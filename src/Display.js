import React from 'react'
export default function Display(props) {
  return (
    <div className='card' style={{backgroundColor:props.color,color:"white"}}>
        <h6>
            {props.header}
        </h6>
        <hr style={{}}/>
        <h5>{props.card_title}</h5>
        <p>{props.text1}</p>
    </div>
  )
}
