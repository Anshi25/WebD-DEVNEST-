import React from 'react';
import { reducerType } from './reducers';
import { useState } from 'react';
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import { addNote,deleteNote } from './actions';

function App() {
  const notes=useSelector((state:reducerType)=> state.notes);
  const dispatch = useDispatch();
  const [input,setInput]=useState<string>("");
  return (
    <div className="App">
    <div>
    <input type="text" value={input} onChange={(e)=>{
      setInput(e.target.value);
    }} />
    <button onClick={()=>{
      dispatch(addNote(input));
      setInput("");
    }}>Add</button>
    </div>
    <div className="notes">
            {notes.length===0?(<h2>Click to Add to add Notes</h2>):(
               <ul>
               {notes.map((note:string,index:number)=>(
                  <li key={index}>
                      <h3>{note}</h3><button onClick={()=>{
                        dispatch(deleteNote(index))
                      }}>Delete</button>
                  </li>
                ))}
               </ul>
            )}
  
      </div>
    </div>
  );
}

export default App;
