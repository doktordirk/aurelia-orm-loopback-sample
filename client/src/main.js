import 'bootstrap';
import 'fetch';  // fetch polyfill

import {Customers} from './entities/customers';
import {User} from './entities/user';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('github', 'https://api.github.com/')
        .registerEndpoint('api', 'http://localhost:3000/api/')
        .setDefaultEndpoint('github');
    })
    .plugin('aurelia-orm', config => {
      config.registerEntity(Customers)
            .registerEntity(User);
    });

  aurelia.start().then(() => aurelia.setRoot());
}
