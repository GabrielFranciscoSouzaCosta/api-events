const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const event = require('events.js');

app.use(bodyParser.json());

//configuration of query builder knex
var knex = require('knex')({
	client: 'mysql',
	connection: {
		host : '127.0.0.1',
		user : 'root',
		password : '8183',
		database : 'events-api'
	}
});

// show all events route
app.get('/event/index', (request, response) => {
	event.log('this is my message');
	knex('event').then( (dados) => {
		response.send(dados);
	})
});

//create event route
app.post('/event/create', (request, response) => {
	knex('event').insert(request.body).then( (dados) => {
		response.json({msg: "event created successfully"});
	})
});

// shows one specific event
app.get('/event/find/:id', (request, response) => {
	const {id} = request.params;
	knex('event').where('id', id).first().then( (dados) => {
		if(!dados)
		{
			response.status(400);
			return response.json({msg: "there is no data to return"});
		}
		response.json(dados);
	})
});

// update one specific event
app.put('/event/update/:id', (request, response) => {
	const {id} = request.params;
	knex('event').where('id', id).update(request.body).then( (dados) => {
		if(!dados)
		{
			return response.json({msg: "there is no data to return"});
		}
		response.json({msg:"updated data"});
	})
});

// update one specific event
app.delete('/event/delete/:id', (request, response) => {
	const {id} = request.params;
	knex('event').delete('id', id).then( (dados) => {
		if(!dados)
		{
			response.status(400);
			return response.json({msg: "there is no data to return"});
		}
		response.json({msg:"event deleted successfully"});
	})
});

app.listen(3333);