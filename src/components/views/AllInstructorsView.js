import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const AllInstructorsView = (props) => {
  let {instructors, deleteInstructor} = props;
  console.log(props);
  if (!props.allInstructors.length) {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
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
          <Link to={`/newinstructor`}>
            <Button variant="primary">Add New Instructor</Button>{' '}
          </Link>
      </Navbar>
      There are no instructors.
        <br/><Link to={`/newinstructor`}>
            <Button variant="primary">Add New Instructor</Button>{' '}
          </Link>
      </div>
    );

  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
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
          <Link to={`/newinstructor`}>
            <Button variant="primary">Add New Instructor</Button>{' '}
          </Link>
      </Navbar>
      <div  className = "instructor-container">
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
          <Link to={`/instructor/${instructor.id}/edit`}>
            <Button variant="primary">Edit Instructor</Button>{' '}
          </Link>
          <Button variant="primary" onClick={() => deleteInstructor(instructor.id)}>Delete</Button>{' '}
        </div>
        );
      })}
      <br/>
      </div>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;