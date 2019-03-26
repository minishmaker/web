<template>
  <section class="container">
    <img
      src="~/assets/Ezlo_Cap_Form.png"
      alt="Picture of Ezlo in Minish Cap"
      class="page-img" />
    <div class="sub-container">
      Shoutouts to
      <a
        href="https://github.com/mikeskyy"
        target="_blank">
        Mikesky
      </a>
    </div>
  </section>
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

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 224px;
  }
</style>
