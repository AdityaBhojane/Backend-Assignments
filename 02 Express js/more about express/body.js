const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res) => {
  const { name, age } = req.body;
  res.send(`User Name: ${name}, Age: ${age}`);
});


/**Using Postman:

Set the request type to POST.
Enter the URL: http://localhost:3000/user
Go to the Body tab, select raw, and choose JSON from the dropdown. */