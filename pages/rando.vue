<template>
  <main class="container">
    <img
      class="page-img"
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Zelda from Minish Cap" />
    <section class="sub-container">
      <h2 class="about">
        About
      </h2>
      <h2 class="features">
        Features
      </h2>
      <h2 class="download">
        Download
      </h2>
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
        <div class="download-latest">
          <a :href="releaseDownloadUrl">
            Download latest
          </a>
        </div>
        <section class="release-notes">
          <h3>Release Notes:</h3>
          <div
            class="release-body"
            v-html="$md.render(latestRelease.body)" />
        </section>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Generate Random Playthrough',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Randomize your playthrough of Minish Cap',
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
          assets: [],
        },
      };
    },

    computed: {
      releaseDownloadUrl() {
        return this.latestRelease.assets.length
          ? this.latestRelease.assets[0].browser_download_url
          : '';
      },
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
    max-width: 224px;
  }

  .download-latest {
    padding-top: 8px;

    a {
      font-size: 1.1rem;
      color: #0366d6;

      &:hover {
        text-decoration: underline;
      }
    }
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
