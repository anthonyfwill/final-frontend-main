import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewInstructorView = (props) => {
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
          <Navbar.Brand href="/instructors">All Instructors</Navbar.Brand>                                                                                                        
          <Navbar.Brand href="/courses">All Courses</Navbar.Brand>
            <Link to={`/newcourse`}>
              <Button variant="primary">Add New Course</Button>{' '}
            </Link>
          </Navbar>
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Instructor
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
          <input type="text" name="department" onChange={(e) => handleChange(e)} required/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Face Pic (Image URL): </label>
          <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
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

export default NewInstructorView;