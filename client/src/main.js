import 'bootstrap';
import 'fetch';  // fetch polyfill

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
    .plugin('aurelia-orm', ()=>{});

  aurelia.start().then(() => aurelia.setRoot());
}
