<template>
  <section class="container">
    <h2>
      Minish Cap Rando! Woo!
    </h2>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        titleTemplate: 'Home',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Minish Cap but every item is shuffled!',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .links {
    padding-top: 15px;
    display: flex;
    flex: 100%;
    align-items: flex-end;

    &:first-child {
      align-self: flex-start;
    }
  }
</style>
