import React from 'react';
import DisplayMovies from './DisplayMovies.jsx';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => (
  <div>
    <DisplayMovies movies = {movies}/>
  </div>
);

export default App;