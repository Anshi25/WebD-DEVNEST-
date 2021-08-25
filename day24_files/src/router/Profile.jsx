import React,{useContext} from 'react';
import { Route,Redirect} from "react-router-dom"
import Context from '../context/AuthContext'
function Profile(){

    const logger=useContext(Context);
    return (
        <div className="main1">
        <Route>
        <h1>Profile</h1>
            <div>
                {
                    logger.loggedIn?"Welcome to your Profile":<Redirect to="./"/>
                }
            </div>
        </Route>
            
        </div>
    );
}

export default Profile;