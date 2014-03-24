define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		FooterModel = Backbone.Model.extend({
 		
 		url : '/data/footer.json'

		});

		return FooterModel;


});