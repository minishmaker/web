<template>
  <div class="container">
    <img
      class="page-img"
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
      <form
        ref="optionsForm"
        class="options-form"
        @submit.prevent="generateSettingsString">
        <!-- Main options -->
        <section class="options-container">
          <h3 class="options-title">
            Seed Options
          </h3>

          <div class="options-group">
            <input
              id="opKeysanity"
              v-model="settings.keysanity"
              type="checkbox"
              name="opKeysanity" />
            <label for="opKeysanity">
              Keysanity
            </label>
          </div>

          <div class="options-group">
            <input
              id="opElementsInPool"
              v-model="settings.elementsInPool"
              type="checkbox"
              name="opElementsInPool" />
            <label for="opElementsInPool">
              Elements in Item Pool
            </label>
          </div>

          <div class="options-group">
            <input
              id="opDisableGlitches"
              v-model="settings.disableGlitches"
              type="checkbox"
              name="opDisableGlitches" />
            <label for="opDisableGlitches">
              Disable Glitches
            </label>
          </div>

          <div class="options-group">
            <input
              id="opObscureSpots"
              v-model="settings.obscureSpots"
              type="checkbox"
              name="opObscureSpots" />
            <label for="opObscureSpots">
              Obscure Spots
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRupeesInPool"
              v-model="settings.rupeesInPool"
              type="checkbox"
              name="opRupeesInPool" />
            <label for="opRupeesInPool">
              Rupees in Pool
            </label>
          </div>

          <div class="options-group">
            <input
              id="opNonSwordWeapons"
              v-model="settings.nonSwordWeapons"
              type="checkbox"
              name="opNonSwordWeapons" />
            <label for="opNonSwordWeapons">
              Non-Sword Weapons
            </label>
          </div>

          <div class="options-group">
            <input
              id="opTrapsInItemPool"
              v-model="settings.trapsInItemPool"
              type="checkbox"
              name="opTrapsInItemPool" />
            <label for="opTrapsInItemPool">
              Traps in Item Pool
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRandomMusic"
              v-model="settings.randomMusic"
              type="checkbox"
              name="opRandomMusic" />
            <label for="opRandomMusic">
              Randomize Music
            </label>
          </div>

          <div class="options-group">
            <label for="opKinstoneFusion">
              Kinstone Fusions
            </label>
            <select
              id="opKinstoneFusion"
              v-model="settings.kinstoneFusion"
              type="select"
              name="opKinstoneFusion">
              <option value="0">
                No normal fusions
              </option>
              <option value="1">
                Open fusion mode
              </option>
              <option value="2">
                Vanilla fusions
              </option>
            </select>
          </div>

          <div
            v-show="settings.kinstoneFusion == '2'"
            class="options-group">
            <label for="opKinstoneFusionSkips">
              Skip Fusions
            </label>
            <select
              id="opKinstoneFusionSkips"
              v-model="settings.kinstoneFusionSkips"
              type="select"
              name="opKinstoneFusionSkips">
              <option value="0">
                Allow fusion skips
              </option>
              <option value="1">
                Instant fusion skips
              </option>
              <option value="2">
                No fusion skips
              </option>
            </select>
          </div>

          <div class="options-group">
            <label for="opOpenDHC">
              DHC/Pedestal
            </label>
            <select
              id="opOpenDHC"
              v-model="settings.openDHC"
              type="select"
              name="opOpenDHC">
              <option value="0">
                Pedestal open/Regular DHC
              </option>
              <option value="1">
                Pedestal finish/No DHC
              </option>
              <option value="2">
                Open DHC
              </option>
              <option value="3">
                Open DHC + Pedestal items
              </option>
            </select>
          </div>

          <div
            v-show="parseInt(settings.openDHC, 10) < 2"
            class="options-group">
            <label for="opSwordPed">
              Sword Pedestal
            </label>
            <select
              id="opSwordPed"
              v-model="settings.swordPed"
              type="select"
              name="opSwordPed">
              <option value="0">
                No sword pedestal
              </option>
              <option value="1">
                Smith sword pedestal
              </option>
              <option value="2">
                White sword pedestal
              </option>
              <option value="3">
                Red sword pedestal
              </option>
              <option value="4">
                Blue sword pedestal
              </option>
              <option value="5">
                Four sword pedestal
              </option>
            </select>
          </div>

          <div
            v-show="parseInt(settings.openDHC, 10) < 2"
            class="options-group">
            <label for="opElementPed">
              Element Pedestal
            </label>
            <select
              id="opElementPed"
              v-model="settings.elementPed"
              type="select"
              name="opElementPed">
              <option value="0">
                4 element pedestal
              </option>
              <option value="1">
                3 element pedestal
              </option>
              <option value="2">
                2 element pedestal
              </option>
              <option value="3">
                1 element pedestal
              </option>
              <option value="4">
                No element pedestal
              </option>
            </select>
          </div>
        </section>

        <!-- Cosmetics -->
        <section class="options-container">
          <h3 class="options-title">
            Cosmetics/Gimmicks
          </h3>

          <div class="options-group">
            <input
              id="opOneHitTimer"
              v-model="settings.oneHitTimer"
              type="checkbox"
              name="opOneHitTimer" />
            <label for="opOneHitTimer">
              One Hit K.O. Timer Mode
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRandomLanguage"
              v-model="settings.randomLanguage"
              type="checkbox"
              name="opRandomLanguage" />
            <label for="opRandomLanguage">
              Randomize Language
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRainbowHearts"
              v-model="settings.rainbowHearts"
              type="checkbox"
              name="opRainbowHearts" />
            <label for="opRainbowHearts">
              Rainbow Hearts
            </label>
          </div>

          <div class="options-group">
            <button @click.prevent.self="showTunicColorPicker = !showTunicColorPicker">
              {{ showTunicColorPicker ? 'Done' : 'Pick tunic color' }}
              <no-ssr>
                <chrome-color-picker
                  v-show="showTunicColorPicker"
                  :value="settings.tunicColor"
                  @input="e => updateColorPicker('tunicColor', e)" />
              </no-ssr>
            </button>
            <span
              ref="tunicColorPreview"
              class="color-preview" />
          </div>

          <div class="options-group">
            <button @click.prevent.self="showSplitBarColorPicker = !showSplitBarColorPicker">
              {{ showSplitBarColorPicker ? 'Done' : 'Pick split bar color' }}
              <no-ssr>
                <chrome-color-picker
                  v-show="showSplitBarColorPicker"
                  :value="settings.splitBarColor"
                  @input="e => updateColorPicker('splitBarColor', e)" />
              </no-ssr>
            </button>
            <span
              ref="splitBarColorPreview"
              class="color-preview" />
          </div>

          <div
            v-show="!settings.rainbowHearts"
            class="options-group">
            <button @click.prevent.self="showHeartColorPicker = !showHeartColorPicker">
              {{ showHeartColorPicker ? 'Done' : 'Pick heart color' }}
              <no-ssr>
                <chrome-color-picker
                  v-show="showHeartColorPicker"
                  :value="settings.heartColor"
                  @input="e => updateColorPicker('heartColor', e)" />
              </no-ssr>
            </button>
            <span
              ref="heartColorPreview"
              class="color-preview" />
          </div>

          <div class="options-group">
            <label for="opFollower">
              Permanent Follower
            </label>
            <select
              id="opFollower"
              v-model="settings.follower"
              type="select"
              name="opFollower">
              <option value="0">
                No follower
              </option>
              <option value="1">
                Mailman
              </option>
              <option value="2">
                Zelda
              </option>
              <option value="3">
                Malon
              </option>
              <option value="4">
                Smith
              </option>
              <option value="5">
                King Gustaf
              </option>
              <option value="6">
                Cow
              </option>
              <option value="7">
                Goron
              </option>
              <option value="8">
                Anju
              </option>
            </select>
          </div>

          <div class="options-group">
            <label for="opFuzziness">
              Fuzziness
            </label>
            None&nbsp;
            <input
              id="opFuzziness"
              v-model="settings.fuzziness"
              type="range"
              name="opFuzziness"
              min="-1"
              max="14" />
            &nbsp;Max
          </div>
        </section>

        <!-- Additional -->
        <section class="options-container">
          <h3 class="options-title">
            Additional Settings
          </h3>

          <div class="options-group">
            <label for="opPatchFile">
              Custom Patch
            </label>
            <input
              id="opPatchFile"
              ref="opPatchFile"
              name="opPatchFile"
              type="file" />
          </div>

          <div class="options-group">
            <label for="opLogicFile">
              Custom Logic
            </label>
            <input
              id="opLogicFile"
              ref="opLogicFile"
              name="opLogicFile"
              type="file" />
          </div>

          <div class="options-group">
            <label for="opSeed">
              Seed Number
            </label>
            <input
              id="opSeed"
              ref="opSeed"
              type="text"
              name="opSeed"
              title="Numbers only"
              pattern="[0-9]+" />
          </div>
        </section>

        <input
          class="rando-submit"
          type="submit"
          value="Randomize!" />
      </form>
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
          kinstoneFusion: '0',
          kinstoneFusionSkips: '0',
          openDHC: '0',
          swordPed: '0',
          elementPed: '0',
          randomMusic: false,
          randomLanguage: false,
          rainbowHearts: false,
          tunicColor: '#10ff08',
          heartColor: '#ff5010',
          splitBarColor: '#4aff18',
          follower: '0',
          fuzziness: '-1',
        },
      };
    },

    mounted() {
      // this.checkTest();
      this.$refs.tunicColorPreview.style.backgroundColor = this.settings.tunicColor;
      this.$refs.heartColorPreview.style.backgroundColor = this.settings.heartColor;
      this.$refs.splitBarColorPreview.style.backgroundColor = this.settings.splitBarColor;
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
        this.$refs[`${name}Preview`].style.backgroundColor = val.hex;
      },
      generateSettingsString() {

      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 230px;
  }

  .options-form {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .options-container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      position: relative;
      margin: 16px;
      padding: 12px;
      border: 1px solid $nav-border-color;

      button {
        width: 120px;
        padding: 5px;
        position: relative;
      }

      .color-preview {
        display: inline-block;
        margin-left: 6px;
        width: 31px;
        height: 31px;
        border: 1px solid $nav-border-color;

        &::before {
          content: ' ';
        }
      }

      .options-title {
        position: absolute;
        background: $site-background-color;
        padding: 2px 10px;
        top: calc(-1rem + 1px);
      }

      .options-group {
        display: flex;
        align-items: center;
        padding: 4px;
        padding-right: 12px;

        input {
          &[type="checkbox"] {
            -webkit-appearance:none;
            border: 2px solid $nav-border-color;
            border-radius: 2px;
            width: 16px;
            height: 16px;
            margin-right: 4px;

            &:hover {
              cursor: pointer;
              border-color: black;
            }

            &:checked {
              background: $link-main-color;
            }

            & + label {
              flex-grow: unset;

              &:hover {
                cursor: pointer;
              }
            }
          }

          &[type="file"] {
            width: 220px;
          }

          &[type="text"] {
            width: 185px;
          }
        }

        select {
          width: 185px;
          padding: 2px;
        }

        label {
          text-align:left;
          flex-grow: 1;
          padding-right: 10px;
        }
      }

      .vc-chrome {
        position: absolute;
        z-index: 10;
        left: 125px;
        top: -1px;
      }
    }

    .rando-submit {
      width: 225px;
      height: 50px;
      font-size: 22px;
      color: $link-main-color;
      background: $nav-background-color;
      border: 2px solid $nav-border-color;
      border-radius: 8px;

      transition: color 0.75s ease-in-out;
      transition: border-color 0.75s ease-in-out;
      transition: font-size 0.75s ease-in-out;

      &:hover {
        cursor: pointer;
        border-color: black;
        color: $link-main-color--hover;
        font-size: 24px;
      }
    }
  }

  @media only screen and (max-width: 1599px) {
    .options-group {
      flex: 50%;
      max-width: 50%;
    }
  }

  @media only screen and (min-width: 1600px) {
    .options-group {
      flex: 33%;
      max-width: 33%;
    }
  }
</style>
