import {
  cloneDeep,
} from 'lodash';

const mainBase64Length = 49;
const gimmickBase64Length = 90;

// Parses each double hex value into base 16 and rounds resulting number to nearest 8 multiple
export function roundToNearestEight(num) {
  const remain = num % 8;
  // don't round 255 to 256 and cause overflows :)
  if (remain === 0 || num === 255) {
    return num;
  }
  const adding = remain > 3
    ? (8 - remain)
    : -remain;
  return num + adding;
}

function convertHexToRGB(hex) {
  const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.exec(hex);
  return {
    r: roundToNearestEight(parseInt(result[1], 16)),
    g: roundToNearestEight(parseInt(result[2], 16)),
    b: roundToNearestEight(parseInt(result[3], 16)),
  };
}

function convertRGBToHex(r, g, b) {
  r = r.toString(16).padStart(2, '0');
  g = g.toString(16).padStart(2, '0');
  b = b.toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
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
  return copiedSettings;
}

function toPaddedBinary(input) {
  return input.toString(2).padStart(8, '0');
}

function binaryStringToUintArray(binary) {
  const converted = new Uint8Array(Math.ceil(binary.length / 8));
  let i = 0;
  for (let pointer = 0; pointer - 8 < binary.length; pointer += 8) {
    const temp = binary.substring(pointer, pointer + 8);
    converted[i] = parseInt(temp, 2);
    i++;
  }
  return converted;
}

function uintArrayToBinaryString(uintArr) {
  uintArr = uintArr.split(',');
  let converted = '';
  for (let i = 0; i < uintArr.length; i++) {
    const temp = parseInt(uintArr[i], 10);
    converted += toPaddedBinary(temp);
  }
  return converted;
}

export function encodeMainSettingsString(parsedSettings) {
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

  const arrayed = binaryStringToUintArray(settings);
  const encoded = btoa(arrayed);
  return encoded;
}

function decodeHelper(settings) {
  // decode to decimal number, parse to number, turn into binary format
  let decode = atob(settings);
  decode = uintArrayToBinaryString(decode);
  return decode;
}

export function decodeMainSettingsString(settings) {
  const decoded = {};
  const decodedSettings = decodeHelper(settings, mainBase64Length);

  decoded.keysanity = decodedSettings[0] === '1';
  decoded.elementsInPool = decodedSettings[1] === '1';
  decoded.disableGlitches = decodedSettings[2] === '1';
  decoded.obscureSpots = decodedSettings[3] === '1';
  decoded.rupeesInPool = decodedSettings[4] === '1';
  decoded.nonSwordWeapons = decodedSettings[5] === '1';
  decoded.trapsInItemPool = decodedSettings[6] === '1';
  decoded.oneHitTimer = decodedSettings[7] === '1';
  decoded.randomMusic = decodedSettings[8] === '1';

  decoded.kinstoneFusion = parseInt(decodedSettings.substring(9, 17), 2);
  decoded.kinstoneFusionSkips = parseInt(decodedSettings.substring(17, 25), 2);
  decoded.openDHC = parseInt(decodedSettings.substring(25, 33), 2);
  decoded.swordPed = parseInt(decodedSettings.substring(33, 41), 2);
  decoded.elementPed = parseInt(decodedSettings.substring(41, 49), 2);

  return decoded;
}

export function encodeGimmickSettingsString(parsedSettings) {
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

  const arrayed = binaryStringToUintArray(settings);
  const encoded = btoa(arrayed);
  return encoded;
}

export function decodeGimmickSettingsString(settings) {
  const decoded = {};
  const decodedSettings = decodeHelper(settings, gimmickBase64Length);

  const decodedTunicColorR = parseInt(decodedSettings.substring(2, 10), 2);
  const decodedTunicColorG = parseInt(decodedSettings.substring(10, 18), 2);
  const decodedTunicColorB = parseInt(decodedSettings.substring(18, 26), 2);
  const decodedHeartColorR = parseInt(decodedSettings.substring(26, 34), 2);
  const decodedHeartColorG = parseInt(decodedSettings.substring(34, 42), 2);
  const decodedHeartColorB = parseInt(decodedSettings.substring(42, 50), 2);
  const decodedSplitBarColorR = parseInt(decodedSettings.substring(50, 58), 2);
  const decodedSplitBarColorG = parseInt(decodedSettings.substring(58, 66), 2);
  const decodedSplitBarColorB = parseInt(decodedSettings.substring(66, 74), 2);

  decoded.randomLanguage = decodedSettings[0] === '1';
  decoded.rainbowHearts = decodedSettings[1] === '1';
  decoded.tunicColor = convertRGBToHex(decodedTunicColorR, decodedTunicColorG, decodedTunicColorB);
  decoded.heartColor = convertRGBToHex(decodedHeartColorR, decodedHeartColorG, decodedHeartColorB);
  decoded.splitBarColor = convertRGBToHex(decodedSplitBarColorR, decodedSplitBarColorG, decodedSplitBarColorB);
  decoded.follower = parseInt(decodedSettings.substring(74, 82), 2);
  decoded.fuzziness = parseInt(decodedSettings.substring(82, 90), 2);

  return decoded;
}
