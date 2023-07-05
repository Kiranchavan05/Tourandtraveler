import { Fragment } from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
// import Header from './components/Header';
import ChangePassword from './Pages/ChangePassword';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';






function App() {

  const isLoggedin=useSelector(state=>state.auth.isAuthenticated)
  return <Fragment>
    
    
    <Switch>
     
        
      

      <Route path='/' exact>
      
        <Redirect to='/login' />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/changepassword'>
        <ChangePassword />
       </Route>
      {
        isLoggedin && <Route path='/home' >
        <Home />
      </Route>

      }
      {isLoggedin && <Route path='/about' >
        <About />
      </Route>

      }
      {isLoggedin && <Route path='/service' >
        <Service />
      </Route>
      }
      
      {
        isLoggedin && <Route path='/contact' >
        <Contact />
      </Route>
      }
      

      
    </Switch>
    
    
  </Fragment>
}

export default App;
