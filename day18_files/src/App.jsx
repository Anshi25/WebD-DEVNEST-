import Cont1 from './components/Box';
import './App.css';

const colorchessboard={
  
    height:'380px',
    width: '380px',
    margin:'auto',
    marginTop:'70px',
    border:'13px solid #000000',
    boxShadow: '0px 0px 30px 10px rgb(175, 51, 91)',
    display:'flex',
    flexWrap:'wrap',

}

function Chess(){
    return(
        <div style={colorchessboard}>
            <Cont1 title='black' />
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>

            
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>

            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            
             <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
    

            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>

            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>

            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>

            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>
            <Cont1 title='white'/>
            <Cont1 title='black'/>

                        

        </div>

    );
}


export default Chess ;