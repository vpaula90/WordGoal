module.exports = function(app){

		var application = require('./routes/application');
		var users = require('./routes/users');
		var trips = require('./routes/trips');
		var data = require('./routes/data');
		

		app.use('/', application);
		app.use('/users', users);
		app.use('/trips', trips);
		app.use('/data', data);

    //other routes..
}