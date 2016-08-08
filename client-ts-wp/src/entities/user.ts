import {Entity, resource, endpoint, type, association} from 'aurelia-orm';
import {Customers} from './customers';

@resource('users')
@endpoint('api')
export class User extends Entity {

  displayName: string = '';
  email: string = '';
  password: string = 'none';

  @association({collection: 'customers'})
  customers: Array<Customers> = null
}
