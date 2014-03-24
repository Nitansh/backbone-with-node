define(
	[
		'backbone',
		'libs/pubSub'
	],
	function
	(
		Backbone,
		PubSub
	){

	"use strict"; 

	var UserAuthorizedRouter = Backbone.Router.extend({
	
		routes : {
			'generalInformation'  : "generalinfo",
			'dashBoard'           : "dashboard"
		},
		

	});


	return UserAuthorizedRouter;
});