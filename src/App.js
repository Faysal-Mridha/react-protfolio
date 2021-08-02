import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import Project from './page/Project'
import Service from './page/Service'
import Contact from './page/Contact'
import Exprence from './page/Exprence'
import ProjectView from './page/ProjectView'

import Fotter from './components/Fotter'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

         <Route path="/projectView">
            <ProjectView />
          </Route>
          
          <Route path="/experience">
            <Exprence />
          </Route>
          
          <Route path="/contact">
            <Contact />
          </Route>
          
          <Route path="/service">
            <Service />
          </Route>
          
          <Route path="/protfolio">
            <Project />
          </Route>

         <Route path="/about">
            <About />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
