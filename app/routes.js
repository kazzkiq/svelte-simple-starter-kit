import roadtrip from 'roadtrip';
import IndexHandler from './pages/index/index.handler';
import UsersHandler from './pages/users/users.handler';
import UserDetailsHandler from './pages/user-details/user-details.handler';

export default class Routes {
  constructor() {
    this.router = roadtrip;
    this.init();
  }

  init() {
    this.index_handler = new IndexHandler();
    this.users_handler = new UsersHandler();
    this.user_details_handler = new UserDetailsHandler();

    this.router
      .add('/', this.index_handler.route)
      .add('/users', this.users_handler.route)
      .add('/users/:id', this.user_details_handler.route)
      .start({
        fallback: '/'
      });
  }
}