<template>
  <div class="container">
    <img
      src="~/assets/Vaati_Hylian_Form.png"
      alt="Picture of Vaati from Minish Cap"
      class="page-img" />
    <section class="sub-container">
      All source code for the website, level editor, and randomizer can be
      <a
        href="https://github.com/minishmaker"
        target="_blank">
        found here.
      </a>
      <div
        v-show="latestRelease.id"
        class="release">
        <h3>Latest Release:</h3>
        <a
          :href="latestRelease.html_url"
          target="_blank">
          {{ latestRelease.name }}
        </a>
        published at {{ formatDate(latestRelease.published_at) }} by
        <a
          :href="latestRelease.author.url"
          target="_blank">
          <img
            v-if="latestRelease.author.avatar_url"
            :src="latestRelease.author.avatar_url" />
          {{ latestRelease.author.login }}
        </a>
        <section class="release-notes">
          <h3>Release Notes:</h3>
          <div
            class="release-body"
            v-html="$md.render(latestRelease.body)" />
        </section>
      </div>
    </section>
  </div>
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

    data() {
      return {
        latestRelease: {
          id: 0,
          body: '',
          author: {},
        },
      };
    },

    async mounted() {
      const url = 'https://api.github.com/repos/minishmaker/randomizer/releases';
      try {
        this.latestRelease = (await this.$axios.$get(url, { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`, }, }))[0];
      } catch (e) {
        console.error(e);
      }
    },

    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZoneName: 'short',
          hour: 'numeric',
          minute: 'numeric',
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 230px;
  }

  h3 {
    display: inline-block;
  }

  .release {
    margin-top: 30px;

    a {
      img {
        display: inline-block;
        width: 46px;
      }
    }

    .release-notes {
      margin-top: 30px;

      .release-body {
        background: $transparent-background-color;
        max-height: 550px;
        overflow-y: auto;
      }
    }
  }
</style>
