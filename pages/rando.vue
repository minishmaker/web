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
            <tooltip>
              Keysanity is a version of the randomizer that shuffles dungeon items (small keys, big keys, maps and compasses) into the global item pool, so a key for the dungeon you are in could be found anywhere!
            </tooltip>
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
            <tooltip>
              Instead of the elements being rewards for completing certain dungeons, the elements can be found in any normal item location.
            </tooltip>
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
            <tooltip>
              This adds many additional item locations to the randomizer such as inside pots, digging the ground and diving underwater. There is an option to view these locations on the tracker.
            </tooltip>
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
            <tooltip>
              You can be expected to use the bow or bombs as a weapon in place of the sword for certain fights.
            </tooltip>
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
            <tooltip>
              When you start a seed with this enabled, you have a 30 minute timer that counts down. When it hits zero, you enter OHKO mode where you die to the next source of damage. Clocks are placed into the item pool that add time to the timer.
            </tooltip>
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
              <tooltip shift-right>
                <template v-if="settings.kinstoneFusion == '0'">
                  All of the non-gold kinstone fusions in the game are disabled. don’t worry you don’t need to do any of them to beat the game.
                </template>
                <template v-else-if="settings.kinstoneFusion == '1'">
                  All the non-gold kinstone fusions have been auto-completed, and all the item locations behind those fusions are available to collect.
                </template>
                <template v-else-if="settings.kinstoneFusion == '2'">
                  All the non-gold kinstone fusions can be activated like normal, however there is no logic for this yet so you will never be considered to do fusion trades to access items.
                </template>
              </tooltip>
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
              <tooltip shift-right>
                <template v-if="settings.kinstoneFusionSkips == '0'">
                  The cutscenes for each  of the non-gold kinstone fusions in the game can be skipped by pressing a button during the cutscene.
                </template>
                <template v-else-if="settings.kinstoneFusionSkips == '1'">
                  The cutscenes for all the non-gold kinstone fusions will instantly skip once you trigger the fusion.
                </template>
                <template v-else-if="settings.kinstoneFusionSkips == '2'">
                  None of the non-gold kinstone fusion cutscenes can be skipped.
                </template>
              </tooltip>
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
              <tooltip shift-right>
                <template v-if="settings.openDHC == '0'">
                  Going to the pedestal in the basement of hyrule with the required items opens DHC, then you complete DHC and beat Vaati like normal.
                </template>
                <template v-else-if="settings.openDHC == '1'">
                  Going to the pedestal in the basement of hyrule castle with the required items finishes the game, no need to complete DHC or kill vaati.
                </template>
                <template v-else-if="settings.openDHC == '2'">
                  DHC is open from the start of the game, the pedestal does nothing.
                </template>
                <template v-else-if="settings.openDHC == '3'">
                  DHC is open from the start of the game with the pedestal having three items obtained progressively after 2, 3, and 4 elements.
                </template>
              </tooltip>
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
              <tooltip shift-right>
                <template v-if="settings.openDHC == '0'">
                  Pedestal does not require any sword.
                </template>
                <template v-else-if="settings.openDHC == '1'">
                  Pedestal requires the smith (1st) sword or higher.
                </template>
                <template v-else-if="settings.openDHC == '2'">
                  Pedestal requires the white (2nd) sword or higher.
                </template>
                <template v-else-if="settings.openDHC == '3'">
                  Pedestal requires the red (3rd) sword or higher.
                </template>
                <template v-else-if="settings.openDHC == '4'">
                  Pedestal requires the blue (4th) sword or higher.
                </template>
                <template v-else-if="settings.openDHC == '5'">
                  Pedestal requires the four (5th) sword.
                </template>
              </tooltip>
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
              <tooltip shift-right>
                <template v-if="settings.openDHC == '0'">
                  Pedestal requires all 4 elements.
                </template>
                <template v-else-if="settings.openDHC == '1'">
                  Pedestal requires 3 elements.
                </template>
                <template v-else-if="settings.openDHC == '2'">
                  Pedestal requires 2 elements.
                </template>
                <template v-else-if="settings.openDHC == '3'">
                  Pedestal requires 1 element.
                </template>
                <template v-else-if="settings.openDHC == '4'">
                  Pedestal requires no elements.
                </template>
              </tooltip>
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
              @click.prevent="randomizeColorPicker('tunicColor')">
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
              @click.prevent="randomizeColorPicker('splitBarColor')">
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
              @click.prevent="randomizeColorPicker('heartColor')">
              🎲
            </button>
          </div>

          <div :class="['options-group', raceMode ? 'disabled' : '']">
            <label for="opFollower">
              {{ $t('rando.gimmick.follower.name') }}
              <tooltip
                caution
                shift-right>
                This feature is prone to graphical glitches and possible issues with gameplay. It has not been tested as well as the other features and are advised to exercise caution when enabling a follower.
              </tooltip>
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
              <tooltip
                caution
                shift-right>
                Adds the screen transition effect to the whole screen all the time, making everything blurry. <br /><br /> This can be seizure inducing! Please do not use this option if you are prone to seizures!
              </tooltip>
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
            <label for="opSeed">
              {{ $t('rando.additional.seedNumber') }}
            </label>
            <input
              id="opSeed"
              ref="opSeed"
              v-model="settings.seed"
              type="text"
              name="opSeed"
              title="Numbers only"
              pattern="[0-9]+" />
            <button
              class="random-button"
              @click.prevent="randomizeSeed()">
              🎲
            </button>
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
            <label for="opPatchFile">
              {{ $t('rando.additional.customPatch') }}
            </label>
            <input
              id="opPatchFile"
              ref="opPatchFile"
              name="opPatchFile"
              type="file" />
          </div>
        </section>

        <section class="rom-randomize">
          <div class="options-group">
            <label for="rom">
              {{ $t('rando.romLabel') }}
            </label>
            <input
              ref="romInput"
              required
              name="romFile"
              type="file" />
          </div>

          <input
            class="rando-submit"
            type="submit"
            :value="$t('rando.randomize')" />
        </section>
      </form>
    </section>
  </div>
