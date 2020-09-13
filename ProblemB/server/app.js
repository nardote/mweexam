const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routerAppo = require('./routes/appointment.routes')
const routerAppoType = require('./routes/appo_types.routes')

const port = 3000

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})

app.use('/api/appointment', routerAppo)
app.use('/api/appoType', routerAppoType)

app.listen(port, () => {
  console.log(`Appoinment listening at http://localhost:${port}`)
})