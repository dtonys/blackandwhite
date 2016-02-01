/*** CSS ***/
// common
require('base/reset.scss');
require('base/default.scss');
require('components/forms.scss');
require('components/components.scss');
require('layout/layout.scss');
// page specific
require('pages/main.scss');

/*** JS ***/
// common
var FastClick = require('fastclick');
var _ = require('lodash');
var $ = require('jquery');
var util = require('FE_util');
var templates = require('templates');

util.frontend();

// page specific
var MainPage = require('MainPage');

$(document).ready(function(e){
  console.log('main.js loaded: document ready');
  FastClick.attach(document.body);

  var mainPage = new MainPage({
    $container: $('#main'),
    parent: this
  });
  mainPage.initialize();

});

