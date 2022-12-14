import React from 'react'
import classes from './Event.module.css'
import EventBox from './EventBox'

const Event = (props) => {
  console.log(props.boxcolor);
  console.log(props.img1);
  return (
    <div className={classes.EventRoot}>
      {/* <div className={classes.Circle} style={{backgroundImage: `url(${require(props.img1)}))`}}/> */}
      <img className={classes.Circle} src= {require(`${props.img1}`)} />
      <EventBox bgcolor = {props.boxcolor} header={props.header} para={props.para} cal={props.cal} loc={props.loc}/>
    </div>
  )
}

export default Event