/*
 * This represents a server that provides JSON data when asked.
 *
 * @author Dennis Quan
 * @author Robert Duvall
 */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const LoadoutsData = require('./LoadoutsData.js');
const PORT = process.env.PORT || 3000;

// make a generic server
const app = express();
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

// log all requests made to the server
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// allow connections from anywhere
app.use(cors());


// set up URL responses:
// provide some response to visiting the server directly (i.e., its homepage)
app.get('/',
    (req, res) => {
        res.send(`<a href="api/getData">Get the Data!</a>`);
    });

// return the JSON data that used to be fetched directly from the frontend
app.get('/api/getData',
    (req, res) => {
        res.status(200);
        res.json(LoadoutsData.data);
    });

    //hello