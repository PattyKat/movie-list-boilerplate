import React from 'react';
import axios from'axios';
import DisplayMovies from './DisplayMovies.jsx';
import SearchBar from './SearchBar.jsx'

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: movies,
    }
    this.filterMovies = this.filterMovies.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount(){
    //set movie state to movies from the database
    this.getMovies();

  }

  getMovies (){
    axios.get('/api/movies')
    .then((data => {
      console.log(data.data);
      this.setState({movies: data.data})}))
  }

  filterMovies (title){
    const movies = [...this.state.movies];
    console.log(title);
    console.log(movies);
    var lCTitle = title.toLowerCase();
    const filtered = [];

    for (var i = 0; i < movies.length ; i++) {
      var currentMovieTitle = movies[i].title.toLowerCase();
      if(currentMovieTitle.startsWith(`${lCTitle}`)) {
        console.log('match!', currentMovieTitle);
        filtered.push(movies[i]);

      }
    }
    this.setState({filtered: filtered})
  }


  render () {
    return (
      <div>
        <SearchBar filterMovies = {this.filterMovies}/>
        <DisplayMovies movies = {this.state.movies} />
      </div>
    )
  }
};

export default App;