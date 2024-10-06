import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./navBar.module.css";
const NavBar = () => {
  return (
    <div>
         <nav className={classes.navBar}>
            <li>
              <Link to = "/about" className={classes.link}>About</Link>
            </li>
            <li>
              <Link to = "/posts" className={classes.link}>Posts</Link>
            </li>
          </nav>
    </div>
  )
}

export default NavBar;