define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		HeaderModel = Backbone.Model.extend({
 		
 		url : '/data/header.json'

		});
		return HeaderModel;
});