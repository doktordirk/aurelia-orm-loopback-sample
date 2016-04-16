import 'bootstrap';
import 'fetch';  // fetch polyfill

import * as entities from 'entities';

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
    .plugin('aurelia-orm', builder => {
      builder.registerEntity(entities);
    });

  aurelia.start().then(() => aurelia.setRoot());
}
