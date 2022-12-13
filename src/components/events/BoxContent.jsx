import React from 'react'
import classes from './BoxContent.module.css'
import Calender from './Calender'
import Location from './Location'

function BoxContent(props) {
  return (
    <div className={classes.content}>
      <div className={classes.eventtext}>
        <h2>{props.header}</h2>
        <p>{props.para}</p>
        </div>
        <div className={classes.loccal}>
          <Location/>
          <Calender/>
        </div>
    </div>
  )
}

export default BoxContent