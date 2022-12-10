import React from 'react'
import classes from './Event.module.css'
import EventBox from './EventBox'

const Event = () => {
  return (
    <div className={classes.EventRoot}>
      <div className={classes.Circle} />
      <EventBox />
    </div>
  )
}

export default Event