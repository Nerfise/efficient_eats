const express = require('express')
const db = require('./database/sequelize')
const cors = require('cors');
const bodyparser = require('body-parser')

const app = express()

app.use(cors());

app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/users',require('./components/users/routes'))
app.use('/api/appointments',require('./components/appointment/routes'))

const port = 5000

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});
  
db.sequelize.sync({ alter: true }).then(() => {
  console.log('Drop and re-sync db.');
});