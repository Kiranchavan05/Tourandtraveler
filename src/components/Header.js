import React, { Fragment, useState } from "react";
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { authActions } from "../Pages/authentication";
// import Login from "../Pages/Login";

const Header = () => {
  const [clicked, setClicked ] = useState(false)
  const dispatch=useDispatch()
  const isLoggedin = useSelector(state=> state.auth.isAuthenticated)
  
const logoutHandler=()=>{
  dispatch(authActions.logout())
}

    return (
      <Fragment>
        <nav>
          <h1>Destination</h1>
          <div className={classes.menuicons} onClick = {()=>setClicked(!clicked)}>
              <i className={ clicked ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
          </div>
          <div className={`${classes.menuitems} ${clicked ? classes.active : ''}`}>
            <div className={classes.item}>
              {isLoggedin &&
                  <Link className={classes.link} to="/home">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              }
              
            </div>
            <div className={classes.item}>
              {isLoggedin &&
                 <Link className={classes.link} to="/about">
                 <i className="fa-solid fa-circle-info"></i> About
               </Link>

              }
             
            </div>
            <div className={classes.item}>
              {isLoggedin &&
                <Link className={classes.link} to="/service">
                <i className="fa-solid fa-briefcase"></i> Service
              </Link>

              }

            </div>
            <div className={classes.item}>

              {isLoggedin &&
                 <Link className={classes.link} to="/contact">
                 <i className="fa-solid fa-phone"></i> ContactUs
               </Link>

              }
             
            </div>
            {
              !isLoggedin && (
                <Link to='/login' className={classes.btn}>Sign Up</Link>
              )
            }
            {
              isLoggedin && (
                <Link to='/login' onClick={logoutHandler} className={classes.btn}> Logout 
                </Link>
              )
            }
            {
              isLoggedin && (
                <Link to='/login' onClick={logoutHandler} className={classes.mobilebtn}> Logout 
                <i class="fa fa-sign-out" aria-hidden="false"></i>
                </Link>
              )
            }

            {/* <button className={classes.mobilebtn}>Sign up</button>
            <button className={classes.btn}>Sign Up</button> */}
          </div>
          
        </nav>
      </Fragment>
    );
}

export default Header