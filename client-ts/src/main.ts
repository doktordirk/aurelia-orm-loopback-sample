import 'bootstrap';
import 'fetch';  // fetch polyfill
import {Aurelia} from 'aurelia-framework';
import {Customers} from './entities/customers';
import {User} from './entities/user';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation')
    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('github', 'https://api.github.com/')
        .registerEndpoint('api', 'http://localhost:3000/api/')
        .setDefaultEndpoint('github');
    })
    .plugin('aurelia-orm', config => {
      config.registerEntity(Customers)
      config.registerEntity(User);
    });

  aurelia.start().then(() => aurelia.setRoot());
}
