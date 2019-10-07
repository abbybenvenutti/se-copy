'use strict'
import axios from 'axios'
import thunks from 'redux-thunk'

//action types

const GOT_STUDENTS = 'GOT_STUDENTS'
const GOT_STUDENT = 'GOT_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

//action creators

const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
})

export const gotStudent = student => ({
  type: GOT_STUDENT,
  student
})

export const addStudent = content => ({
  type: ADD_STUDENT,
  content
})

export const removeStudent = id => ({
  type: REMOVE_STUDENT,
  id
})
//thunks

export const getStudents = () => {
  return async (dispatch) => {
    const responses = await axios.get('/api/students')
    const data = responses.data
    const action = gotStudents(data)
    dispatch(action)
  }
}

export const postStudent = (newPost, history) => {
  return async (dispatch) => {
    const responses = await axios.post('/api/students', newPost)
    const data = responses.data
    const action = gotStudent(data)
    dispatch(action)
    // history.push('/students')
  }
}

export const removeStudents = id => {
  return async (dispatch) => {
    dispatch(removeStudent(id))
    await axios.delete(`/api/students/${id}`)
  }
}

const initialState = {
  students: [],
  loaded: false,
  newStudent: {firstName: '', lastName: '', email: ''}
}
//reducer

const students = (state = initialState, action) => {
  switch (action.type) {
    case GOT_STUDENTS: {
      return {...state, students: action.students, loaded: true}
    }
    case GOT_STUDENT: {
      return {
        ...state, students: [...state.students, action.student]
      }
    }
    case ADD_STUDENT: {
      return {
        ...state, newStudent: action.content
      }
    }
    case REMOVE_STUDENT: {
      return {
        ...state, students: state.students.filter(student => student.id !== action.id)
      }
    }
    default:
    return state
  }
}

export default students
