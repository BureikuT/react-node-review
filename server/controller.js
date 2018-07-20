let students = [
    {
        id: 1,
        name: 'Cody',
        hp: 50,
        attack: 77777777
    }
]

let id = 2

module.exports = {
    getStudents: (req, res) => {
        res.status(200).send(students)
    },
    addStudent: (req, res) => {
        const { name, hp, attack } = req.body

        const student = {
            id,
            name,
            hp,
            attack
        }
        students.push(student)
        id++
        res.status(200).send(students)
    },
    updateStudent: (req, res) => {
        let { id } = req.params
        let { name, hp, attack } = req.body
        let index = students.findIndex(s => s.id === +id)
        if(index !== -1) {
            students[index].name = name
            students[index].hp = hp
            students[index].attack = attack
        }
        res.status(200).send(students)
    },
    deleteStudent: (req, res) => {
        const {id} = req.params
        let index = students.findIndex( s => s.id === +id)

        if(index !== -1) {
            students.splice(index, 1)
        }
        res.status(200).send(students)
    }   
}