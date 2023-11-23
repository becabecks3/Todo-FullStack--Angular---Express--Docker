const express = require('express');
let cors = require("cors");
require('./utils/mongo_db');
const error404 = require('./middlewares/error404');
require('dotenv').config()
const app = express();
const port = process.env.BACKEND_LISTEN_PORT;
app.get('/', (req, res) => {
  res.send('¡Todododododododo!');
});

const tasksRouter = require('./routes/tasksRoutes');

const allowedOrigins = [
    `http://localhost:4200`    
  ];
  
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/', tasksRouter);

app.use(error404)

const server = app.listen(port,  () => {
    console.log(`Puerto funcionando en el siguiente enlace:  ${port}`)
})

module.exports = server;