const controller = require('./create.controller.js');
const template = require('./create.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('createAssignment', component);