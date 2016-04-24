export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia-Orm-Loopback';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'customers',     name: 'customers',    moduleId: 'customers',              nav: true,  title: 'List Customers' },
      { route: 'customer',      name: 'customer',     moduleId: 'modules/customer/index', nav: true, title: 'Manage Customers' }
    ]);

    this.router = router;
  }
}
