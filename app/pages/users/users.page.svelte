<h1>Users</h1>

<button on:click="goto('/')">Back to Index</button>

<ul>
  {{#each users as user}}
    <li on:click="goto(`users/${user.id}`)">User #{{user.id}}</li>
  {{/each}}
</ul>

<script>
  import roadtrip from 'roadtrip';

  export default {
    data() {
      return {
        users: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5}
        ]
      }
    },
    methods: {
      goto(path) {
        roadtrip.goto(path);
      }
    }
  }
</script>

<style>
  ul {
    padding: 0;
  }

  ul li {
    text-decoration: underline;
    text-align: center;
    list-style: none;
    color: FireBrick;
  }
</style>