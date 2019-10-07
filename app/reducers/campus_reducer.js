'use strict'
import axios from 'axios'
 import thunks from 'redux-thunk'

//action types

const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_CAMPUS = 'GOT_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

const gotCampuses = (campuses) => ({
  type: GOT_CAMPUSES,
  campuses

})

export const gotCampus = campus => ({
  type: GOT_CAMPUS,
  campus
})

export const addCampus = content => {
 return { type: ADD_CAMPUS,
  content}
}

export const removeCampus = id => ({
  type: REMOVE_CAMPUS,
  id
})


//thunks
export const getCampuses = () => {
  return async (dispatch) => {
    const responses = await axios.get('/api/campuses')
    const data = responses.data
    const action = gotCampuses(data)
    dispatch(action)
  }
}

export const postCampus = (campus, history) => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      const action = gotCampus(newCampus);
      dispatch(action);
    //  history.push(`/campuses/`)
    })
};

export const removeCampuses = id => {
  return async (dispatch) => {
  dispatch(removeCampus(id))
    await axios.delete(`/api/campuses/${id}`)
  }

}

//reducer
const initialState = {
  campuses: [],
  loaded: false,
  newCampus: { name: '', email: ''}
}

const campuses = (state = initialState, action) => {
  switch (action.type){
    case GOT_CAMPUSES: {
      return {...state, campuses: action.campuses, loaded: true}
    }
    case GOT_CAMPUS: {
      return {
        ...state, campuses: [...state.campuses, action.campus]
      }
    }
    case ADD_CAMPUS: {
      return {
        ...state, newCampus: action.content
      }
    }
    case REMOVE_CAMPUS: {
      return {
        ...state, campuses: state.campuses.filter(campus => campus.id !== action.id)
      }
    }
    default:
    return state
  }
}


export default campuses
