const knex = require('knex')({
	client: 'mysql',
	connection: {
		host : '127.0.0.1',
		user : 'root',
		password : '8183',
		database : 'events-api'
	}
});

module.exports = knex;