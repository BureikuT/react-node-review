import React, { Component } from 'react'
import axios from 'axios'

class Create extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            hp: 0,
            attack: 0
        }
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handleHp = (e) => {
        this.setState({hp: e.target.value})
    }
    handleAttack = (e) => {
        this.setState({attack: e.target.value})
    }

    addStudent = () => {
        const {name, hp, attack} = this.state
        const newStudent = {name, hp, attack}
        axios.post('/api/students', newStudent).then(results => {
            this.props.updateStudents(results.data)
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='Name' value={this.state.name} onChange={this.handleName}/>
                <input type="number" value={this.state.hp} onChange={this.handleHp} />
                <input type="number" value={this.state.attack} onChange={this.handleAttack} />
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        )
    }
}

export default Create