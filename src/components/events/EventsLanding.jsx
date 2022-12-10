import React from 'react'
import classes from './EventsLanding.module.css'
import Event from './Event.jsx'
import EventHeader from './EventHeader'

function EventsLanding() {
  return (
    <div className={classes.EventsHome}>
      <EventHeader />
      <div className={classes.allEvents}>
        <Event/>
        <Event/>
        <Event/>
      </div>
    </div>
  )
}

export default EventsLanding