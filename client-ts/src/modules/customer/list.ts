import { autoinject } from 'aurelia-framework';
import { EntityManager } from 'aurelia-orm';
import { Router } from 'aurelia-router';

@autoinject()
export class List {
  heading = 'Customer management';

  customerList = [];

  entityManager;
  repository;
  router;

  constructor(entityManager: EntityManager, router: Router) {
    this.entityManager = entityManager;
    this.repository  = entityManager.getRepository('customers');
    this.router = router;
  }

  gotoCustomer(customer: any) {
    this.router.navigateToRoute('edit', {id: customer.id});
  }

  new() {
    this.router.navigateToRoute('create');
  }

  activate() {
    return this.repository.find()
      .then(customerList => this.customerList = customerList);
  }
}
