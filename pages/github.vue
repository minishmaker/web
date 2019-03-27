<template>
  <main class="container">
    <img
      src="~/assets/Vaati_Hylian_Form.png"
      alt="Picture of Vaati from Minish Cap" />
    <section class="sub-container">
      All source code for the website, level editor, and randomizer can be
      <a
        href="https://github.com/minishmaker"
        target="_blank">
        found here
      </a>
    </section>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Github',
        meta: [
          {
            hid: 'description',
            name: 'description',
            description: 'Information about the github repositories that make up this project',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 230px;
  }
</style>
