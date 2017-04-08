const controller = require('./create.assignment.controller.js');
const template = require('./create.assignment.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('create.assignment', component);