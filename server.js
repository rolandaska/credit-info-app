const express = require("express");
const fs = require("fs");

const app = express();

const personData = fs.readFileSync(
  `${__dirname}/data/person-data.json`,
  "utf-8"
);
const personDataObj = JSON.parse(personData);

const affordabilityData = fs.readFileSync(
  `${__dirname}/data/affordability-data.json`,
  "utf-8"
);
const affordabilityDataObj = JSON.parse(affordabilityData);

const exposureData = fs.readFileSync(
  `${__dirname}/data/exposure-data.json`,
  "utf-8"
);
const exposureDataObj = JSON.parse(exposureData);

app.get("/person/:id", (req, res) => {
  const req_id = Number(req.params.id);
  res.writeHead(200, { "Content-Type": "application/json" });
  const response = JSON.stringify(
    personDataObj.find((person) => person.id === req_id)
  );
  res.end(response);
});

app.get("/affordability/:id", (req, res) => {
  const req_id = Number(req.params.id);
  res.writeHead(200, { "Content-Type": "application/json" });
  const response = JSON.stringify(
    affordabilityDataObj.find((item) => item.affordability_id === req_id)
  );
  res.end(response);
});

app.get("/exposure/:id", (req, res) => {
  const req_id = Number(req.params.id);
  res.writeHead(200, { "Content-Type": "application/json" });
  const response = JSON.stringify(
    exposureDataObj.find((item) => item.id === req_id)
  );
  res.end(response);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
