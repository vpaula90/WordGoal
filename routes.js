module.exports = function(app){

		var application = require('./routes/application');//login page
		var data = require('./routes/data');//dashboard
		var users = require('./routes/users');//handles login functions
		var inputData = require('./routes/inputData');//input data
		var rankings = require('./routes/rankings');//rankings
		var showData = require('./routes/showData');//show data
		
		

		app.use('/', application);
		app.use('/data', data);
		app.use('/users', users);
		app.use('/inputData', inputData);
		app.use('/rankings', rankings);
		app.use('/showData', showData);
		

    //other routes..
}