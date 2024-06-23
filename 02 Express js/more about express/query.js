const express = require('express');
const app = express();


app.get('/search', (req, res) => {
    const term = req.query.term;
    res.send(`Search Term: ${term}`);
  });
  

/**Using Postman:

Set the request type to GET.
Enter the URL: http://localhost:3000/search?term=express
Send the request and you should see Search Term: express. */