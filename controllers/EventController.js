const knex = require('../database/connection');

module.exports = {

	index (request, response){
		knex('event').then( (dados) => {
			response.send(dados);
		})
	},

	create (request, response){
		knex('event').insert(request.body).then( (dados) => {
			response.json({msg: "event created successfully"});
		})
	},

	find (request, response) {
		const {id} = request.params;
		knex('event').where('id', id).first().then( (dados) => {
			if(!dados)
			{
				response.status(400);
				return response.json({msg: "there is no data to return"});
			}
			response.json(dados);
		})
	},

	update (request, response) {
		const {id} = request.params;
		knex('event').where('id', id).update(request.body).then( (dados) => {
			if(!dados)
			{
				return response.json({msg: "there is no data to return"});
			}
			response.json({msg:"updated data"});
		})
	},

	delete (request, response) {
		const {id} = request.params;
		knex('event').delete('id', id).then( (dados) => {
			if(!dados)
			{
				response.status(400);
				return response.json({msg: "there is no data to return"});
			}
			response.json({msg:"event deleted successfully"});
		})
	}
};