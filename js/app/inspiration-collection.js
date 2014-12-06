define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone');

    return Backbone.Collection.extend({
    	url: 'server/get-inspirations.php',
    		
    });

});