// String-3 -- gHappy

// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

// Examples

// gHappy('xxggxx') → true
// gHappy('xxgxx') → false
// gHappy('xxggyygxx') → false

function gHappy(str){

  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) === 'g'){
      if (!(str.charAt(i - 1) === 'g' || str.charAt(i + 1) === 'g')){
        return false;
      }
    }
  }
  return true;
}