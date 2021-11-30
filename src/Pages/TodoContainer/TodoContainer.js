import React, { Component } from "react";

import axios from "axios";
import { v4 as uuid } from "uuid";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

import HeaderTodo from "./HeaderTodo";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

class TodoContainer extends Component {
    state = {
        todos: [],
        show: false
    };

    // fetching the data from the given url
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({
                todos: response.data
            }));
    }

    addTodoItem = title => {
      const newTodo = {
        id: uuid,
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }

    handleChange = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }),
        show: !this.state.show
      })
    }

    delTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id
          })
        ]
      });
    }

    render() {
        return(
        <div className="container wrapper">
            { /* header */ }
            <Header />

            { /* main container */ }
            <div className="row">
                { /* left panel */}
                <LeftPanel />

                { /* center panel */ }
                { /* <Container /> */ }
                <div className="col-sm-6">
                    <div className="contentCenter">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Class Based Life Cycly Hooks - Working on Todos Concept </h1>

                                <div className='row'>
                                    <div className="col-sm-12">
                                        <div className="card">
                                          <div className="card-header">
                                            <HeaderTodo headerSpan = {this.state.show} />
                                          </div>

                                          <div className="card-body">
                                            <InputTodo addTodoProps = {this.addTodoItem} />

                                            <hr />

                                            <TodosList
                                                todos = {this.state.todos}
                                                handleChangeProps = {this.handleChange}
                                                deleteTodoProps = {this.delTodo}
                                            />
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                { /* rightpanel */}
                <RightPanel />
            </div>

            { /* footer */ }
            <Footer />
        </div>
        );
    }
}

export default TodoContainer;