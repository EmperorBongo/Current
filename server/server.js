const express = require('express')
const cors = require('cors')
const db = require('./database')
const seed = require('./seed')
const {addPigeon, getPigeons, deletePigeon} = require('./controllers/pigeons')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/seed', seed)
app.post('/api/addPigeon', addPigeon)
app.get('/api/getPigeons', getPigeons)
app.delete('/api/deletePigeon/:id', deletePigeon)

db.sync()

app.listen(9822, () => console.log('Running on port 9822'))