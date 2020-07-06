<template>
  <main class="container">
    <img
      class="page-img"
      src="~/assets/Ezlo_Cap_Form.png"
      alt="Picture of Ezlo from Minish Cap" />
    <section class="sub-container">
      <h2 class="about">
        About
      </h2>
      <h2 class="features">
        Features
      </h2>
      <h2 class="download">
        Download
      </h2>
      <Github url="https://api.github.com/repos/minishmaker/minishmaker/releases" />
    </section>
  </main>
</template>

<script>
  import Github from '@/components/github.vue';

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

    components: {
      Github,
    },
  };
</script>

<style lang="scss" scoped>
  .page-img {
    max-width: 224px;
  }
</style>
