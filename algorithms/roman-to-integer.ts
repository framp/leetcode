const romanToIntDict: Record<string, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function romanToInt(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] && s[i + 1] && romanToIntDict[s[i] + s[i + 1]]) {
      res += romanToIntDict[s[i] + s[i + 1]];
      i++;
    } else {
      if (romanToIntDict[s[i]]) {
        res += romanToIntDict[s[i]];
      }
    }
  }
  return res;
}
console.log(romanToInt("DCXXI"));
