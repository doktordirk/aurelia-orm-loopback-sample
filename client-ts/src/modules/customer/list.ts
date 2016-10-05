import { autoinject } from 'aurelia-framework';
import { EntityManager, Repository } from 'aurelia-orm';
import { Router } from 'aurelia-router';
import { Customers } from '../../entities/customers';

@autoinject()
export class List {
  heading: string = 'Customer management';

  customers: Array<Customers> = [];

  entityManager: EntityManager;
  repository: Repository;
  router: Router;

  constructor(entityManager: EntityManager, router: Router) {
    this.repository = entityManager.getRepository('users');
    this.router = router;
  }

  gotoCustomer(customer: any) {
    this.router.navigateToRoute('edit', {id: customer.id});
  }

  new() {
    this.router.navigateToRoute('create');
  }

  activate() {
    return this.repository.find(1)
      .then(user => {
        console.log(user)
        this.customers = user.customers;
      });
  }
}
