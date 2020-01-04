<template>
  <div class="container">
    <img
      class="page-img"
      src="~/assets/Princess_Zelda.png"
      alt="Picture of Princess Zelda from Minish Cap" />
    <section class="sub-container">
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
        @submit.prevent="generateSettingsStrings">
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
              {{ $t('rando.seed.keysanityTooltip') }}
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
              {{ $t('rando.seed.elementsInPoolTooltip') }}
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
              {{ $t('rando.seed.obscureSpotsTooltip') }}
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
              {{ $t('rando.seed.nonSwordWeaponsTooltip') }}
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
              {{ $t('rando.seed.oneHitTimer') }}
            </label>
            <tooltip>
              {{ $t('rando.seed.oneHitTimerTooltip') }}
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

          <div :class="{ 'options-group': true, disabled: raceMode }">
            <label for="opKinstoneFusion">
              {{ $t('rando.seed.kinstoneFusions.name') }}
              <tooltip shift-right>
                <template v-if="settings.kinstoneFusion == '0'">
                  {{ $t('rando.seed.kinstoneFusions.option1Tooltip') }}
                </template>
                <template v-else-if="settings.kinstoneFusion == '1'">
                  {{ $t('rando.seed.kinstoneFusions.option2Tooltip') }}
                </template>
                <template v-else-if="settings.kinstoneFusion == '2'">
                  {{ $t('rando.seed.kinstoneFusions.option3Tooltip') }}
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

          <div :class="{ 'options-group': true, disabled: raceMode || settings.kinstoneFusion != '2' }">
            <label for="opKinstoneFusionSkips">
              {{ $t('rando.seed.skipFusions.name') }}
              <tooltip shift-right>
                <template v-if="settings.kinstoneFusionSkips == '0'">
                  {{ $t('rando.seed.skipFusions.option1Tooltip') }}
                </template>
                <template v-else-if="settings.kinstoneFusionSkips == '1'">
                  {{ $t('rando.seed.skipFusions.option2Tooltip') }}
                </template>
                <template v-else-if="settings.kinstoneFusionSkips == '2'">
                  {{ $t('rando.seed.skipFusions.option3Tooltip') }}
                </template>
              </tooltip>
            </label>
            <select
              id="opKinstoneFusionSkips"
              v-model="settings.kinstoneFusionSkips"
              :disabled="raceMode || settings.kinstoneFusion != '2'"
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

          <div :class="{ 'options-group': true, disabled: raceMode }">
            <label for="opOpenDHC">
              {{ $t('rando.seed.openDHC.name') }}
              <tooltip shift-right>
                <template v-if="settings.openDHC == '0'">
                  {{ $t('rando.seed.openDHC.option1Tooltip') }}
                </template>
                <template v-else-if="settings.openDHC == '1'">
                  {{ $t('rando.seed.openDHC.option2Tooltip') }}
                </template>
                <template v-else-if="settings.openDHC == '2'">
                  {{ $t('rando.seed.openDHC.option3Tooltip') }}
                </template>
                <template v-else-if="settings.openDHC == '3'">
                  {{ $t('rando.seed.openDHC.option4Tooltip') }}
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

          <div :class="{ 'options-group': true, disabled: raceMode || parseInt(settings.openDHC, 10) >= 2}">
            <label for="opSwordPed">
              {{ $t('rando.seed.swordPed.name') }}
              <tooltip shift-right>
                <template v-if="settings.swordPed == '0'">
                  {{ $t('rando.seed.swordPed.option1Tooltip') }}
                </template>
                <template v-else-if="settings.swordPed == '1'">
                  {{ $t('rando.seed.swordPed.option2Tooltip') }}
                </template>
                <template v-else-if="settings.swordPed == '2'">
                  {{ $t('rando.seed.swordPed.option3Tooltip') }}
                </template>
                <template v-else-if="settings.swordPed == '3'">
                  {{ $t('rando.seed.swordPed.option4Tooltip') }}
                </template>
                <template v-else-if="settings.swordPed == '4'">
                  {{ $t('rando.seed.swordPed.option5Tooltip') }}
                </template>
                <template v-else-if="settings.swordPed == '5'">
                  {{ $t('rando.seed.swordPed.option6Tooltip') }}
                </template>
              </tooltip>
            </label>
            <select
              id="opSwordPed"
              v-model="settings.swordPed"
              :disabled="raceMode || parseInt(settings.openDHC, 10) >= 2"
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

          <div :class="{ 'options-group': true, disabled: raceMode || parseInt(settings.openDHC, 10) >= 2 }">
            <label for="opElementPed">
              {{ $t('rando.seed.elementPed.name') }}
              <tooltip shift-right>
                <template v-if="settings.elementPed == '0'">
                  {{ $t('rando.seed.elementPed.option1Tooltip') }}
                </template>
                <template v-else-if="settings.elementPed == '1'">
                  {{ $t('rando.seed.elementPed.option2Tooltip') }}
                </template>
                <template v-else-if="settings.elementPed == '2'">
                  {{ $t('rando.seed.elementPed.option3Tooltip') }}
                </template>
                <template v-else-if="settings.elementPed == '3'">
                  {{ $t('rando.seed.elementPed.option4Tooltip') }}
                </template>
                <template v-else-if="settings.elementPed == '4'">
                  {{ $t('rando.seed.elementPed.option5Tooltip') }}
                </template>
              </tooltip>
            </label>
            <select
              id="opElementPed"
              v-model="settings.elementPed"
              :disabled="raceMode || parseInt(settings.openDHC, 10) >= 2"
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
            <button
              v-on-clickaway="closeTunicColorPicker"
              @click.prevent.self="showTunicColorPicker = !showTunicColorPicker">
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
            <button
              v-on-clickaway="closeSplitBarColorPicker"
              @click.prevent.self="showSplitBarColorPicker = !showSplitBarColorPicker">
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

          <div class="options-group">
            <button
              v-on-clickaway="closeHeartColorPicker"
              :disabled="settings.rainbowHearts"
              @click.prevent.self="showHeartColorPicker = !showHeartColorPicker">
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

          <div :class="{ 'options-group': true, disabled: raceMode }">
            <label for="opFollower">
              {{ $t('rando.gimmick.follower.name') }}
              <tooltip
                caution
                shift-right>
                {{ $t('rando.gimmick.follower.warning') }}
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

          <div :class="{ 'options-group': true, disabled: raceMode }">
            <label for="opFuzziness">
              {{ $t('rando.gimmick.fuzziness') }}
              <tooltip
                caution
                shift-right>
                {{ $t('rando.gimmick.fuzzinessWarning') }}
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
              min="0"
              max="15" />
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

          <div class="options-group wide">
            <label for="opMainSettings">
              {{ $t('rando.additional.mainSettingsString') }}
            </label>
            <input
              id="opMainSettings"
              ref="opMainSettings"
              v-model="settings.mainSettingsString"
              type="text"
              name="opMainSettings"
              title="base 64 string" />
            <button
              class="random-button"
              @click.prevent="setMainSettingsString">
              Set
            </button>
          </div>

          <div class="options-group wide">
            <label for="opGimmickSettings">
              {{ $t('rando.additional.gimmickSettingsString') }}
            </label>
            <input
              id="opGimmickSettings"
              ref="opGimmickSettings"
              v-model="settings.gimmickSettingsString"
              type="text"
              name="opGimmickSettings"
              title="base 64 string" />
            <button
              class="random-button"
              @click.prevent="setGimmickSettingsString">
              Set
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
    Chrome as ChromeColorPicker,
  } from 'vue-color';
  import {
    mixin as clickaway,
  } from 'vue-clickaway';

  import Tooltip from '@/components/Tooltip.vue';
  import * as Utils from '@/server/utils.js';

  const headerData = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const defaultSettings = {
    keysanity: false,
    elementsInPool: false,
    disableGlitches: true,
    obscureSpots: false,
    rupeesInPool: false,
    nonSwordWeapons: false,
    trapsInItemPool: false,
    oneHitTimer: false,
    randomMusic: false,
    kinstoneFusion: '0',
    kinstoneFusionSkips: '0',
    openDHC: '0',
    swordPed: '0',
    elementPed: '0',
    randomLanguage: false,
    rainbowHearts: false,
    tunicColor: '#10ff08',
    heartColor: '#ff5010',
    splitBarColor: '#4aff18',
    follower: '0',
    fuzziness: '0',
    seed: Utils.randomSeed(),
    mainSettingsString: '',
    gimmickSettingsString: '',
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

    mixins: [
      clickaway,
    ],

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
      generateSettingsStrings() {
        const parsedSettings = Utils.parseSettings(this.settings);
        const encodedMainSettings = Utils.generateMainSettingsString(parsedSettings);
        const encodedGimmickSettings = Utils.generateGimmickSettingsString(parsedSettings);
        console.log(encodedMainSettings);
        console.log(encodedGimmickSettings);
        this.settings.mainSettingsString = encodedMainSettings;
        this.settings.gimmickSettingsString = encodedGimmickSettings;
      },
      updateColorPicker(name, val) {
        this.settings[name] = val.hex;
        this.$refs[`${name}Preview`].style.backgroundColor = val.hex;
      },
      closeTunicColorPicker(name) { this.showTunicColorPicker = false; },
      closeSplitBarColorPicker(name) { this.showSplitBarColorPicker = false; },
      closeHeartColorPicker(name) { this.showHeartColorPicker = false; },
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
      setMainSettingsString(e) {
        this.settings.mainSettingsString = e.target.value;
      },
      setGimmickSettingsString(e) {
        this.settings.mainSettingsString = e.target.value;
      },
      randomizeColorPicker(name) {
        this.updateColorPicker(name, { hex: Utils.randomColorHex(), });
      },
      setRandomSettings() {
        this.raceMode = false;
        this.settings.keysanity = Utils.randomBoolean();
        this.settings.elementsInPool = Utils.randomBoolean();
        this.settings.disableGlitches = Utils.randomBoolean();
        this.settings.obscureSpots = Utils.randomBoolean();
        this.settings.rupeesInPool = Utils.randomBoolean();
        this.settings.nonSwordWeapons = Utils.randomBoolean();
        this.settings.trapsInItemPool = Utils.randomBoolean();
        this.settings.oneHitTimer = Utils.randomBoolean();
        this.settings.kinstoneFusion = Utils.randomNumberString(3);
        this.settings.kinstoneFusionSkips = Utils.randomNumberString(3);
        this.settings.openDHC = Utils.randomNumberString(4);
        this.settings.swordPed = Utils.randomNumberString(6);
        this.settings.elementPed = Utils.randomNumberString(5);
        this.settings.randomMusic = Utils.randomBoolean();
        this.settings.randomLanguage = Utils.randomBoolean();
        this.settings.rainbowHearts = Utils.randomBoolean();
        this.settings.tunicColor = Utils.randomColorHex();
        this.settings.heartColor = Utils.randomColorHex();
        this.settings.splitBarColor = Utils.randomColorHex();
        this.settings.follower = Utils.randomNumberString(9);
        this.settings.fuzziness = (Math.floor(Math.random() * 16)).toString();

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
