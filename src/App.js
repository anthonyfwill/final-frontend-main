import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
  NewInstructorContainer,
  EditCourseContainer,
  EditInstructorContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/final-frontend-main" component={HomePageContainer} />
        <Route exact path="/final-frontend-main/instructors" component={AllInstructorsContainer} />
        <Route exact path="/final-frontend-main/newinstructor" component={NewInstructorContainer} />
        <Route exact path="/final-frontend-main/instructor/:id" component={InstructorContainer} />
        <Route exact path="/final-frontend-main/instructor/:id/edit" component={EditInstructorContainer} />
        <Route exact path="/final-frontend-main/courses" component={AllCoursesContainer} />
        <Route exact path="/final-frontend-main/newcourse" component={NewCourseContainer} />
        <Route exact path="/final-frontend-main/course/:id" component={CourseContainer} />
        <Route exact path="/final-frontend-main/course/:id/edit" component={EditCourseContainer} />

      </Switch>        
    </div>
  );
}

export default App;

