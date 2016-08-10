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
    return this.repository.find('a146aed0-5ee3-11e6-94bc-c1329b3ad075')
      .then(user => {
        this.customers = user.customers;
      });
  }
}
