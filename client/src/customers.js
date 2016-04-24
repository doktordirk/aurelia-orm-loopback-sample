import {inject} from 'aurelia-framework';
import {Endpoint} from 'aurelia-api';

@inject(Endpoint.of('api'))
export class Customers {
  heading = 'Customers';
  customers = [];

  constructor(rest) {
    this.publicApi = rest;
  }

  activate() {
    return this.publicApi.find('customers',{filter: '{"include": "user"}'})
      .then(customers => this.customers = customers);
  }
}
