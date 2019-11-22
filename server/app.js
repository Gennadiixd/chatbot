const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const chatRoutes = require('./routes/chat');

const app = express();

app.use(morgan('dev'));
//TODO: set CORS for concrete domains
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/chat', chatRoutes)

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})