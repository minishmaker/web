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
            {{ $t('rando.seed.name') }}
          </h3>

          <div class="options-group">
            <input
              id="opKeysanity"
              v-model="settings.keysanity"
              type="checkbox"
              name="opKeysanity" />
            <label for="opKeysanity">
              {{ $t('rando.seed.keysanity') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opElementsInPool"
              v-model="settings.elementsInPool"
              type="checkbox"
              name="opElementsInPool" />
            <label for="opElementsInPool">
              {{ $t('rando.seed.elementsInPool') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opDisableGlitches"
              v-model="settings.disableGlitches"
              type="checkbox"
              name="opDisableGlitches" />
            <label for="opDisableGlitches">
              {{ $t('rando.seed.disableGlitches') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opObscureSpots"
              v-model="settings.obscureSpots"
              type="checkbox"
              name="opObscureSpots" />
            <label for="opObscureSpots">
              {{ $t('rando.seed.obscureSpots') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRupeesInPool"
              v-model="settings.rupeesInPool"
              type="checkbox"
              name="opRupeesInPool" />
            <label for="opRupeesInPool">
              {{ $t('rando.seed.rupeesInPool') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opNonSwordWeapons"
              v-model="settings.nonSwordWeapons"
              type="checkbox"
              name="opNonSwordWeapons" />
            <label for="opNonSwordWeapons">
              {{ $t('rando.seed.nonSwordWeapons') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opTrapsInItemPool"
              v-model="settings.trapsInItemPool"
              type="checkbox"
              name="opTrapsInItemPool" />
            <label for="opTrapsInItemPool">
              {{ $t('rando.seed.trapsInItemPool') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRandomMusic"
              v-model="settings.randomMusic"
              type="checkbox"
              name="opRandomMusic" />
            <label for="opRandomMusic">
              {{ $t('rando.seed.randomMusic') }}
            </label>
          </div>

          <div class="options-group">
            <label for="opKinstoneFusion">
              {{ $t('rando.seed.kinstoneFusions.name') }}
            </label>
            <select
              id="opKinstoneFusion"
              v-model="settings.kinstoneFusion"
              type="select"
              name="opKinstoneFusion">
              <option value="0">
                {{ $t('rando.seed.kinstoneFusions.option1') }}
              </option>
              <option value="1">
                {{ $t('rando.seed.kinstoneFusions.option2') }}
              </option>
              <option value="2">
                {{ $t('rando.seed.kinstoneFusions.option3') }}
              </option>
            </select>
          </div>

          <div
            v-show="settings.kinstoneFusion == '2'"
            class="options-group">
            <label for="opKinstoneFusionSkips">
              {{ $t('rando.seed.skipFusions.name') }}
            </label>
            <select
              id="opKinstoneFusionSkips"
              v-model="settings.kinstoneFusionSkips"
              type="select"
              name="opKinstoneFusionSkips">
              <option value="0">
                {{ $t('rando.seed.skipFusions.option1') }}
              </option>
              <option value="1">
                {{ $t('rando.seed.skipFusions.option2') }}
              </option>
              <option value="2">
                {{ $t('rando.seed.skipFusions.option3') }}
              </option>
            </select>
          </div>

          <div class="options-group">
            <label for="opOpenDHC">
              {{ $t('rando.seed.openDHC.name') }}
            </label>
            <select
              id="opOpenDHC"
              v-model="settings.openDHC"
              type="select"
              name="opOpenDHC">
              <option value="0">
                {{ $t('rando.seed.openDHC.option1') }}
              </option>
              <option value="1">
                {{ $t('rando.seed.openDHC.option2') }}
              </option>
              <option value="2">
                {{ $t('rando.seed.openDHC.option3') }}
              </option>
              <option value="3">
                {{ $t('rando.seed.openDHC.option4') }}
              </option>
            </select>
          </div>

          <div
            v-show="parseInt(settings.openDHC, 10) < 2"
            class="options-group">
            <label for="opSwordPed">
              {{ $t('rando.seed.swordPed.name') }}
            </label>
            <select
              id="opSwordPed"
              v-model="settings.swordPed"
              type="select"
              name="opSwordPed">
              <option value="0">
                {{ $t('rando.seed.swordPed.option1') }}
              </option>
              <option value="1">
                {{ $t('rando.seed.swordPed.option2') }}
              </option>
              <option value="2">
                {{ $t('rando.seed.swordPed.option3') }}
              </option>
              <option value="3">
                {{ $t('rando.seed.swordPed.option4') }}
              </option>
              <option value="4">
                {{ $t('rando.seed.swordPed.option5') }}
              </option>
              <option value="5">
                {{ $t('rando.seed.swordPed.option6') }}
              </option>
            </select>
          </div>

          <div
            v-show="parseInt(settings.openDHC, 10) < 2"
            class="options-group">
            <label for="opElementPed">
              {{ $t('rando.seed.elementPed.name') }}
            </label>
            <select
              id="opElementPed"
              v-model="settings.elementPed"
              type="select"
              name="opElementPed">
              <option value="0">
                {{ $t('rando.seed.elementPed.option1') }}
              </option>
              <option value="1">
                {{ $t('rando.seed.elementPed.option2') }}
              </option>
              <option value="2">
                {{ $t('rando.seed.elementPed.option3') }}
              </option>
              <option value="3">
                {{ $t('rando.seed.elementPed.option4') }}
              </option>
              <option value="4">
                {{ $t('rando.seed.elementPed.option5') }}
              </option>
            </select>
          </div>
        </section>

        <!-- Cosmetics -->
        <section class="options-container">
          <h3 class="options-title">
            {{ $t('rando.gimmick.name') }}
          </h3>

          <div class="options-group">
            <input
              id="opOneHitTimer"
              v-model="settings.oneHitTimer"
              type="checkbox"
              name="opOneHitTimer" />
            <label for="opOneHitTimer">
              {{ $t('rando.gimmick.oneHitTimer') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRandomLanguage"
              v-model="settings.randomLanguage"
              type="checkbox"
              name="opRandomLanguage" />
            <label for="opRandomLanguage">
              {{ $t('rando.gimmick.randomLanguage') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRainbowHearts"
              v-model="settings.rainbowHearts"
              type="checkbox"
              name="opRainbowHearts" />
            <label for="opRainbowHearts">
              {{ $t('rando.gimmick.rainbowHearts') }}
            </label>
          </div>

          <div class="options-group">
            <button @click.prevent.self="showTunicColorPicker = !showTunicColorPicker">
              {{ showTunicColorPicker ? $t('rando.gimmick.done') : $t('rando.gimmick.tunicColor') }}
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
              {{ showSplitBarColorPicker ? $t('rando.gimmick.done') : $t('rando.gimmick.splitBarColor') }}
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
              {{ showHeartColorPicker ? $t('rando.gimmick.done') : $t('rando.gimmick.heartColor') }}
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
              {{ $t('rando.gimmick.follower.name') }}
            </label>
            <select
              id="opFollower"
              v-model="settings.follower"
              type="select"
              name="opFollower">
              <option value="0">
                {{ $t('rando.gimmick.follower.option1') }}
              </option>
              <option value="1">
                {{ $t('rando.gimmick.follower.option2') }}
              </option>
              <option value="2">
                {{ $t('rando.gimmick.follower.option3') }}
              </option>
              <option value="3">
                {{ $t('rando.gimmick.follower.option4') }}
              </option>
              <option value="4">
                {{ $t('rando.gimmick.follower.option5') }}
              </option>
              <option value="5">
                {{ $t('rando.gimmick.follower.option6') }}
              </option>
              <option value="6">
                {{ $t('rando.gimmick.follower.option7') }}
              </option>
              <option value="7">
                {{ $t('rando.gimmick.follower.option8') }}
              </option>
              <option value="8">
                {{ $t('rando.gimmick.follower.option9') }}
              </option>
            </select>
          </div>

          <div class="options-group">
            <label for="opFuzziness">
              {{ $t('rando.gimmick.fuzziness') }}
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
            {{ $t('rando.additional.name') }}
          </h3>

          <div class="options-group">
            <label for="opPatchFile">
              {{ $t('rando.additional.customPatch') }}
            </label>
            <input
              id="opPatchFile"
              ref="opPatchFile"
              name="opPatchFile"
              type="file" />
          </div>

          <div class="options-group">
            <label for="opLogicFile">
              {{ $t('rando.additional.customLogic') }}
            </label>
            <input
              id="opLogicFile"
              ref="opLogicFile"
              name="opLogicFile"
              type="file" />
          </div>

          <div class="options-group">
            <label for="opSeed">
              {{ $t('rando.additional.seedNumber') }}
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
          :value="$t('rando.randomize')" />
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
            width: 205px;
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
