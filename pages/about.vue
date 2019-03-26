<template>
  <div>
    Shoutouts to
    <a
      href="https://github.com/mikeskyy"
      target="_blank">
      Mikesky
    </a>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'About',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Shoutouts to the community for making this possible!',
          },
        ],
      };
    },
  };
</script>

<style>

</style>
