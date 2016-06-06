import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo, removeTodo } from '../actions'

class TodoList extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    let {todos, onTodoClick, onTodoDoubleClick} = this.props
    return (
      <div>
        <ul>
          {todos.map(todo => (
              <Todo
                key={todo.id}
                onClick={() => onTodoClick(todo.id)}
                onDoubleClick={() => onTodoDoubleClick(todo.id)}
                {...todo}
              />
            )
          )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
  onTodoDoubleClick: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
