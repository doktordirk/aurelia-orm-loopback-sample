export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia-Api-Loopback';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'customer',      name: 'customer',     moduleId: 'modules/customer/index', nav: true, title: 'Customers' }
    ]);

    this.router = router;
  }
}
