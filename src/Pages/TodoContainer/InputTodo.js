import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  }

  onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input
          type="text"
          className="form-control mr-3"
          placeholder="enter any new item"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />

        <button type="submit" className="btn btn-primary"> submit </button>
      </form>
    );
  }
}

export default InputTodo