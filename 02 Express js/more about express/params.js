
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


/**Set the request type to GET.
Enter the URL: http://localhost:3000/user/123
Send the request and you should see User ID: 123. */