import React, { Component } from 'react';
import { Route,NavLink,Switch } from 'react-router-dom';
import Course from './containers/Course/Course';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
               
        <ol style={{textAlign: 'center', listStyle:'none'}}>
          <li style={{textAlign: 'center', display:'inline-block',margin:'10px'}}><NavLink to='/Users'>Users</NavLink></li>
          <li style={{textAlign: 'center', display:'inline-block'}}><NavLink to='/Courses'>Courses</NavLink></li>
        </ol>
        <Switch>
        <Route path="/Users" component={Users}/>
         <Route path="/Courses/:CourseId" component={Course}/>
         <Route path="/Courses" component={Courses}/>
        </Switch>
      </div>
    );
  }
}

export default App;
