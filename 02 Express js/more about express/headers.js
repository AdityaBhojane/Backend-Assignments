const express = require('express');
const app = express();


app.get('/header', (req, res) => {
    const customHeader = req.headers['custom-header'];
    res.send(`Custom Header: ${customHeader}`);
  });

  
/**Using Postman:

Set the request type to GET.
Enter the URL: http://localhost:3000/header
Go to the Headers tab and add a new key-value pair:
Key: custom-header
Value: myHeaderValue
Send the request and you should see Custom Header: myHeaderValue. */