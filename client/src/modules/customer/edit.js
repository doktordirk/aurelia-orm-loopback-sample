import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {EntityManager} from 'aurelia-orm';

@inject(EntityManager, Router)
export class Edit {

  constructor(entityManager, router) {
    this.repository    = entityManager.getRepository('customers');
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
    this.customer = this.repository.entityManager.getEntity('customers');
    this.original = this.customer;
  }

  delete() {
    this.customer.destroy()
      .then( () => {
        this.router.navigate('list');
      });
  }

  get isUnchanged() {
    return this.customer.isClean();
  }

  save() {
    this.customer.save()
      .then(() => {
        this.router.navigate('list');
      });
  }
}
