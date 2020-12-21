import React from 'react';
import axios from'axios';
import DisplayMovies from './DisplayMovies.jsx';
import SearchBar from './SearchBar.jsx'

// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      filterToggle: x => x
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
      this.setState({movies: data.data});
  }))
  }

  filterMovies (title){
    //title = lowercase version of search bar entry
    //send axios get request, that uses a url like '/api/movies/filter
    axios.get('/api/movies/filter', {params: {title}})
    .then((data) => {
      console.log(data.data);
      this.setState({movies: data.data})
    })
    //change the sql query to only return movies that match title
    //set movies state to data



    //set state of filter to a function

    // const movies = [...this.state.movies];
    // console.log(title);
    // console.log(movies);
    // var lCTitle = title.toLowerCase();
    // const hold = [];

    // for (var i = 0; i < movies.length ; i++) {
    //   var currentMovieTitle = movies[i].title.toLowerCase();
    //   if(currentMovieTitle.startsWith(`${lCTitle}`)) {
    //     console.log('match!', currentMovieTitle);
    //     hold.push(movies[i]);
    //   }
    // }
    // this.setState({movies: hold})
  }


  render () {
    return (
      <div>
        <SearchBar filterMovies = {this.filterMovies}/>
        <DisplayMovies movies = {this.state.movies/*.filter(this.state.filterToggle)*/} />
      </div>
    )
  }
};

export default App;