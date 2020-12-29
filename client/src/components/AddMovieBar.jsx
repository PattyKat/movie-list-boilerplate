import React from 'react';

class AddMovieBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  //add on sumbit handler that will pass entered title up to App.jsx addMovie function
  onSubmitHandler(event){
    //console.log(`'${this.state.title}'`);
    const title = this.state.title;
    this.props.addMovie(title);
    event.preventDefault();
    this.setState({title:''})

  }

  //add onchange handler so that letters typed into the input box show up
  onChangeHandler (event) {
    //make sure you are referencing that corrent part of the event (find the value)
    this.setState({title:event.target.value});
    event.preventDefault();

  }

  render(){
    //renders add moive input form
    return (
    <div className = 'addMovieBar'>
      <form onSubmit={this.onSubmitHandler}>
        <label>
          Add A Movie:
          <input type="text" value={this.state.title} placeholder="type a movie title..." onChange={this.onChangeHandler}/>
        </label>
      </form>




    </div>
    )

  }
}

export default AddMovieBar;