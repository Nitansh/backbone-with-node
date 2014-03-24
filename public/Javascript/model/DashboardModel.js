define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		DashboardModel = Backbone.Model.extend({
 		
 		url : '/data/Dashboard.json'

		});

		return DashboardModel;


});