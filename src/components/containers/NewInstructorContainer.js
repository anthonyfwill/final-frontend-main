import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "", 
          imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          instructorId: null, 
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

        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            instructorId: this.state.instructorId
        };

        console.log(instructor)
        
        let newInstructor = await this.props.addInstructor(instructor);
        console.log(newInstructor)

        this.setState({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          department: this.state.department,
          imageUrl: this.state.imageUrl,
          instructorId: null, 
          redirect: true, 
          redirectId: newInstructor.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single instructor view of newly created instructor
        if(this.state.redirect) {
          return (<Redirect to={`/final-frontend-main/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);