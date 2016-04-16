import { inject } from 'aurelia-framework';
import { Endpoint} from 'aurelia-api';

@inject(Endpoint.of())  // the default endpoint
export class CustomerData {

  model = 'customers';

  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
  }

  get modelPath() {
    return `${this.model}`;
  }

  getById(id) {
    return this.apiEndpoint.find(this.modelPath, id);
  }

  getAll() {
    return this.apiEndpoint.find(this.modelPath);
  }

  delete(customer) {
    return this.apiEndpoint.destroy(this.modelPath, customer.id);
  }

  save(customer) {
    let request;

    if (customer.id) {
      request = this.apiEndpoint.update(this.modelPath, customer.id, customer);
    } else {
      request = this.apiEndpoint.create(this.modelPath, customer);
    }

    return request;
  }
}
