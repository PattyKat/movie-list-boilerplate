import React from 'react';



const DisplayMovies = (props) => (



  <div className = 'moviebox'>


   {props.movies.map(({title}, idx) => {
      return (
       <span  key = {title + idx} value = {idx}>{title}</span>
      )
   })}
  </div>

);


export default DisplayMovies;