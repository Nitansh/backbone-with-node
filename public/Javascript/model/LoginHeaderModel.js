define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		LoginHeaderModel = Backbone.Model.extend({
 		
 		url : '/data/header.json'

		});

		return LoginHeaderModel;


});