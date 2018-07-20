const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
const app = express()

app.use(bodyParser.json())

app.get('/api/students', controller.getStudents)
app.post('/api/students', controller.addStudent)
app.put('/api/students/:id', controller.updateStudent)
app.delete('/api/students/:id', controller.deleteStudent)

const PORT = 4242
app.listen(PORT, () => console.log('I got knocked down but I get up again', PORT))