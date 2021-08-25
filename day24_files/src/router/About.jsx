import React, { useContext } from 'react';
import Context from "../context/AuthContext"

function About(){
    const logger=useContext(Context);
    return (
        <div className="about">
            <h1>About</h1>
            <div className="ab">
                {logger.loggedIn?"You are logged in":"You are logged out"}
            </div>
        </div>
    );
}

export default About;