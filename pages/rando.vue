<template>
  <section class="container">
    <img
      src="~/assets/Forest_Minish.png"
      alt="Picture of a Forest Minish in Minish Cap"
      class="page-img" />
    <div class="sub-container">
      Rando Page! Someday this will hooked up c:
    </div>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Generate Rom',
        meta: [
          {
            hid: 'description',
            name: 'description',
            description: 'Randomize your playthrough of Minish Cap',
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
