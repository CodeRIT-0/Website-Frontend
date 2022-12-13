import classes from './EventBox.module.css';

import React from 'react'
import BoxContent from './BoxContent';

function EventBox(props) {
  return (
    <div className= {classes.Box} style={{backgroundColor: props.bgcolor}} >
        <BoxContent  header={props.header} para={props.para} cal={props.cal} loc={props.loc}/>
    </div>
  )
}

export default EventBox