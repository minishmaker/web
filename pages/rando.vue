<template>
  <div class="container">
    <img
      class="page-img"
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Princess Zelda from Minish Cap" />
    <section class="sub-container">
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
      <section class="settings-buttons-container">
        <div>
          <button
            class="settings-button"
            @click="setRaceSettings()">
            {{ $t('rando.top.weekly') }}
          </button>
          <button
            class="settings-button"
            @click="setRandomSettings()">
            {{ $t('rando.top.random') }}
          </button>
        </div>
        <button
          class="settings-button reset"
          @click="setDefaultSettings()">
          {{ $t('rando.top.reset') }}
        </button>
      </section>

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
              :disabled="raceMode"
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
              :disabled="raceMode"
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
              :disabled="raceMode"
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
              :disabled="raceMode"
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
              :disabled="raceMode"
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
              :disabled="raceMode"
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
              :disabled="raceMode"
              type="checkbox"
              name="opTrapsInItemPool" />
            <label for="opTrapsInItemPool">
              {{ $t('rando.seed.trapsInItemPool') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opOneHitTimer"
              v-model="settings.oneHitTimer"
              :disabled="raceMode"
              type="checkbox"
              name="opOneHitTimer" />
            <label for="opOneHitTimer">
              {{ $t('rando.gimmick.oneHitTimer') }}
            </label>
          </div>

          <div class="options-group">
            <input
              id="opRandomMusic"
              v-model="settings.randomMusic"
              :disabled="raceMode"
              type="checkbox"
              name="opRandomMusic" />
            <label for="opRandomMusic">
              {{ $t('rando.seed.randomMusic') }}
            </label>
          </div>

          <div :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opKinstoneFusion">
              {{ $t('rando.seed.kinstoneFusions.name') }}
            </label>
            <select
              id="opKinstoneFusion"
              v-model="settings.kinstoneFusion"
              :disabled="raceMode"
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
            :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opKinstoneFusionSkips">
              {{ $t('rando.seed.skipFusions.name') }}
            </label>
            <select
              id="opKinstoneFusionSkips"
              v-model="settings.kinstoneFusionSkips"
              :disabled="raceMode"
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

          <div :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opOpenDHC">
              {{ $t('rando.seed.openDHC.name') }}
            </label>
            <select
              id="opOpenDHC"
              v-model="settings.openDHC"
              :disabled="raceMode"
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
            :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opSwordPed">
              {{ $t('rando.seed.swordPed.name') }}
            </label>
            <select
              id="opSwordPed"
              v-model="settings.swordPed"
              :disabled="raceMode"
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
            :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opElementPed">
              {{ $t('rando.seed.elementPed.name') }}
            </label>
            <select
              id="opElementPed"
              v-model="settings.elementPed"
              :disabled="raceMode"
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
              id="opRandomLanguage"
              v-model="settings.randomLanguage"
              :disabled="raceMode"
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
            <button
              class="random-button"
              @click="randomizeColorPicker('tunicColor')">
              🎲
            </button>
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
            <button
              class="random-button"
              @click="randomizeColorPicker('splitBarColor')">
              🎲
            </button>
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
            <button
              class="random-button"
              @click="randomizeColorPicker('heartColor')">
              🎲
            </button>
          </div>

          <div :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opFollower">
              {{ $t('rando.gimmick.follower.name') }}
            </label>
            <select
              id="opFollower"
              v-model="settings.follower"
              :disabled="raceMode"
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

          <div :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opFuzziness">
              {{ $t('rando.gimmick.fuzziness') }}
            </label>
            <span>
              None&nbsp;
            </span>
            <input
              id="opFuzziness"
              v-model="settings.fuzziness"
              :disabled="raceMode"
              type="range"
              name="opFuzziness"
              min="-1"
              max="14" />
            <span>
              &nbsp;Max
            </span>
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
              v-model="settings.seed"
              ref="opSeed"
              type="text"
              name="opSeed"
              title="Numbers only"
              pattern="[0-9]+" />
            <button
              class="random-button"
              @click="randomizeSeed()">
              🎲
            </button>
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

  function randomSeed() {
    return Math.floor(Math.random() * 2147483647).toString();
  }

  const defaultSettings = {
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
    seed: randomSeed(),
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
        raceMode: false,
        settings: Object.assign({}, defaultSettings),
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
      generateSettingsString() {

      },
      updateColorPicker(name, val) {
        this.settings[name] = val.hex;
        this.$refs[`${name}Preview`].style.backgroundColor = val.hex;
      },
      setRaceSettings() {
        this.setDefaultSettings();
        this.settings.trapsInItemPool = true;
        this.settings.kinstoneFusion = '1';
        this.raceMode = true;
      },
      setDefaultSettings() {
        this.settings = Object.assign({}, defaultSettings);
        this.raceMode = false;
        this.updateColorPicker('tunicColor', { hex: defaultSettings.tunicColor, });
        this.updateColorPicker('splitBarColor', { hex: defaultSettings.splitBarColor, });
        this.updateColorPicker('heartColor', { hex: defaultSettings.heartColor, });
      },
      randomizeColorPicker(name) {
        this.updateColorPicker(name, { hex: this.randomColorHex(), });
      },
      randomizeSeed() {
        this.settings.seed = randomSeed();
      },
      randomBoolean() {
        return !!Math.floor(Math.random() * 2);
      },
      randomNumberString(max) {
        return Math.floor(Math.random() * max).toString();
      },
      randomColorHex() {
        const chars = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += chars[Math.floor(Math.random() * chars.length)];
        }
        return color;
      },
      setRandomSettings() {
        this.raceMode = false;
        this.settings.keysanity = this.randomBoolean();
        this.settings.elementsInPool = this.randomBoolean();
        this.settings.disableGlitches = this.randomBoolean();
        this.settings.obscureSpots = this.randomBoolean();
        this.settings.rupeesInPool = this.randomBoolean();
        this.settings.nonSwordWeapons = this.randomBoolean();
        this.settings.trapsInItemPool = this.randomBoolean();
        this.settings.oneHitTimer = this.randomBoolean();
        this.settings.kinstoneFusion = this.randomNumberString(3);
        this.settings.kinstoneFusionSkips = this.randomNumberString(3);
        this.settings.openDHC = this.randomNumberString(4);
        this.settings.swordPed = this.randomNumberString(6);
        this.settings.elementPed = this.randomNumberString(5);
        this.settings.randomMusic = this.randomBoolean();
        this.settings.randomLanguage = this.randomBoolean();
        this.settings.rainbowHearts = this.randomBoolean();
        this.settings.tunicColor = this.randomColorHex();
        this.settings.heartColor = this.randomColorHex();
        this.settings.splitBarColor = this.randomColorHex();
        this.settings.follower = this.randomNumberString(9);
        this.settings.fuzziness = (Math.floor(Math.random() * 16) - 1).toString(); // rolls 0-15 then subtracts 1, making the range -1 to 14

        this.updateColorPicker('tunicColor', { hex: this.settings.tunicColor, });
        this.updateColorPicker('splitBarColor', { hex: this.settings.splitBarColor, });
        this.updateColorPicker('heartColor', { hex: this.settings.heartColor, });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';

  .page-img {
    max-width: 230px;
  }

  .settings-buttons-container {
    display: flex;
    justify-content: space-between;
    margin: 8px 16px;

    div {
      display: inline-block;
    }
  }

  button {
    width: 140px;
    height: 32px;
    padding: 5px;
    font-size: 14px;
    position: relative;
    color: $link-main-color;
    background: $nav-background-color;
    border: 2px solid $nav-border-color;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
      border-color: $button--hover;
    }

    &.random-button {
      width: 32px;
      height: 32px;
      margin-left: 6px;
    }

    &.settings-button {
      width: 150px;

      &.reset {
        width: 90px;
        color: $button--reset;
      }
    }
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

      .color-preview {
        display: inline-block;
        margin-left: 6px;
        width: 32px;
        height: 32px;
        border: 2px solid $nav-border-color;
        border-radius: 2px;

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

        &.disabled {
          & > * {
            color: $nav-border-color;
          }

          label, input[type="range"], span {
            &:hover {
              cursor: not-allowed;
            }
          }
        }

        input {
          &[type="checkbox"] {
            -webkit-appearance:none;
            border: 2px solid $nav-border-color;
            border-radius: 2px;
            width: 16px;
            height: 16px;
            margin-right: 4px;

            &:disabled {
              border-color: $nav-background-color;

              & + label {
                color: $nav-border-color;

                &:hover {
                  cursor: not-allowed;
                }
              }

              &:hover {
                border-color: $nav-background-color;
                cursor: not-allowed;
              }
            }

            &:hover {
              cursor: pointer;
              border-color: $button--hover;
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
            width: 185px;
          }

          &[type="text"] {
            font-size: 14px;
            width: 185px;
            height: 32px;
          }
        }

        select {
          width: 185px;
          padding: 2px;

          &:disabled {
            &:hover {
              cursor: not-allowed;
            }
          }
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
        left: 135px;
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
      transition: font-size 0.75s ease-in-out;

      &:hover {
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
