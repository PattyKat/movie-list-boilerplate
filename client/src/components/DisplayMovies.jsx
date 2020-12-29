import React from 'react';
import {useState, useEffect} from 'react';



const DisplayMovies = (props) => {

  const [button, setButton] = useState(false);

  const onWatchClick = (event) =>{
   var info = event.target.value.split(' ')
   var id = parseInt(info[0]);
   var watched = info[1];
   //console.log(id, watched)
   props.watched(id, watched);

  };

  return (

  <div className = 'moviebox'>

      {props.movies.map(({id,title, watched}) => {
        //console.log(watched);

        return (
          <div className = 'movieItem' key = {id} value={watched}>
          <span  key = {title + id} value = {id}>{title}</span>
          <button style={(watched === 'yes')? {backgroundColor: 'green'}:{backgroundColor: 'light blue'}} value={`${id} ${watched}`} onClick={onWatchClick}>Watched</button>
          </div>
        )
      })}

  </div>
  );

};


export default DisplayMovies;

