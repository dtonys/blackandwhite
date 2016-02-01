/*** CSS ***/
// common
require('base/reset.scss');
require('base/default.scss');
require('components/forms.scss');
require('components/components.scss');
require('layout/layout.scss');
// page specific
require('pages/components.scss');

/*** JS ***/
// common
var FastClick = require('fastclick');
var _ = require('lodash');
var $ = require('jquery');
var templates = require('templates');

$(document).ready(function(e){
  console.log('components.js loaded: document ready');
  FastClick.attach(document.body);
});

