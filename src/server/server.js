const path = require('path');
const express = require("express");
const app = express();

const fs = require('fs');
const { json } = require('express');

const PORT = process.env.PORT || 3001;


app.use(express.static(path.resolve(__dirname, '../../build')));

app.use(express.urlencoded());

app.use(express.json());

app.get("/api/test", (req, res) => {

  const test = {
    "hello" : "hej hej"
  }

  fs.writeFile('./myFile.json', JSON.stringify(test), (err) => {
    if (err) console.log('Error:', err);
  })


  res.json({ message : "Data saved" })
})

app.post("/api/add",(req,res) => {
  console.log(req.body);
  
   fs.writeFile('./myFile.json', JSON.stringify(req.body), (err) => {
      if (err) console.log('Error:', err);
    })

  res.json({ message : "Data saved" });
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});