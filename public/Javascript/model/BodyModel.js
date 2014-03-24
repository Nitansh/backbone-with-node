define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		BodyModel = Backbone.Model.extend({
 		
 		url : '/data/body.json'

		});

		return BodyModel;


});