const express = require('express');
const app = express();

//parse application/json

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(3000, () => {
    console.log(`Server started on port`);
});

 