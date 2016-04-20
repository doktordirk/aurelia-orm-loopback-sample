import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EntityManager } from 'aurelia-orm';

@autoinject()
export class Edit {
  entityManager;
  repository
  router;

  customer;
  original;

  constructor(entityManager: EntityManager, router: Router) {
    this.entityManager = entityManager;
    this.repository = entityManager.getRepository('customers');
    this.customer = entityManager.getEntity('customers');
    this.original = this.customer.asObject();
    this.router = router;
  }

  cancel() {
    if (JSON.stringify(this.original) === '{}') {
      this.customer = this.entityManager.getEntity('customers');
      return this.customer;
    }

    return this.customer.setData(this.original);
  }

  goBack() {
    window.history.back();
  }

  activate(params: any) {
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
      .then(() => this.router.navigate('list'));
  }

  get isUnchanged() {
    return this.customer.isClean();
  }

  save() {
    this.customer.save()
      .then(() => this.router.navigate('list'));
  }
}
