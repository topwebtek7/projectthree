const controller = require('./show.controller.js');
const template = require('./show.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('gradeBook')
  .component('show', component);
