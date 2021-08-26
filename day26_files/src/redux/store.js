import {createStore} from 'redux'
import { userFormReducer } from './userform/userFormReducer'; 

//it takes reducer function as parameter
const store=createStore(userFormReducer)

export default store;