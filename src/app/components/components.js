import angular from 'angular';
import Home from './home/home';
import polestar from './polestar/polestar';

let componentModule = angular.module('app.components', [
  Home,
  polestar
])

.name;

export default componentModule;


