import React from 'react';
import {useState, useEffect} from 'react';



const DisplayMovies = (props) => {

  //const [movieInfoDropdown, setmovieInfoDropdown] = useState(0);

  const onWatchClick = (event) =>{
   var info = event.target.value.split(' ')
   var id = parseInt(info[0]);
   var watched = info[1];
   //console.log(id, watched)
   props.watched(id, watched);

  };
  const onDeleteClick=(event)=>{
   //console.log('delete', event.target.value);
   props.deleteMovie(event.target.value);
  }
  const onTitleClick=(event)=>{
    //console.log(typeof event.target.dataset.value, event.target.dataset.value);
    //setmovieInfoDropdown(event.target.dataset.value);
    props.activateMovieInfoDropdown(event.target.dataset.value);

  }

  return (

  <div className = 'moviebox'>

      {props.movies.map(({id,title, watched}) => {
        //console.log('props: ',props.activateDropdown);
        //console.log('current id: ', id.toString());


        return (
          <div className = 'movieItem' key = {id} value={watched}>
              <button className="deleteMovies" value ={id} onClick={onDeleteClick}>Delete</button>
              <span  key = {title + id} data-value= {id} onClick={onTitleClick}>{title}</span>
              <button style={(watched === 'yes')? {backgroundColor: 'green'}:{backgroundColor: 'pink'}} value={`${id} ${watched}`} onClick={onWatchClick}>Watched</button>
              <div className="moviePopup">
                  {props.activateDropdown === id.toString() &&
                  <div className="moviePopupContainer">
                  <div className="movieDetailsContainer">
                      <span>Year: </span>
                      <span>Runtime: </span>
                      <span>Metascore: </span>
                      <span>Imdb Rating: </span>
                  </div>
                  <div className="moviePicture">
                    <img src="testpic.png"/>
                  </div>
                  </div>
                  }
              </div>
          </div>
        )
      })}

  </div>
  );

};


export default DisplayMovies;

