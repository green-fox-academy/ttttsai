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
