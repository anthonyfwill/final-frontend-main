import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseInfoThunk } from '../../store/thunks';


class EditCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: this.props.title, 
          timeslot: this.props.timeslot,
          location: this.props.location, 
          instructorId: this.props.instructorId, 
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.props)

        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            instructorId: this.state.instructorId,
            courseId: this.state.courseId
        };
        
        let newCourse = await this.props.editCourse(course);
      
        this.setState({
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: null, 
          courseId: null,
          redirect: true,
          redirectId: newCourse.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/final-frontend-main/course/${this.state.redirectId}`}/>)
        }
        return (
          <EditCourseView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editCourse: (course) => dispatch(editCourseInfoThunk(course)),
    })
}

export default connect(null, mapDispatch)(EditCourseContainer);