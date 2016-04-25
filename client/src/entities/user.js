import {Entity, resource, endpoint, type,} from 'aurelia-orm';

@resource('users')
@endpoint('api')
export class User extends Entity {

  @type('string')
  displayName = '';

  @type('string')
  email = '';

  @type('string')
  password = 'none';
}
