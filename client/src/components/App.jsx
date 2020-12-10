import React from 'react';
import DisplayMovies from './DisplayMovies.jsx';
import SearchBar from './SearchBar.jsx'

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => (
  <div>
    <SearchBar />
    <DisplayMovies movies = {movies}/>
  </div>
);

export default App;