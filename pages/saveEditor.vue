<template>
  <main class="container">
    <img
      src="~/assets/Forest_Minish.png"
      alt="Picture of Ezlo from Minish Cap" />
    <section class="sub-container">
      Save Editor stuff
    </section>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Save Editor',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Modify your save files to practice specific scenarios!',
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
