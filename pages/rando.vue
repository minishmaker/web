<template>
  <section class="container">
    <img
      src="~/assets/Forest_Minish.png"
      alt="Picture of a Forest Minish from Minish Cap"
      class="page-img" />
    <div class="sub-container">
      <span>
        Rando Page! Someday this will hooked up c:
      </span>
      <form
        method="post"
        enctype="multipart/form-data"
        @submit.prevent="uploadTest">
        <div class="rom-upload">
          <label for="rom">
            Upload your Minish Cap .gba file
          </label>
          <input
            ref="romInput"
            name="rom"
            type="file" />
        </div>
        <div class="rom-submit">
          <button type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    head() {
      return {
        title: 'Generate Rom',
        meta: [
          {
            hid: 'description',
            name: 'description',
            description: 'Randomize your playthrough of Minish Cap',
          },
        ],
      };
    },

    methods: {
      async uploadTest() {
        await axios.post('api/upload_rom', this.$refs.romInput.files);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 230px;
  }
</style>
