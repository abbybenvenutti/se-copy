'use strict';

import React from 'React';
import { removeStudents } from '../reducers/students_reducer';
import { connect } from 'react-redux';

const Student = (props) => {
	const student = props.student;

	return (
		<div>
			<ul>
				<button type="button" onClick={() => props.removeStudents(props.student.id)}>
					X
				</button>
				<h2>
					{student.firstName} {student.lastName}
				</h2>
			</ul>

			<ul>
				<a href={`/students/${student.id}`}>
					<img src={student.imageUrl} width="250" height="100" />
				</a>
			</ul>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeStudents: (id) => dispatch(removeStudents(id))
});

const mapStateToProps = (state) => ({
	students: state.students
});
export default connect(mapStateToProps, mapDispatchToProps)(Student);
