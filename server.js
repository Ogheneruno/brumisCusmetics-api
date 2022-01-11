const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 9000;

mongoose.connect(process.env.mongoDB_URL)
    .then(() => console.log('Database up and doing::: '))
    .catch(err => console.log(`Database no gree start, e ge why: ${err.message}`));

server.listen(port, () => console.log(`Server listening on:: ${port}`));