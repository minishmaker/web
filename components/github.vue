<template>
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
        {{ downloadText }}
      </a>
    </div>
    <section class="release-notes">
      <h3>Release Notes:</h3>
      <div
        v-html="$md.render(latestRelease.body)"
        class="release-body" />
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Github',

    props: {
      url: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        latestRelease: {
          id: 0,
          body: '',
          author: {},
          assets: [],
        },
        downloadText: '----->  Download Latest <-----',
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
      try {
        this.latestRelease = (await this.$axios.$get(this.url, { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`, }, }))[0];
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

  .download-latest {
    padding-top: 8px;

    a {
      font-size: 1.1rem;
      font-weight: 600;
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
