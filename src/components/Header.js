import React, { Fragment, useState } from "react";
import classes from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  const [clicked, setClicked ] = useState(false)
  

  // const handler=()=>{
  //   setClicked(false)
  // }

    return (
      <Fragment>
        <nav>
          <h1>Destination</h1>
          <div className={classes.menuicons} onClick = {()=>setClicked(!clicked)}>
              <i className={ clicked ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
          </div>
          <div className={`${classes.menuitems} ${clicked ? classes.active : ''}`}>
            <div className={classes.item}>
              <Link className={classes.link} to="/">
                <i className="fa-solid fa-house"></i> Home
              </Link>
            </div>
            <div className={classes.item}>
              <Link className={classes.link} to="/about">
                <i className="fa-solid fa-circle-info"></i> About
              </Link>
            </div>
            <div className={classes.item}>
              <Link className={classes.link} to="/service">
                <i className="fa-solid fa-briefcase"></i> Service
              </Link>
            </div>
            <div className={classes.item}>
              <Link className={classes.link} to="/contact">
                <i className="fa-solid fa-phone"></i> ContactUs
              </Link>
            </div>
            <button className={classes.mobilebtn}>Sign up</button>
            <button className={classes.btn}>Sign Up</button>
          </div>
          
        </nav>
      </Fragment>
    );
}

export default Header