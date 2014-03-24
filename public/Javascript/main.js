require.config({
		    baseUrl: "/Javascript",
		    paths: {
		        "jquery"     : "libs/jquery",
		        "backbone"   : "libs/backbone",
		        "underscore" : "libs/underscore",
		        "bootstrap"  : "libs/bootstrap",
		        "pubSub"	 : "libs/pubSub",
		        "polyglot"   : "libs/polyglot",
		        "flip"	     : "libs/flip"
 		    },
		    shim: {
		        'backbone': {
		            deps: ['underscore', 'jquery'],
		            exports: 'Backbone'
		        },
		        'underscore': {
		            exports: '_'
		     	},
		     	bootstrap:
		     	{
		     		deps: ['jquery'],
		     		exports : 'Bootstrap'
		     	},
		     	'polyglot':
		     	{
		     		exports: 'Polyglot'
		     	},
		     	'flip' : {
		     		deps : ['jquery'],
		     		exports : 'Flip'
		     	}
		    }
		});


require(
	[
	'apps/BaseApp',
	'bootstrap',
	'polyglot',
	'jquery'
	],
	function(
		BaseApp,
		Bootstrap,
		Polyglot,
		$
		){		
		"use strict";

		loadCss('/css/bootstrap.min.css', 'bootstrap');	
		loadCss('/css/responsive/responsive.css', 'responsive');


		var _locale="en";
		if(navigator.language==="en-US"){
			_locale = 'en';
		}
		else if(navigator.language==="de"){
			_locale= 'de';
		}
  			
  		
  		$.getJSON('/locales/' + _locale + '.json', function(data) {
  			window.polyglot = new Polyglot({phrases: data});
  		}).done(function(){
  			var baseApp = new BaseApp();	
			Backbone.history.start();
			return baseApp;
		});	
  	});


function loadCss(url, id) {
    		var link = document.createElement("link");
    		link.type = "text/css";
    		link.rel = "stylesheet";
    		link.href = url;
    		link.id   = id;
    		document.getElementsByTagName("head")[0].appendChild(link);
		};