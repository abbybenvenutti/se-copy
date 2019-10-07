// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import campuses from './campus_reducer'
import students from './students_reducer'

const rootReducer = combineReducers({campuses, students})

export default rootReducer
