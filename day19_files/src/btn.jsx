
import React,{Component} from 'react'
import './App.css'

export class Count extends Component{
    state={
        count: 0
    }

    handlecount=()=>{
        this.setState({count: this.state.count+1})

        console.log(this.state.count);
    };

    
        render(){
        return(
           
                <button onClick={this.handlecount}>{this.state.count}</button>
           
        );
    }
}


export default Count;