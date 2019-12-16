require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server);

const routes = require('./routes');

require('./database');
require('./service/socket')(io);

app.use(express.json());
app.use(morgan('dev'));
routes.forEach(item => app.use(item.routes()));

server.listen(process.env.PORT, () => console.log(`server online in port ${process.env.PORT}`));
