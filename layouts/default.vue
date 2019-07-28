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
          alt="Picture of a green kinstone from Minish Cap" />
        MinishMaker
      </nuxt-link>
      <nuxt-link to="/rando">
        Generate Rom
      </nuxt-link>
      <nuxt-link to="/github">
        Github
      </nuxt-link>
      <nuxt-link to="/discord">
        Discord
      </nuxt-link>
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </nav>
    <div class="main-container">
      <transition name="fade">
        <nuxt />
      </transition>
    </div>
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
    height: 100%;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;

    body {
      height: 100%;
      background: linear-gradient(to bottom right, $site-background-color 50%, $site-background-color--transparent),
        url('~assets/minish_cap_overworld.jpg') no-repeat content-box fixed right bottom;
    }
  }

  *, :before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .main-container {
    margin: auto;

    @media only screen and (max-width: 600px) {
      width: 98%;
    }

    @media only screen and (min-width: 600px) {
      width: 98%;
    }

    @media only screen and (min-width: 992px) {
      width: 800px;
    }

    @media only screen and (min-width: 1200px) {
      width: 1000px;
    }

    @media only screen and (min-width: 1600px) {
      width: 1440px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.7s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .links {
    font-size: 18px;
    display: flex;
    flex: 100%;
    justify-content: flex-start;
    align-items: center;
    background: $nav-background-color;
    padding: 12px 8px;
    margin-bottom: 8px;

    a {
      padding: 8px;
      margin: 0px 4px;

      // Home link. Get it? LINK? :D
      &.home-link {
        display: flex;
        justify-self: flex-start;
        margin-right: 2%;
        font-size: 22px;
      }

      &:not(:first-child):after {
        content: '';
        display: block;
        border-bottom: 3px solid $link-main-color--hover;
        width: 0;
        position: absolute;
        left: 0;
        -webkit-transition: 0.4s ease;
        transition: 0.4s ease;
      }

      &:not(:first-child):hover:after {
        width: 100%;
      }
    }
  }
</style>
