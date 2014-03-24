define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/customer_template.html',
		 'libs/pubSub',
		 "model/RatingPlanModel"
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	RatingPlanModel
		 	){
			var CustomerView = Backbone.View.extend({
				el : '.Body',

				model : new RatingPlanModel,

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
					console.log('rating plan model fetched successfully');
				},

				failure : function(model, response, options){
					console.log('error in fectching rating plan model');
		
				},	
				render: function(){
					var _this = this ;
					var _data = {data : _this.model.toJSON() };
					$('#Body').removeClass('Loading');
					$(this.el).html(this.template(_data));
				},

				remove: function() {
   					this.$el.empty();
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return CustomerView;
});
