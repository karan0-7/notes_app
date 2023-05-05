import React from "react"

export default function GenerateList(props)
{
  return(<div  onClick={props.func} className="note_row" id={props.value} >
    <h3 onClick={props.func} id={props.value} >Note {props.value}</h3>
  </div>)
}


 
