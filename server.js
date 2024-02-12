// Install express server 
const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
console.log(__dirname)
app.use(express.static(__dirname + '/dist/kaizntree_front_end'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/kaizntree_front_end/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);