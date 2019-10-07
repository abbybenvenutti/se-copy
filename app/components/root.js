import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import { getCampuses } from '../reducers/campus_reducer';
import { getStudents } from '../reducers/students_reducer';
import { connect } from 'react-redux';
import SingleStudent from './SingleStudent';

class Root extends Component {
	componentDidMount() {
		this.props.getCampuses();
		this.props.getStudents();
	}

	render() {
		return (
			<div>
				<div>
					<nav>Welcome!</nav>
				</div>

				<main>
					<h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
					<p>This seems like a nice place to get started with some Routes!</p>
					<Router>
						<ul>
							<Link to="/campuses">Campuses</Link>
							<Link to="/students">Students</Link>
							<Switch>
								<main>
									<Route exact path="/campuses" component={AllCampuses} />
									<Route exact path="/students" component={AllStudents} />
									<Route path="/campuses/:id" component={SingleCampus} />
									<Route path="/students/:id" component={SingleStudent} />
								</main>
							</Switch>
						</ul>
					</Router>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses,
		students: state.students
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCampuses: () => dispatch(getCampuses()),
	getStudents: () => dispatch(getStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
