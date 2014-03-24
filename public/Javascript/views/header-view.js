define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/templates/header_template.html',
		 'libs/pubSub',
		 'model/LoginHeaderModel'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	LoginHeaderModel
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.Header',

				template : _.template(myTemplate),

				model    : new LoginHeaderModel,
				events:{
					'click li#RTL':'RTL_conversion',
					'click li#LTR' : 'LTR_conversion',
					'click li#English':'EnglishLocale',
					'click li#French' : 'FrenchLocale',
					'click .dropDownCollapse' :  'collapseNavbar'
				},

				collapseNavbar : function (){
	    			var mode = this.findBootstrapEnvironment();
	       			if (mode == 'xs'){
	            		$('.navbar-toggle').click();
	        		}
	    		},
	    		findBootstrapEnvironment : function () {
				    var envs = ['xs', 'sm', 'md', 'lg'];

				    $el = $('<div>');
				    $el.appendTo($('body'));

				    for (var i = envs.length - 1; i >= 0; i--) {
				        var env = envs[i];

				        $el.addClass('hidden-'+env);
				        if ($el.is(':hidden')) {
				            $el.remove();
				            return env
				        }
				 };
				},
				EnglishLocale: function () {
				   var _this = this;
				   $.getJSON('/locales/' + 'en' + '.json', function (data) {
				      window.polyglot = new Polyglot({
				         phrases: data
				      });
				   }).done(function () {
				      _this.render();
				      PubSub.trigger('render:ActiveView', 'Active View is reRendered');
				      PubSub.trigger('render:FooterRender', 'Footer Viewe is reRendered');
				   });

				},

				FrenchLocale: function () {
				   var _this = this;
				   $.getJSON('/locales/' + 'de' + '.json', function (data) {
				      window.polyglot = new Polyglot({
				         phrases: data
				      });
				   }).done(function () {
				      _this.render();
				      PubSub.trigger('render:ActiveView', 'Active View is reRendered');
				      PubSub.trigger('render:FooterRender', 'Footer Viewe is reRendered');
				   });

				},

				RTL_conversion:function() {
					var bootstrap_link =$("#bootstrap"); 
					bootstrap_link.attr({href : "/css/bootstrap.rtl.css"});
				},
				LTR_conversion:function() {
					var bootstrap_link =$("#bootstrap");
					bootstrap_link.attr({href : "/css/bootstrap.min.css"});
				},

				initialize : function(){
					var _this = this;
					_.bindAll(this,"remove","success","render","error");
					this.model.fetch({success : _this.success , error : _this.error });
					
					PubSub.on('remove:headerView',this.remove);
				},

				success : function(model, response, options){
					this.render();
					console.log('model fetched succcesfully');
				},

				error : function(model, response, options){
					console.log('error occured in fetching the header model' + response.responseText);
				},

				render: function(){
					var _data = {data : this.model.toJSON()}
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
			return HeaderView;
});