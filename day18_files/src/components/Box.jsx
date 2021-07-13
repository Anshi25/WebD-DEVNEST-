const Black={
        backgroundColor: "black",
       border:'2px solid rgb(226, 51, 80)',
        padding: '0px',
        margin:'0px',
        height: '44px',
        width: '44px',
      
}

const White={
    backgroundColor: 'white',
   border:'2px solid rgb(226, 51, 80)',
    padding: '0px',
    margin:'0px',
    height: '44px',
    width: '44px',
  
}


function Cont1({title}){
    return(
        <div style={ title === 'black'? Black:White}></div>

    );
}

export default Cont1;