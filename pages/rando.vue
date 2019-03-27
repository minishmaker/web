<template>
  <main class="container">
    <img
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Princess Zelda from Minish Cap" />
    <section class="sub-container">
      <span>
        Rando Page! Someday this will hooked up c:
      </span>
      <!-- <form
        ref="romInputForm"
        class="rom-upload"
        @submit.prevent="uploadTest">
        <label for="rom">
          Upload your Minish Cap .gba file
        </label>
        <input
          ref="romInput"
          required
          name="romFile"
          type="file" />
        <input
          class="rom-submit"
          type="submit"
          value="Submit" />
      </form>
      <span v-if="uploadOk">
        Upload ok! :D
      </span>
      <span v-if="uploadFail">
        Upload fail... :c
      </span> -->
    </section>
  </main>
</template>

<script>
  const headerData = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

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

    data() {
      return {
        uploadOk: false,
        uploadFail: false,
      };
    },

    mounted() {
      this.checkTest();
    },

    methods: {
      async uploadTest() {
        const file = this.$refs.romInput.files[0];
        const formData = new FormData();
        formData.append('rom', file);
        const response = await this.$axios.$post('api/upload_rom', formData, headerData);
        if (response) {
          this.uploadOk = true;
          await this.$localForage.setItem('rom', file);
          this.$refs.romInputForm.reset();
        } else {
          this.uploadFail = true;
        }
        setTimeout(() => {
          this.uploadOk = false;
          this.uploadFail = false;
        }, 2500);
      },
      async checkTest() {
        const file = await this.$localForage.getItem('rom');
        console.log(file);
        const formData = new FormData();
        formData.append('rom', file);
        await this.$axios.$post('api/check_rom', formData, headerData);
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
