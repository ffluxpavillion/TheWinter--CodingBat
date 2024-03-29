// Warmup-2 -- stringYak

// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

// Examples

// stringYak('yakpak') → pak
// stringYak('pakyak') → pak
// stringYak('yak123ya') → 123ya

function stringYak(str){
  return str.replaceAll('yak','');
}