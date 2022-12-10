import React from 'react'
import classes from './BoxContent.module.css'
import Calender from './Calender'
import Location from './Location'

function BoxContent() {
  return (
    <div className={classes.content}>
        <h2>BINARY SEARCH</h2>
        <p>Facing TLE while solving questions? Attend this beginner friendly workshop and see how Binary search helps!</p>
        <Location/>
        <Calender/>
    </div>
  )
}

export default BoxContent