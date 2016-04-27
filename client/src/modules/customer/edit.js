import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EntityManager } from 'aurelia-orm';
import { Customers } from 'entities/customers';

const USER_ID = 1;  // fix user for simplicity

@inject(EntityManager, Router)
export class Edit {
  constructor(entityManager, router) {
    this.userRepository = entityManager.getRepository('users');
    this.repository = entityManager.getRepository('customers');
    this.customer = this.repository.getNewEntity(Customers);
    this.router = router;
  }

  cancel() {
    return this.customer.setData(this.original);
  }

  goBack() {
    window.history.back();
  }

  activate(params) {
    return this.userRepository.find(USER_ID)
      .then(user => {
        if (params.id) {
          this.customer = user.customers.filter( customer => customer.id == params.id)[0];
        } else {
          this.customer.setData({firstName: '', lastName: '', userId: USER_ID});
        }
        this.original = this.customer.asObject();
        this.customer.markClean();
      });
  }

  delete() {
    this.customer.destroy()
      .then( () => this.router.navigate('list'));
  }

  get isUnchanged() {
    return this.customer.isClean();
  }

  get isInvalid() {
    return !this.customer.firstName || !this.customer.lastName;
  }

  get isNew() {
    return this.customer.isNew();
  }

  save() {
    this.customer.save()
      .then(() => this.router.navigate('list'));
  }
}
