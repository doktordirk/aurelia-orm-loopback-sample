import {Entity, validatedResource, endpoint, type} from 'aurelia-orm';
import { ValidationRules } from "aurelia-validation";

@validatedResource('customers')
@endpoint('api')
export class Customers extends Entity {

  firstName: string = '';
  lastName: string = '';

  @type('number')
  id: number;

  constructor() {
    super();

    ValidationRules
      .ensure('firstName').required()
      .ensure('lastName').required()
      .on(this);
  }
}
