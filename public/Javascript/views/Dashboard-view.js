define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/Dashboard_template.html',
		 'libs/pubSub',
		 "model/DashboardModel"
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	DashboardModel
		 	){
			var DashboardView = Backbone.View.extend({
				el : '.Body',

				tagName : 'div',

				model : new DashboardModel,

				template : _.template(myTemplate),
			
				initialize : function(){
					$('#Body').addClass('Loading'); 
					_.bindAll(this,"remove","render","success","failure");
					var _this = this;

					this.model.fetch({success : _this.success, error : _this.failure});
					PubSub.on('remove:customerView',this.remove);
				},
				
				success : function(model, response, options){
					this.render();
					console.log('DAshboard plan model fetched successfully');
				},

				failure : function(model, response, options){
					console.log('error in fectching rating plan model');
		
				},	
				render: function(){
					var _this = this ;
					var _data = {data : _this.model.toJSON() };
					$('#Body').removeClass('Loading');
					$(this.el).html(this.template(_data));
					return this;
				},

				remove: function() {
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return DashboardView;
});
