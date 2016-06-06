import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddBox = ({dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit = { e => {
        e.preventDefault()
        let text = input.value.trim()
        if (text !== '') {
          dispatch(addTodo(text))
          input.value = ''
        }
      }}>
        <input ref={node => {
          input = node
        }} name="add_todo"/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddBox)
