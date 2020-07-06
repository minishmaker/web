<template>
  <main class="container">
    <img
      src="~/assets/Ezlo_Cap_Form.png"
      alt="Picture of Ezlo from Minish Cap" />
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
        title: 'Level Editor',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Make custom levels, or reimagine the original!',
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
