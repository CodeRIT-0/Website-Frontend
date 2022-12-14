import React from 'react';
import classes from './Calender.module.css'
import {FaCalendarAlt} from "react-icons/fa";

function Calender({cal}) {
  return (
    <div className={classes.calender}>
    <FaCalendarAlt className={classes.icon}/>
    <h5 className={classes.locationPlace}>
      {/* 29th November 2021 */}
      {cal}
      </h5>
    </div>
  )
}

export default Calender