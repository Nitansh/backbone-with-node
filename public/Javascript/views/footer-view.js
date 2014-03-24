define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/footer_template.html',
		 'libs/pubSub',
		 'model/FooterModel'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	FooterModel
		 	){
		 	"use strict";

			var FooterView = Backbone.View.extend({
				el : '.Footer',
				
				template : _.template(myTemplate),

				model : new FooterModel,
				
				initialize : function(){
					_.bindAll(this, "success","error","render");
					var _this = this;
					this.model.fetch({success : _this.success , error : _this.error});
					PubSub.on('render:FooterRender',_this.render);
				},
				
				success : function(collection, response, options){
					console.log("collection data");
					this.render();
				},

				error : function(error){
					console.log('error in fecthing data' +  error);
				},

				render: function(){
					var _data = {data : this.model.toJSON()};
					$(this.el).html(this.template(_data));
				}
				
			});
			return FooterView;
});