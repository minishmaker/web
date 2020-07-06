<template>
  <main class="container">
    <img
      class="page-img"
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Zelda from Minish Cap" />
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
      <Github url="https://api.github.com/repos/minishmaker/randomizer/releases" />
    </section>
  </main>
</template>

<script>
  import Github from '@/components/github.vue';

  export default {
    head() {
      return {
        title: 'Generate Random Playthrough',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Randomize your playthrough of Minish Cap',
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
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 224px;
  }
</style>
