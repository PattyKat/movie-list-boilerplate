import React from 'react';


class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

onChangeHandler (event) {
  //console.dir(event.target.value);
  this.setState({title: event.target.value});
  event.preventDefault();
}

onSubmitHandler (event) {
  //console.log(this.state.title.toLowerCase());
  this.props.filterMovies(this.state.title.toLowerCase());
  event.preventDefault();
  this.setState({title:''})
}

render () {

  return (
  <div className = 'searchbar'>
    <form onSubmit = {this.onSubmitHandler}>
      <label>
        Search:
        <input type = "text" value = {this.state.title} onChange = {this.onChangeHandler} placeholder = "Search here..."></input>
      </label>

    </form>
  </div>
  );
}

};

export default SearchBar;

