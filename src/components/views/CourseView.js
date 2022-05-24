import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/final-frontend-main">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Hunter_College_logo.svg/1200px-Hunter_College_logo.svg.png"
            width="90"
            height="90"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Brand href="/final-frontend-main/instructors">All Instructors</Navbar.Brand>                                                                                                        
        <Navbar.Brand href="/final-frontend-main/courses">All Courses</Navbar.Brand>
        <Link to={`/newinstructor`}>
          <Button variant="primary">Add New Instructor</Button>{' '}
        </Link>
      </Navbar>  
      <h1>{course.title}</h1>
      {course.instructor ? 
        <div >
          <Link to={`/final-frontend-main/instructor/${course.instructor.id}`}>
            <h3><img src= {course.instructor.imageUrl} width="100" height="100"/> {course.instructor.firstname + " " + course.instructor.lastname}</h3> 
          </Link>
          <h4>Schedule: {course.timeslot} <br/> Location: {course.location}</h4>
        </div> : <h3>staff</h3>}
    </div>
  );

};

export default CourseView;