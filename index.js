const express = require('express'),
          app = express(),
     template = require('./dist/template')
         path = require('path');


// Serving static files
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));
// start the server
app.listen(process.env.PORT || 3000);

// our apps data model
const data = require('./assets/data.json');

let initialState = {
  isFetching: false,
  apps: data
}

//SSR function import
const handleResponse = require('./dist/server');

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = handleResponse(initialState)
  const response = template("Server Side Rendering React", preloadedState, content)
  res.send(response);
});

