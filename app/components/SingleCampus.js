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

class SingleCampus extends Component {
	componentDidMount() {
		this.props.getCampuses();
		this.props.getStudents();
	}

	render() {
		if (!this.props.campuses.loaded) {
			return <h1>loading....</h1>;
		}
		const campusId = Number(this.props.match.params.id);

		const campusStudents = this.props.students.students.filter((student) => student.campusId === campusId);

		const selectedCampus = this.props.campuses.campuses.find((campus) => campus.id === campusId);

		if (selectedCampus) {
			return (
				<div>
					<div> {selectedCampus.name} </div>
					<img src={selectedCampus.imageUrl} width="250" height="100" />
					<div>Address: {selectedCampus.address}</div>
					<div>Description: {selectedCampus.description}</div>
					<div>
						<ul>
							{campusStudents.map((student) => (
								<li key={student.id}>
									<div>
										Students who go here: {student.firstName} {student.lastName}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
