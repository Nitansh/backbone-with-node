define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		RatingPlanModel = Backbone.Model.extend({
 		
 		url : '/data/Rating_Plan.json'

		});

		return RatingPlanModel;


});