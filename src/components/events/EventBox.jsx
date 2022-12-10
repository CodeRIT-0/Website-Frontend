import classes from './EventBox.module.css';

import React from 'react'
import BoxContent from './BoxContent';

function EventBox(props) {
  return (
    <div className= {classes.Box} style={{backgroundColor: props.bgcolor}}>
        <BoxContent/>
    </div>
  )
}

export default EventBox