import React from 'react';



const DisplayMovies = (props) => (




  <div className = 'moviebox'>

   {props.movies.map(({id,title}) => {
      return (
       <span  key = {title + id} value = {id}>{title}</span>
      )
   })}
  </div>

);


export default DisplayMovies;