import {Entity, resource, endpoint, type} from 'aurelia-orm';

@resource('customers')
@endpoint('api')
export class Customers extends Entity {

  firstName: string = '';
  lastName: string = '';

  @type('number')
  id: string;
}
