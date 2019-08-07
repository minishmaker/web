<template>
  <div class="container">
    <img
      src="~/assets/Link_MC.png"
      alt="Picture of Link from Minish Cap" />
    <section class="sub-container">
      <h2>
        {{ $t('index.greeting') }}
      </h2>
      <p>
        This is a work in progress, current there is a
        <a href="https://github.com/minishmaker/minishmaker">
          level editor
        </a>
        in the works, which will enable a better process for developing the randomizer portion.
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Home',
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
</style>
