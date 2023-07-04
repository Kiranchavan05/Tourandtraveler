import { Fragment } from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';

// import Header from './components/Header';

import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Home from './Pages/Home';





function App() {
  return <Fragment>
    
    
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' >
        <About />
      </Route>
      <Route path='/service' >
        <Service />
      </Route>
      <Route path='/contact' >
        <Contact />
      </Route>
    </Switch>
    
    
  </Fragment>
}

export default App;
