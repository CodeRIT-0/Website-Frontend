import React from 'react'
import classes from './PastEvents.module.css'
import PastEventsHeader from './PastEventsHeader'
import Event from './Event'

function PastEvents() {
  return (
    <div className= {classes.root}>
    <PastEventsHeader />
    <div className={classes.allPastEvents}>
      <Event boxcolor= "#0A0440" img1 = "./EventCircle.png" header = "BINARY SEARCH" para="Facing TLE while solving questions? Attend this beginner friendly workshop and see how Binary search helps!" loc="DES Seminar hall" cal="29th Nov"/>
        <Event boxcolor= "#0A0440" img1="./Resume.png" header="RESUME BUILDING" para="A single sheet of paper can decide your future and career" loc="Discord" cal="15th Dec 2021"/>
        <Event boxcolor= "#0A0440" img1="./Pylot.jpeg" header="PYLOT WORKSHOP" para="A python workshop that taught to build anything from scratch" loc="ESB Seminar hall" cal="27th and 28th June 2022"/>
        {/* <Event boxcolor="#0A0440"/
        <Event boxcolor="#0A0440"/>
        <Event boxcolor="#0A0440"/> */}
    </div>
    </div>
  )
}

export default PastEvents