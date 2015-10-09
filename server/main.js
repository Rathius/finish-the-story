Meteor.startup(function(){

	console.log('Server started');


	// #Users and Permissions -> -> Creating the admin user
	if(Meteor.users.find().count() === 0) {

		console.log('Created Admin user');

		var userId = Accounts.createUser({
			username: 'rathius',
			email: 'rathius@icloud.com',
			password: 'tfz2xl9RMB',
			profile: {
				name: 'Gary L. Glasscock'
			}
		});
		Meteor.users.update(userId, {$set: {
			roles: {admin: true},
		}})
	}
});