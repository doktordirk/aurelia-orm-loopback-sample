import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EntityManager, Repository } from 'aurelia-orm';
import { User } from '../../entities/user';

@autoinject()
export class Profile {
  heading: string = 'Profile';
  repository: Repository;
  profile: User;
  router: Router;

  constructor(entityManager: EntityManager, router: Router) {
    this.repository = entityManager.getRepository('users');
    this.profile = this.repository.getNewEntity();
    this.router = router;
  }

  activate() {
    return this.repository.find('a146aed0-5ee3-11e6-94bc-c1329b3ad075')
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
