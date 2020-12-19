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
  //console.log(this.state.title);
  this.props.filterMovies(this.state.title);
  event.preventDefault();
}

render () {

  return (
  <div className = 'searchbar'>
    <form onSubmit = {this.onSubmitHandler}>
      <label>
        Search:
        <input type = "text" value = {this.state.title} onChange = {this.onChangeHandler}></input>
      </label>

    </form>
  </div>
  );
}

};

export default SearchBar;

