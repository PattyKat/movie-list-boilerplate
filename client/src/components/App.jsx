import React from 'react';
import axios from'axios';
import DisplayMovies from './DisplayMovies.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      filterToggle: x => x
    }
    this.filterMovies = this.filterMovies.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount(){
    //set movie state to movies from the database
    this.getMovies();

  }

  getMovies (){
    axios.get('/api/movies')
    .then((data => {
      console.log(data.data);
      this.setState({movies: data.data});
  }))
  }

  filterMovies (title){
    //title = lowercase version of search bar entry
    //send axios get request, that uses a url like '/api/movies/filter
    axios.get('/api/movies/filter', {params: {title}})
    .then((data) => {
      console.log(data.data);
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


  render () {
    return (
      <div>
        <AddMovieBar addMovie = {this.addMovie}/>
        <SearchBar filterMovies = {this.filterMovies}/>
        <DisplayMovies movies = {this.state.movies} />
      </div>
    )
  }
};

export default App;