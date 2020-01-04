import {
  cloneDeep,
} from 'lodash';

// Parses each double hex value into base 16 and rounds resulting number to nearest 8 multiple
export function roundToNearestEight(num) {
  const remain = num % 8;
  if (remain === 0) {
    return num;
  }
  const adding = remain > 3
    ? (8 - remain)
    : -remain;
  return num + adding;
}

export function convertHexToRGB(hex) {
  const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.exec(hex);
  return {
    r: roundToNearestEight(parseInt(result[1], 16)),
    g: roundToNearestEight(parseInt(result[2], 16)),
    b: roundToNearestEight(parseInt(result[3], 16)),
  };
}

export function randomSeed() {
  return Math.floor(Math.random() * 2147483647).toString();
}

export function randomizeSeed() {
  this.settings.seed = randomSeed();
}

export function randomBoolean() {
  return !!Math.floor(Math.random() * 2);
}

export function randomNumberString(max) {
  return Math.floor(Math.random() * max).toString();
}

export function randomColorHex() {
  const chars = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
}

export function parseSettings(settings) {
  const copiedSettings = cloneDeep(settings);
  copiedSettings.tunicColor = convertHexToRGB(copiedSettings.tunicColor);
  copiedSettings.splitBarColor = convertHexToRGB(copiedSettings.splitBarColor);
  copiedSettings.heartColor = convertHexToRGB(copiedSettings.heartColor);
  copiedSettings.elementPed = parseInt(copiedSettings.elementPed, 10);
  copiedSettings.follower = parseInt(copiedSettings.follower, 10);
  copiedSettings.fuzziness = parseInt(copiedSettings.fuzziness, 10);
  copiedSettings.kinstoneFusion = parseInt(copiedSettings.kinstoneFusion, 10);
  copiedSettings.kinstoneFusionSkips = parseInt(copiedSettings.kinstoneFusionSkips, 10);
  copiedSettings.openDHC = parseInt(copiedSettings.openDHC, 10);
  copiedSettings.seed = parseInt(copiedSettings.seed, 10);
  copiedSettings.swordPed = parseInt(copiedSettings.swordPed, 10);
  console.log(copiedSettings);
  return copiedSettings;
}

export function toPaddedBinary(input) {
  return input.toString(2).padStart(8, '0');
}

export function generateMainSettingsString(parsedSettings) {
  let settings = '';

  // quick way to convert boolean to integer
  settings += parsedSettings.keysanity | 0;
  settings += parsedSettings.elementsInPool | 0;
  settings += parsedSettings.disableGlitches | 0;
  settings += parsedSettings.obscureSpots | 0;
  settings += parsedSettings.rupeesInPool | 0;
  settings += parsedSettings.nonSwordWeapons | 0;
  settings += parsedSettings.trapsInItemPool | 0;
  settings += parsedSettings.oneHitTimer | 0;
  settings += parsedSettings.randomMusic | 0;

  // convert integer to binary string
  settings += toPaddedBinary(parsedSettings.kinstoneFusion);
  settings += toPaddedBinary(parsedSettings.kinstoneFusionSkips);
  settings += toPaddedBinary(parsedSettings.openDHC);
  settings += toPaddedBinary(parsedSettings.swordPed);
  settings += toPaddedBinary(parsedSettings.elementPed);

  console.log('pre base64', settings);
  const encoded = btoa(parseInt(settings, 2));
  return encoded;
}

export function generateGimmickSettingsString(parsedSettings) {
  let settings = '';

  settings += parsedSettings.randomLanguage | 0;
  settings += parsedSettings.rainbowHearts | 0;
  settings += toPaddedBinary(parsedSettings.tunicColor.r);
  settings += toPaddedBinary(parsedSettings.tunicColor.g);
  settings += toPaddedBinary(parsedSettings.tunicColor.b);
  settings += toPaddedBinary(parsedSettings.heartColor.r);
  settings += toPaddedBinary(parsedSettings.heartColor.g);
  settings += toPaddedBinary(parsedSettings.heartColor.b);
  settings += toPaddedBinary(parsedSettings.splitBarColor.r);
  settings += toPaddedBinary(parsedSettings.splitBarColor.g);
  settings += toPaddedBinary(parsedSettings.splitBarColor.b);
  settings += toPaddedBinary(parsedSettings.follower);
  settings += toPaddedBinary(parsedSettings.fuzziness);

  console.log('pre base64', settings);
  const encoded = btoa(parseInt(settings, 2));
  return encoded;
}
