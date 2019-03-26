<template>
  <section class="container">
    <img
      src="~/assets/Link_MC.png"
      alt="Picture of Link in Minish Cap"
      class="page-img" />
    <div class="sub-container">
      <h2>
        Minish Cap Rando! Woo!
      </h2>
      <p>
        This is a work in progress, current there is a
        <a href="https://github.com/minishmaker/minishmaker">
          level editor
        </a>
        in the works, which will enable a better process for developing the randomizer portion.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Home',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Minish Cap but every item is shuffled!',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 300px;
  }
</style>
