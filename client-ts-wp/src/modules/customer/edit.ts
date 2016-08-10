import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EntityManager, Repository } from 'aurelia-orm';
import { User } from '../../entities/user';
import { Customers } from '../../entities/customers';

const USER_ID: string = 'a146aed0-5ee3-11e6-94bc-c1329b3ad075';  // fix user for simplicity

@autoinject()
export class Edit {
  entityManager: EntityManager;
  userRepository: Repository;
  repository: Repository;
  router: Router;

  customer: Customers;
  original: Object;

  constructor(entityManager: EntityManager, router: Router) {
    this.entityManager = entityManager;
    this.userRepository = entityManager.getRepository('users');
    this.repository = entityManager.getRepository('customers');
    this.customer = this.repository.getNewEntity();
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
