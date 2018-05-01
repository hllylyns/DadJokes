const express = require('express');
const bodyParser = require('body-parser');
const jc = require('./controllers/jokes_controller.js');


const app = express();

app.use( bodyParser.json() );
//app.use( express.static(__dirname + '/../jokes/edit'));////what do i connect this to??????

const dadjokesBaseUrl = "/api/jokes";
app.post( dadjokesBaseUrl, jc.create );
app.get( dadjokesBaseUrl, jc.read );
app.put( `${dadjokesBaseUrl}/:id`, jc.update );
app.delete( dadjokesBaseUrl, jc.delete );


const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

