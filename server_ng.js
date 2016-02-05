'use strict';

var express = require('express');

var app = express();
 
// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));
 
app.listen(app.get('port'), function () {
   console.log('myApp server listening on port ' + app.get('port'));
});