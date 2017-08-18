import Users from './users.page';

export default class IndexHandler {
  get route() {
    return {
      enter(current, previous) {
        this.component = new Users({
          target: document.getElementById('app'),
          data: {
            name: 'world'
          }
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