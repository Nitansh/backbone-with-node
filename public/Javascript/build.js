({
    baseUrl: "../Javascript",
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
		    },
    name: "main",
    out: "main-built.js"
})