define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone');

    return Backbone.Collection.extend({
    	url: '../../server/get-inspirations.pp',

    	initialize: function() {
    		that = this;
			this.fetch({
      			success: function(model, data){
        			that.set();
        			that.set();
				}
			});
		},
    });

});