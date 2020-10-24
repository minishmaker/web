<template>
  <main class="container">
    <img
      class="page-img"
      src="~/assets/Forest_Minish.png"
      alt="Picture of a Forest Minish from Minish Cap" />
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
      <Github url="https://api.github.com/repos/minishmaker/save-editor/releases" />
    </section>
  </main>
</template>

<script>
  import Github from '@/components/github.vue';

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
