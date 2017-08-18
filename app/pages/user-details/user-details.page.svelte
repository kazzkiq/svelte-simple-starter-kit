<h1>User #{{id}}</h1>

<button on:click="goto('/users')">Back to Users</button>

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