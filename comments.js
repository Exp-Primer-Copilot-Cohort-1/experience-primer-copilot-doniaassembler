// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a route for the path /
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
// Start the web server on port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
// Create a route for the path /comments
app.get('/comments', (req, res) => {
    res.send('Comments page');
    }
);
