import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
import axios from 'axios'

class Student extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.s.name,
            hp: props.s.hp,
            attack: props.s.attack,
            edit: false
        }
    }

    deleteStudent = (id) => {
        axios.delete(`/api/students/${id}`).then(results => {
            this.props.updateStudents(results.data)
        })
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

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    sendUpdate = (id) => {
        let {name, hp, attack} = this.state
        let student = {name, hp, attack}
        axios.put(`/api/students/${id}`, student).then(results => {
            this.props.updateStudents(results.data)
            this.setState({
                edit: false,
                name: '',
                hp: '',
                attack: ''
            })
        })
    }



    render() {
        const { s } = this.props
        
        return (
            <div>
                {
                    this.state.edit 
                    ?
                    <div>
                        <input value={this.state.name} onChange={this.handleName}/>
                        <input value={this.state.hp} onChange={this.handleHp}/>
                        <input value={this.state.attack} onChange={this.handleAttack}/>
                        <button onClick={() => this.sendUpdate(s.id)}>Update</button>
                        <button onClick={this.toggleEdit}>Cancel</button>
                    </div>
                    :
                    <div>
                        <h4 style={{color: 'blue', backgroundColor: 'purple'}}>{s.name}</h4>
                        <p>HP: {s.hp}</p>
                        <p>ATTACK!!!!!!!!!!!!!: {s.attack}</p>
                        <button onClick={this.toggleEdit} >Update</button>
                        <DeleteButton id={s.id} deleteStudent={this.deleteStudent}/>
                    </div>

                }
            </div>
        )
    }
}
export default Student