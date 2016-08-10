import {Entity, resource, endpoint, type, association, idProperty} from 'aurelia-orm';
import {Customers} from './customers';

@resource('users')
@endpoint('api')
//@idProperty('uid')
export class User extends Entity {

  id: string;

  displayName: string = '';
  email: string = '';
  password: string = 'none';

  @association({collection: 'customers'})
  customers: Array<Customers> = null
}
