import React, { useContext } from 'react';
import{
    Route,
    Redirect
}
    from "react-router-dom"
    import Context from '../context/AuthContext';

function DashBoard(){
    const logger=useContext(Context);
    return (
        <div className="main2">
            <Route>
                <h1>DashBoard</h1>
                {
                    logger.loggedIn?"Welcome to DashBoard": <Redirect to ='/'/>
                }
            </Route>
        </div>
    );
}

export default DashBoard ;