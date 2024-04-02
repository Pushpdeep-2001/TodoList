import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState("");

    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }

    const AddEvent = (e) => {
        setInputText(e.target.value);
    }


  return (
    <div className="input-container">
      <input type="text" className="input-box-todo" placeholder="Enter your todo task" value={inputText} onChange={AddEvent} onKeyDown={handleEnterPress}/>
      <button className="add-btn" 
        onClick={()=>{ 
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;