import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Student from './components/Student'
import Create from './components/Create'

class App extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    axios.get('/api/students').then(results => {
      this.setState({students: results.data})
    })
  }

  updateStudents = (students) => {
    this.setState({students})
  }

  render() {
    let studentsMap = this.state.students.map(s => {
      return <Student updateStudents={this.updateStudents} s={s}/>
    })
    return (
      <div className="App">
        <Create updateStudents={this.updateStudents}/>
        {studentsMap}
      </div>
    );
  }
}

export default App;
