define([
		'backbone',
		'jquery',
		'underscore'], 
		function(
		Backbone,
		$,
		_
		){
	
		var pubSub = _.extend({}, Backbone.Events);

		return pubSub;
})