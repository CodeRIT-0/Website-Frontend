import React from 'react'
import classes from './EventsLanding.module.css'
import Event from './Event.jsx'
import EventHeader from './EventHeader'

function EventsLanding() {
  return (
    <div className={classes.EventsHome}>
      <EventHeader />
      <div className={classes.allEvents}>
        <Event boxcolor= "rgba(196, 196, 196, 0.2)" img1 = "./EventCircle.png" header = "BINARY SEARCH" para="Facing TLE while solving questions? Attend this beginner friendly workshop and see how Binary search helps!"/>
        <Event boxcolor= "rgba(196, 196, 196, 0.2)" img1="./Resume.png" header="RESUME BUILDING" para="A single sheet of paper can decide your future and career"/>
        <Event boxcolor= "rgba(196, 196, 196, 0.2)" img1="./Pylot.jpeg" header="PYLOT WORKSHOP" para="A python workshop that taught to build anything from scratch  "/>
      </div>
    </div>
  )
}

export default EventsLanding