</template>

<script>
  import {
    cloneDeep,
  } from 'lodash';
  import {
    Chrome as ChromeColorPicker,
  } from 'vue-color';

  import Tooltip from '@/components/Tooltip.vue';

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
      Tooltip,
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
        const copiedSettings = cloneDeep(this.settings);
        copiedSettings.tunicColor = this.convertHexToRGB(copiedSettings.tunicColor);
        copiedSettings.splitBarColor = this.convertHexToRGB(copiedSettings.splitBarColor);
        copiedSettings.heartColor = this.convertHexToRGB(copiedSettings.heartColor);
        copiedSettings.elementPed = parseInt(copiedSettings.elementPed, 10);
        copiedSettings.follower = parseInt(copiedSettings.follower, 10);
        copiedSettings.fuzziness = parseInt(copiedSettings.fuzziness, 10);
        copiedSettings.kinstoneFusion = parseInt(copiedSettings.kinstoneFusion, 10);
        copiedSettings.kinstoneFusionSkips = parseInt(copiedSettings.kinstoneFusionSkips, 10);
        copiedSettings.openDHC = parseInt(copiedSettings.openDHC, 10);
        copiedSettings.seed = parseInt(copiedSettings.seed, 10);
        copiedSettings.swordPed = parseInt(copiedSettings.swordPed, 10);
        console.log(copiedSettings);
      },
      // Parses each double hex value into base 16 and rounds resulting number to nearest 8 multiple
      convertHexToRGB(hex) {
        const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.exec(hex);
        return {
          r: this.roundToNearestEight(parseInt(result[1], 16)),
          g: this.roundToNearestEight(parseInt(result[2], 16)),
          b: this.roundToNearestEight(parseInt(result[3], 16)),
        };
      },
      roundToNearestEight(num) {
        const remain = num % 8;
        if (remain === 0) {
          return num;
        }
        const adding = remain > 3
          ? (8 - remain)
          : -remain;
        return num + adding;
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
  @import '~@/assets/rando-styles';
</style>
