define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone');

    return Backbone.Model.extend({

        defaults: {
            id:"",
            title:"",
            body:"",
            media:"",
            date: ""
        },

        url: '../../server/get-inspirations.php',

        initialize: function() {
            console.log(this.url);
        }
    });

});