<template>
  <div class="container">
    <img
      src="~/assets/Forest_Minish.png"
      alt="Picture of a Forest Minish from Minish Cap" />
    <section class="sub-container">
      Join our
      <a
        href="https://discord.gg/ndFuWbV"
        target="_blank">
        discord server
      </a>
      to report bugs, discuss logic, or just talk with the community.
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Discord',
        meta: [
          {
            hid: 'description',
            name: 'description',
            description: 'Join the discord to report bugs, talk about the project, and more!',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .page-img {
    max-width: 230px;
  }
</style>
