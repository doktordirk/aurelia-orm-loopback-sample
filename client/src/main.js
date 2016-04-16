import 'bootstrap';
import 'fetch';  // fetch polyfill

import * as entities from 'aurelia-orm';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('github', 'https://api.github.com/')
        .registerEndpoint('api', 'http://localhost:3000/api/')
        .setDefaultEndpoint('api');
    })
    .plugin('aurelia-animator-css')
    // Register the plugin, and register our entities.
    .plugin('aurelia-orm', builder => {
      builder.registerEntities(entities);
    });

  aurelia.start().then(() => aurelia.setRoot());
}
