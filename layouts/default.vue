<template>
  <div>
    <nav class="links">
      <nuxt-link
        to="/"
        class="home-link">
        <img
          src="~/assets/Green_Kinstone.png"
          width="27px"
          height="27px"
          alt="Picture of a green kinstone" />
        MinishMaker
      </nuxt-link>
      <nuxt-link to="/rando">
        Generate Rom
      </nuxt-link>
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </nav>
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        titleTemplate: '%s - MinishMaker',
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

<style lang="scss">
  @import '~@/assets/global-styles';

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, :before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.7s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .home-link {
    margin-right: 2%;
    font-size: 22px;
  }

  .links {
    font-size: 18px;
    display: flex;
    flex: 100%;
    justify-content: flex-start;
    align-items: center;
    background: rgb(225, 225, 225);
    padding: 12px 8px;
    margin-bottom: 8px;

    a {
      margin: 6px;
      display: flex;
      // align-items: center;

      &:first-child {
        justify-self: flex-start;
      }
    }
  }
</style>
