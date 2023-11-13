const express = require('express');
let cors = require("cors");
require('./utils/mongo_db');
const error404 = require('./middlewares/error404');

const app = express();
const port = 3000;
const IP = '10.191.0.82'
app.get('/', (req, res) => {
  res.send('¡Todododododododo!');
});

const tasksRouter = require('./routes/tasksRoutes');

const allowedOrigins = [
    `http://${IP}:4200`
  ];
  
  app.use(
    cors({
      origin: allowedOrigins,
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/', tasksRouter);

app.use(error404)

const server = app.listen(port, IP, () => {
    console.log(`Puerto funcionando en el siguiente enlace: ${IP}:${port}`)
})

module.exports = server;