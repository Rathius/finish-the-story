Posts = new Mongo.Collection('posts');

if(Meteor.isServer) {
	
	// Allow rules
	
	Posts.allow({
		insert: function (userId, doc) {
			// The user must be logged in, and the document must be owned by the user
			return userId && doc.owner === userId && Meteor.user().roles.admin;
		},
		
		update: function (userId, doc, fields, modifier) {
			// User must be an admin
			return Meteor.user().roles.admin;
		},
		
		// make sure we only get this field from the documents
		fetch: ['owner']
	});
	
	// Deny rules
	
	Posts.deny ({
		update: function (userId, docs, fields, modifier) {
			// Can't change owners, timeCreated and slug
			return _.contains(fields, 'owner') || _.contains(fields, 'timeCreated') || _.contains(fields, 'slug');
		}
	});
}