import classes from './EventBox.module.css';

import React from 'react'
import BoxContent from './BoxContent';

function EventBox() {
  return (
    <div className= {classes.Box}>
        <BoxContent/>
    </div>
  )
}

export default EventBox