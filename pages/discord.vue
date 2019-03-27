<template>
  <main class="container">
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
      to report bugs, talk about logic, or just talk with the community.
    </section>
  </main>
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
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 230px;
  }
</style>
