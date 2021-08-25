import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
}
from  "react-router-dom"

import Home from "./router/Home"
import Profile from "./router/Profile"
import About from "./router/About"
import DashBoard from "./router/Dashboard"
import {AuthContext} from "./context/AuthContext";

function App(){
  return(
    <div className="app">
      <Router>
        <div className="nav">
        <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About</Link>
          </li>
          <li>
            <Link to ="/dashboard">DashBoard</Link>
          </li>
          <li>
            <Link to ="/profile">Profile</Link>
          </li>
        </ul>

      </nav>
        </div>
      
        <Switch>
          <AuthContext>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/profile" component={Profile} />
          </AuthContext>
  
        </Switch>
      </Router>

    </div>
  );
}

export default App;