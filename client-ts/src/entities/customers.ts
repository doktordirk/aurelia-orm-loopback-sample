import {Entity, resource, endpoint, type, idProperty} from 'aurelia-orm';

@resource('customers')
@endpoint('api')
//@idProperty('cid')
export class Customers extends Entity {

  firstName: string = '';
  lastName: string = '';

  id: string;
}
