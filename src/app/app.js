import angular from 'angular';
import uiRouter from 'angular-ui-router';
/*
* commonModule from common.js
*   * importing Navbar.js
*/ 
import Common from './common/common';
/*
* componentModule from componentModule.js
*   * importing Home.js
*   * importing polestar.js
*/ 
import Components from './components/components';
/*
* app.component.js on App directroy
*/
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider, $httpProvider) => {
    "ngInject";
    // delete $httpProvider.defaults.headers.post['Content-Type'];
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
