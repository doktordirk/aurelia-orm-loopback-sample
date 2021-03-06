import { inject } from 'aurelia-framework';
import { EntityManager } from 'aurelia-orm';
import { Router } from 'aurelia-router';

@inject(EntityManager, Router)
export class List {
  heading = 'Customer management';

  customers = [];

  constructor(entityManager, router) {
    this.repository = entityManager.getRepository('users');
    this.router = router;
  }

  gotoCustomer(customer) {
    this.router.navigateToRoute('edit', {id: customer.id});
  }

  new() {
    this.router.navigateToRoute('create');
  }

  activate() {
    return this.repository.find(1)
      .then(user => {
        this.customers = user.customers;
      });
  }
}
