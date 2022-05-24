import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const AllCoursesView = (props) => {
  let {courses, deleteCourse, editCourse} = props;
  console.log(props);
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
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
        <Navbar.Brand href="/instructors">All Instructors</Navbar.Brand>                                                                                                        
        <Navbar.Brand href="/courses">All Courses</Navbar.Brand>
        <Link to={`/newcourse`}>
            <Button variant="primary">Add New Course</Button>{' '}
        </Link>
      </Navbar>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
    );
  }
  
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
          <Navbar.Brand href="/instructors">All Instructors</Navbar.Brand>                                                                                                        
          <Navbar.Brand href="/courses">All Courses</Navbar.Brand>
            <Link to={`/newcourse`}>
              <Button variant="primary">Add New Course</Button>{' '}
            </Link>
          </Navbar>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
            <Link to={`/course/${course.id}/edit`}>
              <Button variant="primary">Edit Course</Button>{' '}
            </Link>
          <Button variant="primary" onClick={() => deleteCourse(course.id)}>Delete</Button>{' '}
          </div>
        );
      }
      )}
    </div>
  );
};


export default AllCoursesView;