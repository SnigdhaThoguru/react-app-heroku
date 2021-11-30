import React, { Component } from "react";

class TodoItem extends Component {
  componentWillUnmount() {
    alert("Item removed from the List!")
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: "normal",
      color: "#f00",
      textDecoration: "line-through"
    };

    const { completed, id, title } = this.props.todo;

    return(
      <li className="row list-group">
        <span className="col-2 mr-3">
          <input
            type = "checkbox"
            checked = {completed}
            onChange = {() => {this.props.handleChangeProps(id)}}
           />
        </span>

        <span className="col-6 mr-3" style={completed ? completedStyle : null}>
          {title}
        </span>

        <span className="col-4 mr-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {this.props.deleteTodoProps(id)}}>
            delete
          </button>
        </span>


      </li>
    );
  }
}

export default TodoItem;
 