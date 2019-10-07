import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from '../reducers/campus_reducer';
import { getStudents } from '../reducers/students_reducer';

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses,
		students: state.students
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCampuses: () => dispatch(getCampuses()),
		getStudents: () => dispatch(getStudents())
	};
};

class SingleStudent extends Component {
	componentDidMount() {
		this.props.getCampuses();
		this.props.getStudents();
	}

	render() {
		if (!this.props.students.loaded) {
			return <h1>loading....</h1>;
		}
		const studentId = Number(this.props.match.params.id);

		const currentStudent = this.props.students.students.find((student) => student.id === studentId);

		const selectedCampus = this.props.campuses.campuses.find((campus) => campus.id === currentStudent.id);

		if (currentStudent) {
			return (
				<div>
					<div>
						{' '}
						{currentStudent.firstName} {currentStudent.lastName}{' '}
					</div>
					<img src={currentStudent.imageUrl} width="250" height="100" />
					<div>
						<ul>
							<div>Email: {currentStudent.email}</div>
							<div>GPA: {currentStudent.gpa}</div>
							<div>School: {selectedCampus.name}</div>
						</ul>
					</div>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
