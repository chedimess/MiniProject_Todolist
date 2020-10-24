import React from 'react';

function Listtask({tabtask,addtab,setinput}) {

     const handledelete=(i)=>{  
        const newarr=tabtask.slice();
        newarr.splice(i,1)
        addtab(newarr);
     }
  
     const handleedit=(elem,index)=>{
        const newarr=tabtask.filter((e,k)=> index !== k);
        addtab(newarr);
        setinput(elem);
     }   
    return (
    <div className="list-container">
        {tabtask.map((val,i)=>
        <p>
        <input type="text" value={val}/>
        <i class="fas fa-trash-alt" onClick={(e)=>handledelete(i)}></i>
        <i class="fas fa-pen" onClick={()=>handleedit(val,i)}></i>
        </p>
        )}
    </div>
    )
}
export default Listtask;
