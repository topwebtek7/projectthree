const controller = require('./signup.controller.js');
const template = require('./signup.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('signup', component);
