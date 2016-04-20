var Promise = require('bluebird'); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import 'isomorphic-fetch';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('github', 'https://api.github.com/')
        .registerEndpoint('api', 'http://localhost:3000/api/')
        .setDefaultEndpoint('api');
    });

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
