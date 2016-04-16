import { inject } from 'aurelia-framework';
import {EntityManager} from 'aurelia-orm';

@inject(EntityManager)
export class CustomerData {

  model = 'customers';

  constructor(entityManager) {
    this.customersRepository = entityManager.getRepository(this.model);
  }

  get modelPath() {
    return `${this.model}`;
  }

  getById(id) {
    return this.customersRepository.find(id);
  }

  getAll() {
    return this.customersRepository.find();
  }
}
