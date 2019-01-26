// thank to stackoverflow! https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r = 0, g = 0, b = 0) {

    // my includes ###################################3
  let validateR_step_one = r > 255,
    validateG_step_one = g > 255,
    validateB_step_one = b > 255;

  if (validateR_step_one) {
    r = 255;
  }  if (validateG_step_one) {
    g = 255;
  }  if (validateB_step_one) {
    b = 255;
  }

  let validateR_step_two = r < 0,
    validateG_step_two = g < 0,
    validateB_step_two = b < 0;

  if (validateR_step_two) {
    r = 0;
  }  if (validateG_step_two) {
    g = 0;
  }  if (validateB_step_two) {
    b = 0;
  }

  //###############################################3

   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const hex1 = rgbToHex(257, 512, 1024);
const hex2 = rgbToHex(-1, -128, -512);
const hex3 = rgbToHex(0,0,0)
console.log(`
    every thing is simple,
    if value was more than 255, it will be 255.. like > (257, 512, 1024) >> ${hex1}
    else if value was less than 0, it will be 0.. like > (-1, -128, -512) >> ${hex2}
`)