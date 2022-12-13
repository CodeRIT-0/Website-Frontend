import React from 'react'
import classes from './PastEvents.module.css'
import PastEventsHeader from './PastEventsHeader'
import Event from './Event'

function PastEvents() {
  return (
    <div className= {classes.root}>
    <PastEventsHeader />
    <div className={classes.allPastEvents}>
        {/* <Event boxcolor="#0A0440"/>
        <Event boxcolor="#0A0440"/>
        <Event boxcolor="#0A0440"/> */}
    </div>
    </div>
  )
}

export default PastEvents