import React from 'react'
import classes from './Event.module.css'
import EventBox from './EventBox'

const Event = (props) => {
  return (
    <div className={classes.EventRoot}>
      <div className={classes.Circle} />
      <EventBox bgcolor = {props.boxcolor}/>
    </div>
  )
}

export default Event