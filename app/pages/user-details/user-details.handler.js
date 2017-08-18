import UserDetails from './user-details.page';

export default class UserDetailsHandler {
  get route() {
    return {
      enter(current, previous) {
        this.component = new UserDetails({
          target: document.getElementById('app'),
          data: {
            id: current.params.id
          }
        })
        console.log('Entered user details!');
      },
      leave(current, previous) {
        this.component.destroy();
        console.log('Left user details!');
      }
    }
  }
}