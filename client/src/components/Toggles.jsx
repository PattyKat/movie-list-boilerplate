import React from 'react';
import {useState, useEffect} from 'react';

const Toggles = (props)=> {
  const [displayWatched, setDisplayWatched]=useState(true);
  const [displayNotWatched, setDisplayToWatch]=useState(false);

  const onClickHandlerToWatch = (event) => {
    setDisplayWatched(false);
    setDisplayToWatch(true);
    props.displayFilter(false);
    event.preventDefault();
  }

  const onClickHandlerWatched =(event)=>{
    setDisplayWatched(true);
    setDisplayToWatch(false);
    props.displayFilter(true);
    event.preventDefault();
  }



  return (
    <div className="toggles">
      <button style = {(displayWatched)? {backgroundColor:'green'} : {backgroundColor:'pink'} } onClick ={onClickHandlerWatched}>Watched</button>
      <button style = {(displayNotWatched)? {backgroundColor:'green'} : {backgroundColor:'pink'} } onClick ={onClickHandlerToWatch}>To Watch</button>
    </div>
  );

};


export default Toggles;