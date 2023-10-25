const express = require('express')
const connectToMongoose = require('./middleware/mongoose')
const app = express()
const port = 3000

app.use(express.json())

app.use(connectToMongoose)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/addtask', require('./api/addtask'))

app.use('/api/gettask', require('./api/gettask'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})