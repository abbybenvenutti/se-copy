'use strict';
import React, { Component } from 'React';
import { connect } from 'react-redux';
import { getStudents } from '../reducers/students_reducer';
import Student from './Student';
import AddStudent from './AddStudent';

const mapStateToProps = (state) => ({
	students: state.students
});

const mapDispatchToProps = (dispatch) => ({
	getStudents: () => dispatch(getStudents())
});

class AllStudents extends Component {
	componentDidMount() {
		this.props.getStudents();
	}

	render() {
		if (!this.props.students.loaded) {
			return <h1>Loading...</h1>;
		}
		return (
			<div className="container">
				<h1> All Students</h1>

				<ul>{this.props.students.students.map((student) => <Student student={student} key={student.id} />)}</ul>
				<AddStudent student={this.props.students} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
