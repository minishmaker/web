<template>
  <main class="container">
    <img
      src="~/assets/Forest_Minish.png"
      alt="Picture of a Forest Minish from Minish Cap" />
    <section class="sub-container">
      <h3 class="about">
        About
      </h3>
      <h3 class="features">
        Features
      </h3>
      <h3 class="download">
        Download
      </h3>
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
