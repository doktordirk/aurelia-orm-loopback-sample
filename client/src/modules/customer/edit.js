import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EntityManager } from 'aurelia-orm';
import { Customer } from 'entities/customer';

@inject(EntityManager, Router)
export class Edit {
  constructor(entityManager, router) {
    this.repository = entityManager.getRepository('customers');
    this.customer = entityManager.getEntity('customer');
    this.router = router;
  }

  cancel() {
    return this.customer.setData(this.original);
  }

  goBack() {
    window.history.back();
  }

  activate(params) {
    if (params.id) {
      return this.repository.find(params.id)
        .then(customer => {
          this.customer = customer;
          this.original = customer.asObject();
        });
    }
  }

  delete() {
    this.customer.destroy()
      .then( () => this.router.navigate('list'));
  }

  get isUnchanged() {
    return this.customer.isClean();
  }

  save() {
    this.customer.save()
      .then(() => this.router.navigate('list'));
  }
}
