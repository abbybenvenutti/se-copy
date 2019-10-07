'use strict'
import React, { Component } from 'React'
import { connect } from 'react-redux'
import  {getCampuses}  from '../reducers/campus_reducer'
import Campus from './Campus'
import AddCampus from './AddCampus'


const mapStateToProps = (state) => ({
  campuses: state.campuses
})

const mapDispatchToProps = (dispatch) => ({
  getCampuses: () => dispatch(getCampuses())

})

class AllCampuses extends Component {

  componentDidMount () {

   this.props.getCampuses()
  }

render () {
if (!this.props.campuses.loaded) {
return <h1>Loading...</h1> }

return (


  <div className="container">
    <h1> All Campuses</h1>

  <ul>
    {
     this.props.campuses.campuses.map(campus => (

        <Campus campus={campus} key={campus.id} />
     ))
    }
  </ul>
  <AddCampus campus={this.props.campuses} />

  </div>

  )
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
