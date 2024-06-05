const express = require('express');
require('./dbConnection/db');
const bodyParser = require('body-parser');
const tasks = require('./routes/taskRoutes');
const port = 5000;


const app = express();


// body-Parser Middleware
app.use(bodyParser.json());


// Task Router
app.use('/api/task', tasks);

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})
