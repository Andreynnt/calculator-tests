const express = require('express');
const app = express();
const port = 3000;

// app.get('/styles.css', (req, res) => {
//     res.sendFile( __dirname + "/public/" + "styles.css" );
// });
//
// app.get('/script.js', (req, res) => {
//     res.sendFile( __dirname + "/public/" + "script.js" );
// });

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/public/" + "index.html" );
});

app.get('/test', (req, res) => {
    res.sendFile( __dirname + "/test/" + "test.html" );
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + req.url);
});

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
});