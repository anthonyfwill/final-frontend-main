import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';



const HomePageView = () => {
  const myStyle={
        backgroundImage: "url('https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg')",
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={myStyle}>
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
      </Navbar>
      <Card className="quote-container" style={{ width: '50rem' }}>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              "Hunter College is enormously proud of the importance and excellence of its arts programs. Over tbe past decade, we have moved aggressively to develop premier programs in these areas, and we are now the destimation for arts faculty and students from around the world."{' '}
            </p>
            <footer className="blockquote-footer">
            <cite title="Source Title">Hunter College President Jennifer J. Raab</cite>
            </footer>
          </blockquote>
        </Card.Body>
        </Card>
    </div>
  );    
}




export default HomePageView;
