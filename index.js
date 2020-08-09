const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const EventController = require('./controllers/EventController');

app.use(bodyParser.json());

app.get('/event/index', EventController.index);
app.post('/event/create', EventController.create);
app.get('/event/find/:id', EventController.find);
app.put('/event/update/:id', EventController.update);
app.delete('/event/delete/:id', EventController.delete);

app.listen(3333);


// https://www.youtube.com/watch?v=Hel9igamKF0
