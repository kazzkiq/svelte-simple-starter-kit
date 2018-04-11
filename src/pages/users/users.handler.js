import Users from './users.html';

export default class IndexHandler {
  get route() {
    return {
      enter(current, previous) {
        this.component = new Users({
          target: document.getElementById('app')
        })
        console.log('Entered users!');
      },
      leave(current, previous) {
        this.component.destroy();
        console.log('Left users!');
      }
    }
  }
}