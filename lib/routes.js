if(Meteor.isClient) {
	Session.setDefault('lazyloadLimit', 4);
	
	var appRoutes = FlowRouter.group({  
		name: '',
			triggersEnter: [checkLoggedIn]
	})

	appRoutes.route('/', {  
	  name: 'home',
	  action: function () {
	    BlazeLayout.render('layout', {template: 'home'})
	  }
	})
	
	
	
}

/*FlowRouter.route('/', {
	name: "home",
	action: function(homeParams, homeQuery) {
		
	}
});

var layoutTemplate = FlowRouter.group({
	prefix: "/"
});

layoutTemplate.route('/', {
	action: function() {}
});

FlowRouter.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	
	onAfterAction: function() {
		var data = Posts.findOne({slug: this.params.slug});
		
		if(_.isObject(data) && !_.isArray(data))
			document.title = 'Finish The Story - ' + data.title;
		else
			document.title = 'Finish The Story - ' + this.route.getName();
	}
});

StoryController = RouteController.extend({
	waitOn: function() {
		return Meteor.subscribe('single-post', this.params.slug);
	},
	
	data: function() {
		return Posts.findOne({slug: this.params.slug});
	}
});

FlowRouter.map(function() {
	
	this.route('Home', {
		path: '/',
		template: 'home',
		subscriptions: function(){
			return Meteor.subscribe("lazyload-posts", Session.get('lazyloadLimit'));
		}
	});
	this.route('About', {
		path: '/about',
		template: 'about'
	});
	this.route('Post', {
		path: '/posts/:slug',
		template: 'post',
		controller: 'StoryController'
	});
	this.route('Edit Post', {
		path: '/edit-post/:slug',
		template: 'editPost',
		controller: 'StoryController'
	});
	this.route('Create Post', {
		path: '/create-post',
		template: 'editPost'
	});
});
*/
var requiresLogin = function(){
	if (!Meteor.user() || !Meteor.user().roles || !Meteor.user().roles.admin) {
		this.render('notFound');
		
	} else {
		this.next();
	}	
};

/*
	FlowRouter.onBeforeAction(requiresLogin, {only: ['Create Post', 'Edit Post']});
*/



