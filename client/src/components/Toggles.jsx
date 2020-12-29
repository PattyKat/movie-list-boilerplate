import React from 'react';
import {useState, useEffect} from 'react';

const Toggles = (props)=> {
  const [display, setDisplay]=useState(true);

  const onClickHandler = (event) => {
    setDisplay(!display);
    event.preventDefault();
  }



  return (
    <div className="toggles">
      <button style = {(display)? {backgroundColor:'green'} : {backgroundColor:'light blue'} } onClick ={onClickHandler}>Watched</button>
      <button style = {(!display)? {backgroundColor:'green'} : {backgroundColor:'light blue'} } onClick ={onClickHandler}>To Watch</button>
    </div>
  );

};


export default Toggles;