import React from 'react'
import { MdLocationOn } from "react-icons/md";
import classes from './Location.module.css'


function Location() {
  return (
    <div className={classes.location}>
    <MdLocationOn className={classes.icon}/>
    <h5 className={classes.locationPlace}>DES High Tech Seminar Hall</h5>
    </div>
  )
}

export default Location