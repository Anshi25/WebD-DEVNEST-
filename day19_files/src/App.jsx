import React from 'react';
import Count from './btn'

const forhead={
  color: "green",
  margin: "1vw",
  fontSize: "20px",
  fontFamily: "cursive",
  fontWeight: "bold",
}

const App=()=>{
  return(
    <div>
      <div style={forhead}>
          <h2>There are 4 counter component instances that each manage their own state.</h2>
      </div>
      <Count />
      <Count />
      <Count />
      <Count />
    </div>
  )
}

export default App ;