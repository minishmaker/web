<template>
  <div class="container">
    <img
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Princess Zelda from Minish Cap" />
    <section class="sub-container">
      <span>
        Rando seed generation page! Someday this will hooked up c:
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
      <span v-if="loading">
        Loading...
      </span>
      <span v-if="uploadOk">
        Upload ok! :D
      </span>
      <span v-if="uploadFail">
        Upload fail... :c
      </span> -->
      <div class="options">
        <form
          ref="optionsForm"
          class="options-form"
          @submit.prevent="generateSettingsString">
          <!-- Main options -->
          <h3 class="options--title">
            Seed Options
          </h3>

          <input
            v-model="settings.keysanity"
            type="checkbox"
            name="opKeysanity" />
          <label for="opKeysanity">
            Keysanity
          </label>

          <input
            v-model="settings.elementsInPool"
            type="checkbox"
            name="opElementsInPool" />
          <label for="opElementsInPool">
            Elemnts in Item Pool
          </label>

          <input
            v-model="settings.disableGlitches"
            type="checkbox"
            name="opDisableGlitches" />
          <label for="opDisableGlitches">
            Disable Glitches
          </label>

          <input
            v-model="settings.obscureSpots"
            type="checkbox"
            name="opObscureSpots" />
          <label for="opObscureSpots">
            Obscure Spots
          </label>

          <input
            v-model="settings.rupeesInPool"
            type="checkbox"
            name="opRupeesInPool" />
          <label for="opRupeesInPool">
            Rupees in Pool
          </label>

          <input
            v-model="settings.nonSwordWeapons"
            type="checkbox"
            name="opNonSwordWeapons" />
          <label for="opNonSwordWeapons">
            Non-Sword Weapons
          </label>

          <input
            v-model="settings.trapsInItemPool"
            type="checkbox"
            name="opTrapsInItemPool" />
          <label for="opTrapsInItemPool">
            Traps in Item Pool
          </label>

          <select
            v-model="settings.kinstoneFusion"
            type="select"
            name="opKinstoneFusion">
            <option :value="0">
              No normal fusions
            </option>
            <option :value="1">
              Open fusion mode
            </option>
            <option :value="2">
              Vanilla fusions
            </option>
          </select>
          <label for="opKinstoneFusion">
            Kinstone Fusions
          </label>

          <select
            v-model="settings.kinstoneFusionSkips"
            type="select"
            name="opKinstoneFusionSkips">
            <option :value="0">
              Allow fusion skips
            </option>
            <option :value="1">
              Instant fusion skips
            </option>
            <option :value="2">
              No fusion skips
            </option>
          </select>
          <label for="opKinstoneFusionSkips">
            Kinstone Fusions
          </label>

          <select
            v-model="settings.openDHC"
            type="select"
            name="opOpenDHC">
            <option :value="0">
              Pedestal open/Regular Dark Hyrule Castle
            </option>
            <option :value="1">
              Pedestal finish/No Dark Hyrule Castle
            </option>
            <option :value="2">
              Open Dark Hyrule Castle
            </option>
            <option :value="3">
              Open Dark Hyrule Castle + Pedestal items
            </option>
          </select>
          <label for="opOpenDHC">
            Dark Hyrule Castle/Pedestal Options
          </label>

          <select
            v-model="settings.swordPed"
            type="select"
            name="opSwordPed">
            <option :value="0">
              No sword pedestal
            </option>
            <option :value="1">
              Smith sword pedestal
            </option>
            <option :value="2">
              White sword pedestal
            </option>
            <option :value="3">
              Red sword pedestal
            </option>
            <option :value="4">
              Blue sword pedestal
            </option>
            <option :value="5">
              Four sword pedestal
            </option>
          </select>
          <label for="opSwordPed">
            Sword Pedestal
          </label>

          <select
            v-model="settings.elementPed"
            type="select"
            name="opElementPed">
            <option :value="0">
              4 element pedestal
            </option>
            <option :value="1">
              3 element pedestal
            </option>
            <option :value="2">
              2 element pedestal
            </option>
            <option :value="3">
              1 element pedestal
            </option>
            <option :value="4">
              No element pedestal
            </option>
          </select>
          <label for="opElementPed">
            Element Pedestal
          </label>

          <!-- Cosmetics -->
          <h3 class="options--title">
            Cosmetics/Gimmicks
          </h3>

          <input
            v-model="settings.oneHitTimer"
            type="checkbox"
            name="opOneHitTimer" />
          <label for="opOneHitTimer">
            One Hit K.O. Timer Mode
          </label>

          <input
            v-model="settings.randomMusic"
            type="checkbox"
            name="opRandomMusic" />
          <label for="opRandomMusic">
            Randomize Music
          </label>

          <input
            v-model="settings.randomLanguage"
            type="checkbox"
            name="opRandomLanguage" />
          <label for="opRandomLanguage">
            Randomize Language
          </label>

          <input
            v-model="settings.rainbowHearts"
            type="checkbox"
            name="opRainbowHearts" />
          <label for="opRainbowHearts">
            Rainbow Hearts
          </label>

          <button @click.prevent.self="showTunicColorPicker = !showTunicColorPicker">
            {{ showTunicColorPicker ? 'Done' : 'Pick tunic color' }}
            <no-ssr>
              <chrome-color-picker
                v-show="showTunicColorPicker"
                :value="settings.tunicColor"
                @input="e => updateColorPicker('tunicColor', e)" />
            </no-ssr>
          </button>

          <button @click.prevent.self="showHeartColorPicker = !showHeartColorPicker">
            {{ showHeartColorPicker ? 'Done' : 'Pick heart color' }}
            <no-ssr>
              <chrome-color-picker
                v-show="showHeartColorPicker"
                :value="settings.heartColor"
                @input="e => updateColorPicker('heartColor', e)" />
            </no-ssr>
          </button>

          <button @click.prevent.self="showSplitBarColorPicker = !showSplitBarColorPicker">
            {{ showSplitBarColorPicker ? 'Done' : 'Pick split bar color' }}
            <no-ssr>
              <chrome-color-picker
                v-show="showSplitBarColorPicker"
                :value="settings.splitBarColor"
                @input="e => updateColorPicker('splitBarColor', e)" />
            </no-ssr>
          </button>

          <select
            v-model="settings.follower"
            type="select"
            name="opFollower">
            <option :value="0">
              No follower
            </option>
            <option :value="1">
              Mailman
            </option>
            <option :value="2">
              Zelda
            </option>
            <option :value="3">
              Malon
            </option>
            <option :value="4">
              Smith
            </option>
            <option :value="5">
              King Gustaf
            </option>
            <option :value="6">
              Cow
            </option>
            <option :value="7">
              Goron
            </option>
            <option :value="8">
              Anju
            </option>
          </select>
          <label for="opFollower">
            Element Pedestal
          </label>

          No fuzz
          <input
            v-model="settings.fuzziness"
            type="range"
            name="opFuzziness"
            min="-1"
            max="14" />
          Max fuzz
          <label for="opFuzziness">
            Fuzziness Level
          </label>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    Chrome as ChromeColorPicker,
  } from 'vue-color';

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

    components: {
      ChromeColorPicker,
    },

    data() {
      return {
        uploadOk: false,
        uploadFail: false,
        loading: false,
        showTunicColorPicker: false,
        showHeartColorPicker: false,
        showSplitBarColorPicker: false,
        settings: {
          keysanity: false,
          elementsInPool: false,
          disableGlitches: true,
          obscureSpots: false,
          rupeesInPool: false,
          nonSwordWeapons: false,
          trapsInItemPool: false,
          oneHitTimer: false,
          kinstoneFusion: 0,
          kinstoneFusionSkips: 0,
          openDHC: 0,
          swordPed: 0,
          elementPed: 0,
          randomMusic: false,
          randomLanguage: false,
          rainbowHearts: false,
          tunicColor: '#10ff08',
          heartColor: '#ff5010',
          splitBarColor: '#4aff18',
          follower: 0,
          fuzziness: -1,
        },
      };
    },

    mounted() {
      // this.checkTest();
    },

    methods: {
      async uploadTest() {
        this.loading = true;
        const file = this.$refs.romInput.files[0];
        const formData = new FormData();
        formData.append('rom', file);
        try {
          await this.$axios.$post('api/upload_rom', formData, headerData);
          this.uploadOk = true;
          await this.$localForage.setItem('rom', file);
          this.$refs.romInputForm.reset();
        } catch (e) {
          console.error(e);
          this.uploadFail = true;
        }
        this.loading = false;

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
      updateColorPicker(name, val) {
        this.settings[name] = val.hex;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .page-img {
    max-width: 230px;
  }
</style>
