<template>
  <div>
    <nav class="nav-links">
      <div class="link-container">
        <nuxt-link
          :to="localePath('index')"
          class="home-link">
          <img
            src="~/assets/Green_Kinstone.png"
            width="27px"
            height="27px"
            alt="Picture of a green kinstone from Minish Cap" />
          MinishMaker
        </nuxt-link>
        <nuxt-link :to="localePath('rando')">
          {{ $t('nav.links.rando') }}
        </nuxt-link>
        <nuxt-link :to="localePath('github')">
          {{ $t('nav.links.github') }}
        </nuxt-link>
        <nuxt-link :to="localePath('discord')">
          {{ $t('nav.links.discord') }}
        </nuxt-link>
        <nuxt-link :to="localePath('about')">
          {{ $t('nav.links.about') }}
        </nuxt-link>
        <nuxt-link :to="localePath('tracker')">
          {{ $t('nav.links.tracker') }}
        </nuxt-link>
      </div>

      <div class="locales">
        <nuxt-link :to="switchLocalePath('en')">
          <span class="flag-icon flag-icon-us" />
          English
        </nuxt-link>
      </div>
    </nav>
    <main class="main-container">
      <transition name="fade">
        <nuxt />
      </transition>
    </main>
    <footer class="footer">
      Site maintained by UselessHobo
    </footer>
  </div>
</template>

<script>
  import 'flag-icon-css/css/flag-icon.min.css';

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
      background: linear-gradient(to bottom right, $site-background-color 52%, $site-background-color--transparent),
        url('~assets/minish_cap_overworld.jpg') no-repeat content-box fixed right bottom;
    }
  }

  *, :before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .main-container {
    margin: auto;
    margin-top: 0px;
    display: flex;
    align-items: space-between;

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

  .nav-links {
    display: flex;
    flex: 0 1 0;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    background: $nav-background-color;
    padding: 12px 8px;
    margin-bottom: 12px;
    border-bottom: 1px solid $nav-border-color;

    .link-container {
      flex: auto;
    }

    .locales {
      font-size: 16px;
    }

    a {
      padding: 4px;
      margin: 0px 4px;

      // Home link. Get it? LINK? :D
      &.home-link {
        border-right: 1px solid $nav-border-color--light;
        padding-right: 12px;
        font-size: 22px;

        & > * {
          vertical-align: text-bottom;
        }
      }

      &:not(.home-link):after {
        content: '';
        display: block;
        border-bottom: 3px solid $link-main-color--hover;
        width: 0;
        position: absolute;
        left: 0;
        -webkit-transition: 0.4s ease;
        transition: 0.4s ease;
      }

      &:not(.home-link):hover:after {
        width: 100%;
      }
    }
  }

  #__nuxt, #__layout {
    height: 100%;
  }

  #__layout {
    & > div {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }

  .footer {
    display: flex;
    flex: 0 1 0;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 30px;
    background-color: $footer-background-color;
    border-top: 1px solid $footer-border-color;
  }
</style>
