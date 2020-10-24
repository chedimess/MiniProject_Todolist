import React from 'react';


function Formtask({addvalue,inputvalue,setinput}) {

    const handlechange=(e)=>{
        e.preventDefault();
        setinput(e.target.value)
    }

    const handleclick=(e)=>{
        e.preventDefault();
       if((inputvalue !== " ") && (inputvalue !== "")){
        addvalue(inputvalue);
        setinput("");
       }   
    }

    return (
        <form>
        <input type="text" placeholder="add a new todo ..." value={inputvalue} onChange={handlechange}/>
        <button onClick={handleclick}>ADD</button>
        </form>    
    )
}
export default Formtask;
