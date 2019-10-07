import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampus, postCampus } from '../reducers/campus_reducer'

// class AddCampus extends Component {

//   constructor(){
//     super()

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleChange(evt) {
  //   // let newState = {}
  //   // newState[evt.target.name] = evt.target.value
  //   // this.setState(newState)

  //   this.props.addCampus(evt.target.value)
  // }
  // handleSubmit(evt) {
  //   evt.preventDefault()
  //  const { name, address } = this.props
  //   this.props.postCampus({ name, address })
  // }

  const AddCampus = props => {

    const campus = props.campuses

  // render () {
    if (campus.loaded) {

    return (

      // <h1>Add Campus</h1>

      <form onSubmit={props.handleSubmit}>

        <input type="text" name="name" onChange={props.handleChange} placeholder="name of campus"  />
        <input type="text" name="address" placeholder="address" onChange={props.handleChange} />


<button className="btn btn-default" type="submit">Submit!</button>
      </form>

      )
  }
// }
}


const mapStateToProps = state => ({
  campuses: state.campuses,
  newCampus: state.newCampus
})

const mapDispatchToProps = (dispatch) => ({

  handleChange: (event) => dispatch(addCampus(event.target.value)),
  handleSubmit: (event) => {
    event.preventDefault();
    const campus = {
      name: event.target.name.value,
      address: event.target.address.value};

    dispatch(postCampus(campus));
    dispatch(addCampus({name: '', address: ''}))
    event.target.name.value = ''
    event.target.address.value = ''

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)
