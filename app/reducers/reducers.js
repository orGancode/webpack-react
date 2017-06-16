import { combineReducers } from 'redux'

import visibilityFilter from './visible_reducer'
import todos from './todo_reducer'


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp