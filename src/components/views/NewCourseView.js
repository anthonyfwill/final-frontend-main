import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const NewCourseView = (props) => {
  const {handleChange, handleSubmit } = props;

  return (
    <div className="root">
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
            <Link to={`/newcourse`}>
              <Button variant="primary">Add New Course</Button>{' '}
            </Link>
          </Navbar>
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Course
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
          <input type="text" name="title" onChange ={(e) => handleChange(e)} required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
          <input type="text" name="timeslot" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
          <input type="text" name="instructorId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default NewCourseView;