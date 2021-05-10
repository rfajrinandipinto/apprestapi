const express = require('express');
var morgan = require('morgan'); 
const app = express();

//parse application/json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev'));

//panggil routes
var routes = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});

 