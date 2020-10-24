<template>
  <main class="container">
    <img
      class="page-img"
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Zelda from Minish Cap" />
    <section class="sub-container">
      <h2 class="about">
        {{ $t('nav.subnav.about') }}
      </h2>
      <h2 class="features">
        {{ $t('nav.subnav.features') }}
      </h2>
      <h2 class="download">
        {{ $t('nav.subnav.download') }}
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
