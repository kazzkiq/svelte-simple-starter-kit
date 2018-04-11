import Index from './index.html';

export default class IndexHandler {
  get route() {
    return {
      enter(current, previous) {
        this.component = new Index({
          target: document.getElementById('app'),
          data: {
            name: 'world'
          }
        })
        console.log('Entered index!');
      },
      leave(current, previous) {
        this.component.destroy();
        console.log('Left index!');
      }
    }
  }
}