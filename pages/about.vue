<template>
  <main class="container">
    <img
      src="~/assets/Ezlo_Cap_Form.png"
      alt="Picture of Ezlo from Minish Cap" />
    <section class="sub-container">
      Shoutouts to all current developers and testers for making this possible! (Full credits to come)
    </section>
  </main>
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
  .page-img {
    max-width: 224px;
  }
</style>
