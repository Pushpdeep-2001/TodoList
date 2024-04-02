import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
      <input type="checkbox" className="checkBox" />
        <div className="maincontent">
          {props.item}
        </div>
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" onClick={e=>{
          props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default Todolist