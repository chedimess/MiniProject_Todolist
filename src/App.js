import React,{useState} from 'react';
import Formtask from "./components/Formtask";
import Listtask from './components/Listtask';
import './App.css';



function App() {
  const [inputvalue, setinputvalue] = useState("");  
  function setinput(el){
       setinputvalue(el);
      }
  const [tabtask, settabtask] = useState([]);
  function addvalue(text){
    const newtab=[...tabtask,text];
    settabtask(newtab);  
}
    function addtab(array){  
      settabtask(array);
  }
  return(
 <div className="App">
   <h1>Todo List</h1>
   <Formtask addvalue={addvalue} inputvalue={inputvalue} setinput={setinput} />
   <Listtask tabtask={tabtask} addtab={addtab} setinput={setinput}/>
 </div>
  );
}

export default App;
