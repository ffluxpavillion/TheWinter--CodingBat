// Warmup-1 -- in3050

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// Examples

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a, b){
  const in3040 = (a >= 30 && a <= 40) && (b >= 30 && b <= 40)
  const in4050 = (a >= 40 && a <= 50) && (b >= 40 && b <= 50)

  return in3040 || in4050
}
