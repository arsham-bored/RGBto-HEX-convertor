// thank to stackoverflow! https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

const twoDigit = (str) => str.length === 1 ? `0${str}` : str;
const toHex = (num) => num.toString(16);
const clamp = (num) => (num > 255) ? 255 : (num < 0) ? 0 : num;

/**
 * Converts rgb to hex,
 * Will clamp args between 0 and 255
 * @param {number} r - red color
 * @param {number} g - green color
 * @param {number} b - blue color
 * @returns {number} - hex value of color
*/
const rgbToHex = (r = 0, g = 0, b = 0) =>
  [r, g, b]
    .map(clamp)
    .map(toHex)
    .map(twoDigit)
    .reduce((acc, cur) => acc + cur, '#');

module.exports = rgbToHex;
