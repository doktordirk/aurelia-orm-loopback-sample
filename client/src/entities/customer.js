import {Entity, resource, endpoint, type,} from 'aurelia-orm';

@resource('customers')
@endpoint('api')
export class Customer extends Entity {

  @type('string')
  firstName = '';

  @type('string')
  lastName = '';
}
