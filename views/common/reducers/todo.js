import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions'

export default function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (action.id !== todo.id) return todo
        return Object.assign({}, todo, {completed: !todo.completed})
      })
    case REMOVE_TODO:
    return state.filter(todo => (todo.id !== action.id))
    default:
      return state
  }
}
