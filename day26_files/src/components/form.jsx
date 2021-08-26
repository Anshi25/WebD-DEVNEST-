import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux'
//import userFormActions from '../../redux/userform/userFormActionsTypes'
import { updateFirstNameInput, updateLastNameInput } from '../redux/userform/userformActions';
//import { updateFirstName } from '../redux/userform/userformActiontypes';

const Form=()=>{
const firstName=useSelector(state=>state.firstName);
const lastName=useSelector(state=>state.lastName);

const dispatch=useDispatch()

    return(
        <div className="form">
            
            <form action="">
                firstName: <input type="text" 
                value={firstName}
                    onChange={(e) =>dispatch(updateFirstNameInput(e.target.value))} />
                lastName:  <input type="text" 
                value={lastName}
                onChange={(e) =>dispatch(updateLastNameInput(e.target.value))}/>
            </form>
            <div>
                <h2>SHOW</h2>
                <p>firstName: {firstName} </p>
                <p>lastName:  {lastName}</p>
            </div>
        </div>
    )
}

export default Form;