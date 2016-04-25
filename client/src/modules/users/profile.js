import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EntityManager } from 'aurelia-orm';
import { User } from 'entities/user';

@inject(EntityManager, Router)
export class Profile {
  heading = 'Profile';

  constructor(entityManager, router) {
    this.repository = entityManager.getRepository('users');
    this.profile = this.repository.getNewEntity(User);
    this.router = router;
  }

  activate() {
    return this.repository.find(1)
      .then(user => {
        this.profile = user;
      });
  }

  update() {
    this.profile.save();
  }
  
  get isUnchanged() {
    return this.profile.isClean();
  }
}
