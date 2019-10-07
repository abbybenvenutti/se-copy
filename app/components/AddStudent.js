import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent, postStudent } from '../reducers/students_reducer';

const AddStudent = (props) => {
	const student = props.students;

	if (student.loaded) {
		return (
			<form onSubmit={props.handleSubmit}>
				<input type="text" name="firstName" onChange={props.handleChange} placeholder="student first name" />
				<input type="text" name="lastName" placeholder="student last name" onChange={props.handleChange} />
				<input type="text" name="email" onChange={props.handleChange} placeholder="student email" />

				<button className="btn btn-default" type="submit">
					Submit!
				</button>
			</form>
		);
	}
};

const mapStateToProps = (state) => ({
	students: state.students,
	newStudent: state.newStudent
});

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event) => dispatch(addStudent(event.target.value)),
	handleSubmit: (event) => {
		event.preventDefault();
		const student = {
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			email: event.target.email.value
		};

		dispatch(postStudent(student));
		dispatch(addStudent({ firstName: '', lastName: '', email: '' }));
		event.target.firstName.value = '';
		event.target.lastName.value = '';
		event.target.email.value = '';
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
