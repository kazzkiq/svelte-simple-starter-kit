<h1>Hello, {{name}}!</h1>

<button on:click="goto('users')">Goto Users</button>

<script>
  import roadtrip from 'roadtrip';

  export default {
    methods: {
      goto(path) {
        roadtrip.goto(path);
      }
    }
  }
</script>