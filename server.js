const express = require('express');
const app = express();

// @require all mocked json data
const personDataObj = require(`${__dirname}/data/person-data.json`);
const affordabilityDataObj = require(`${__dirname}/data/affordability-data.json`);
const exposureDataObj = require(`${__dirname}/data/exposure-data.json`);

// @route     GET person/
// @desc      Get person by id
// @access    Public
app.get('/person/:id', (req, res) => {
    const req_id = Number(req.params.id);
    const response = personDataObj.find((person) => person.id === req_id);
    if (!response) {
        res.status(404).send('Person with provided id was not found.');
    } else {
        res.json(response);
    }
});

// @route     GET affordability/
// @desc      Get affordability by affordability_id found in route: person/id
// @access    Public
app.get('/affordability/:id', (req, res) => {
    const req_id = Number(req.params.id);
    const response = affordabilityDataObj.find(
        (item) => item.affordability_id === req_id
    );
    res.json(response);
});

// @route     GET exposure/
// @desc      Get exposure by exposure_id, found in route: affordability/id
// @access    Public
app.get('/exposure/:id', (req, res) => {
    const req_id = Number(req.params.id);
    const response = exposureDataObj.find((item) => item.id === req_id);
    res.json(response);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
