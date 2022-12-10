import React from 'react'
import classes from './EventsLanding.module.css'
import Event from './Event.jsx'
import EventHeader from './EventHeader'

function EventsLanding() {
  return (
    <div className={classes.EventsHome}>
      <EventHeader />
      <div className={classes.allEvents}>
        <Event boxcolor= "rgba(196, 196, 196, 0.2)"/>
        <Event boxcolor= "rgba(196, 196, 196, 0.2)"/>
        <Event boxcolor= "rgba(196, 196, 196, 0.2)"/>
      </div>
    </div>
  )
}

export default EventsLanding