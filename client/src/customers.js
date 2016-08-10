import {inject} from 'aurelia-framework';
import {EntityManager} from "aurelia-orm";

@inject(EntityManager)
export class Customers {
  heading = 'Customers';

  constructor(entityManager) {
    this.repository = entityManager.getRepository('customers');
  }
}
