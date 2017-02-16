import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngDialog from 'ng-dialog';
import polestarComponent from './polestar.component';
import PolestarFilter from './polestar.filter';
import myService from './polestar.service';

let polestarModule = angular.module('polestar', [
  uiRouter,
  ngDialog
])

.component('polestar', polestarComponent)
.service('polestarService', myService)
.filter({PolestarFilter})

.name;

export default polestarModule;
