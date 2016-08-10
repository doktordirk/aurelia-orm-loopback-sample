import {inject} from 'aurelia-framework';
import {EntityManager, Repository} from "aurelia-orm";

@inject(EntityManager)
export class Customers {
  heading: String = 'Customers';

  repository: Repository;

  constructor(entityManager: EntityManager) {
    this.repository = entityManager.getRepository('customers');
  }
}
