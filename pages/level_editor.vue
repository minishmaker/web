<template>
  <main class="container">
    <img
      class="page-img"
      src="~/assets/Ezlo_Cap_Form.png"
      alt="Picture of Ezlo from Minish Cap" />
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
