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
        <nuxt-link
          :to="localePath('level_editor')"
          class="level-nav">
          {{ $t('nav.links.levelEditor') }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('rando')"
          class="rando-nav">
          {{ $t('nav.links.rando') }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('save_editor')"
          class="save-nav">
          {{ $t('nav.links.saveEditor') }}
        </nuxt-link>
      </div>
      <div class="social-icons">
        <a
          href="https://discord.gg/ndFuWbV"
          target="_blank"
          class="discord-social">
          <img
            src="~/assets/Discord-Logo-Color.png"
            alt="Discord logo" />
        </a>
        <a
          href="https://github.com/minishmaker"
          target="_blank"
          class="github-social">
          <img
            src="~/assets/Github-Mark-64px.png"
            alt="Github logo" />
        </a>
        <a
          href="https://twitter.com/minishmaker"
          target="_blank"
          class="twitter-social">
          <img
            src="~/assets/Twitter_Social_Icon.png"
            alt="Twitter logo" />
        </a>
      </div>
    </nav>

    <div
      v-show="$route.fullPath != '/'"
      :class="{
        'sub-nav': true,
        'nav-links': true,
        'level-sub-nav': $route.fullPath == '/level_editor',
        'rando-sub-nav': $route.fullPath == '/rando',
        'save-sub-nav': $route.fullPath == '/save_editor',
      }">
      <div class="link-container">
        <a v-scroll-to="'.about'">
          About
        </a>
        <a v-scroll-to="'.features'">
          Features
        </a>
        <a v-scroll-to="'.download'">
          Download
        </a>
      </div>
    </div>

    <main class="main-container">
      <transition name="fade">
        <nuxt keep-alive />
      </transition>
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="locales">
          <nuxt-link :to="switchLocalePath('en')">
            <span class="flag-icon flag-icon-us" />
            English
          </nuxt-link>

          <div class="social-icons">
            <a
              href="https://discord.gg/ndFuWbV"
              target="_blank"
              class="discord-social">
              <img
                src="~/assets/Discord-Logo-Color.png"
                alt="Discord logo" />
            </a>
            <a
              href="https://github.com/minishmaker"
              target="_blank"
              class="github-social">
              <img
                src="~/assets/Github-Mark-64px.png"
                alt="Github logo" />
            </a>
            <a
              href="https://twitter.com/minishmaker"
              target="_blank"
              class="twitter-social">
              <img
                src="~/assets/Twitter_Social_Icon.png"
                alt="Twitter logo" />
            </a>
          </div>
        </div>
        <div class="site-map">
          Site maintained by UselessHobo --&nbsp;
          Images sourced from https://zelda.gamepedia.com
        </div>
      </div>
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

  .main-container {
    margin-top: 12px;
  }

  .nav-links {
    display: flex;
    flex: 0 1 0;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    background: $nav-background-color;
    padding: 12px 8px;
    border-bottom: 1px solid $nav-border-color;

    &.sub-nav {
      font-size: 16px;
      padding-left: 8%;
      border-top: 1px solid $nav-border-color;

      &.rando-sub-nav {
        a:after {
          border-bottom-color: $kinstone-red-color;
        }
      }

      &.save-sub-nav {
        a:after {
          border-bottom-color: $kinstone-blue-color;
        }
      }
    }

    .link-container {
      flex: auto;
    }

    a {
      padding: 4px;
      margin: 0px 4px;
      cursor: pointer;

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
        border-bottom: 3px solid $kinstone-green-color;
        width: 0;
        position: absolute;
        left: 0;
        -webkit-transition: 0.4s ease;
        transition: 0.4s ease;
      }

      &.level-nav {
        &:hover {
          color: $kinstone-green-color;
        }
      }
      &.rando-nav {
        &:hover {
          color: $kinstone-red-color;
        }
        &:after {
          border-bottom-color: $kinstone-red-color;
        }
      }
      &.save-nav {
        &:hover {
          color: $kinstone-blue-color;
        }
        &:after {
          border-bottom-color: $kinstone-blue-color;
        }
      }
      &.discord-social:after {
        border-bottom-color: #7289DA; // main discord color
      }
      &.github-social:after {
        border-bottom-color: #171516; // main github color
      }
      &.twitter-social:after {
        border-bottom-color: #1da1f2; // main twitter color
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

  .social-icons {
    img {
      width: 32px;
      height: 32px;
    }
  }

  .footer {
    display: flex;
    flex: 0 1 0;
    font-size: 16px;
    height: 30px;
    background-color: $footer-background-color;
    border-top: 1px solid $footer-border-color;

    .footer-container {
      height: 160px;
      display: flex;
      flex: 100%;
      flex-flow: row wrap;
      padding: 16px;

      .locales {
        flex: 40%;

        .social-icons {
          padding-top: 20px;

          & > a {
            padding-right: 16px;
          }
        }
      }
    }

    .site-map {
      flex: 60%;
    }
  }

  .pull-right {
    float: right;
  }
</style>
