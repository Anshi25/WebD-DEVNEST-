import './App.css';
import React,{useState} from "react";


function Fun({title,cal,setStore,id,store}){
  return(
    <div className="func">
    <h2>{title}</h2>
    <h1>
    
    <button onClick={()=>
    {
       var a=store.filter((name,index)=>
       {
         return (index!==id)
        })
        setStore(a)
    }
    }>Delete</button>

    
    </h1>
    <p>you have consumed {cal} cals today</p>
  </div>
  )
}


function Make({store,setStore}){
  return(
  <div className="main">
      <div className="container">
        {store.map((name,index)=>{
          return <Fun title={name[0]} cal={name[1]}  setStore={setStore} id={index} store={store} />
        })}
      </div>
  </div>
  )
}

function App() {
  const [store,setStore]=useState([["Pizza",56],["Burger",69],["Coke",500],["Browne",180],["Fried Rice",90],["Lassania",200],["Pani puri",10]]);
  
  return (
    <div className="App">
      <Make store={store} setStore={setStore} />
    </div>
  );
}

export default App;
