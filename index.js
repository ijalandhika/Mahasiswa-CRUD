const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

const port = 3111;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));