define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		CustomerModel = Backbone.Model.extend({
 
			url : '/data/general-information.json'

		});

		return CustomerModel;


});