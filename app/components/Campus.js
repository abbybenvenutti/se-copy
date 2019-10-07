// 'use strict'

import React, { Component } from 'React'
import {removeCampuses} from '../reducers/campus_reducer'
import { connect } from 'react-redux'


const Campus = props => {

    const campus = props.campus

    return (
      <div>
        <ul>
          <button type="button" onClick={() => props.removeCampuses(props.campus.id)}>X</button>
        <h2>{campus.name}</h2>
        </ul>

        <ul>
          <a href={`/campuses/${campus.id}`} >

       <img src={campus.imageUrl} width="250" height="100" />

          </a>
        </ul>
      </div>

    )
  }

  const mapDispatchToProps = dispatch => ({
    removeCampuses: (id) => dispatch(removeCampuses(id))
  })

  const mapStateToProps = state => ({
    campuses: state.campuses
  })


  export default connect(mapStateToProps, mapDispatchToProps)(Campus)

