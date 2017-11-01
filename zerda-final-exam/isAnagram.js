'use strict';

function isAnagram(str1, str2) {
  if (str1 && str2 && typeof str1 === 'string' && typeof str2 === 'string') {
    const word1 = str1.toLowerCase().split('').sort().join('').trim();
    const word2 = str2.toLowerCase().split('').sort().join('').trim();
    return word1 === word2;
  } else {
    throw new Error('This function requires two string as parameter');
  }
}

function isAnagram2(str1, str2) {
  if (str1 && str2 && typeof str1 === 'string' && typeof str2 === 'string') {
    let str1Count = {};
    for (let i = 0; i < str1.length; i++) {
      const ch = str1[i];
      if (ch !== ' ') {
        str1Count[ch] = str1Count[ch] ? str1Count[ch] + 1 : 1; 
      }
    }
    for (let j = 0; j < str2.length; j++) {
      const ch = str2[j];
      if (ch !== ' ') {
        if(!str1Count[str2[i]]) {
          return false;
        } else {
          str1Count[str2[i]] -= 1;
        }
      }
    }
    const str1CountKeys = Object.keys(str1Count);
    for (let k = 0; k < str1CountKeys.length; k++) {
      // will check str1Count's value
      // make sure all the value in it is 0
    }
  } else {
    throw new Error('This function requires two string as parameter');
  }
}
