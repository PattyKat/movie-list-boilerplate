import React from 'react';
import axios from'axios';
import DisplayMovies from './DisplayMovies.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';
import Toggles from './Toggles.jsx'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      filter: (x)=> x.watched === 'yes',
      displayMovieInfoDropdown: null
    }
    this.filterMovies = this.filterMovies.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.changeWatched = this.changeWatched.bind(this);
    this.displayFilter = this.displayFilter.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.activateMovieInfoDropdown=this.activateMovieInfoDropdown.bind(this);
  }

  componentDidMount(){
    //set movie state to movies from the database
    this.getMovies();

  }

  getMovies (){
    axios.get('/api/movies')
    .then((data => {
      //console.log(data.data);
      this.setState({movies: data.data});
  }))
  }

  filterMovies (title){
    //title = lowercase version of search bar entry
    //send axios get request, that uses a url like '/api/movies/filter
    axios.get('/api/movies/filter', {params: {title}})  //once schema is updated you wil have to change to /filtered
    .then((data) => {
      //console.log(data.data);
      if(data.data.length === 0){
        alert('I\'m sorry, there is no movie by this name');
      } else {
      this.setState({movies: data.data})
      }
    })
    //change the sql query to only return movies that match title
    //if query returns an empty array, due to no matches, alert the user of no matches
    //set movies state to data
  }
  addMovie (title) {
    //takes title from addmoviebar component
    //axios request to add movie title goes here
    //upon success will invoke getMovies() to display updated movies
    axios.post('/api/movies', {title})
    .then(
        this.getMovies()
    )
  }
  deleteMovie(id){
    axios.delete('/api/movies', {data:{id}})
    .then(
      this.getMovies()
    )
  }

  changeWatched(id, watched){
    //console.log(id, watched);
    axios.put('/api/movies', {id, watched})
    .then(
      this.getMovies()
    )
  }
  displayFilter(toggleStatus){
    if(toggleStatus){
      this.setState({filter: (x)=> x.watched === 'yes'})
    } else {
      this.setState({filter: (x)=> x.watched === 'false'})
    }
  }

  activateMovieInfoDropdown(id){
    //console.log(id);
    if(this.state.displayMovieInfoDropdown === null){
    this.setState({displayMovieInfoDropdown:id})
    } else {
      this.setState({displayMovieInfoDropdown: null})
    }
    console.log(typeof this.state.displayMovieInfoDropdown,this.state.displayMovieInfoDropdown )
  }


  render () {
    return (
      <div>
        <AddMovieBar addMovie = {this.addMovie}/>
        <SearchBar filterMovies = {this.filterMovies}/>
        <Toggles displayFilter = {this.displayFilter}/>
        <DisplayMovies movies = {this.state.movies.filter(this.state.filter)} watched={this.changeWatched} deleteMovie={this.deleteMovie}  activateMovieInfoDropdown={this.activateMovieInfoDropdown}activateDropdown={this.state.displayMovieInfoDropdown}/>
      </div>
    )
  }
};

export default App;