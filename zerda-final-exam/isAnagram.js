'use strict';

function isAnagram(str1, str2) {
  if (str1 && str2 && typeof str1 === 'string' && typeof str2 === 'string') {
    const Str1 = str1.toLowerCase().split('').sort().join('').trim();
    const Str2 = str2.toLowerCase().split('').sort().join('').trim();
    return Str1 === Str2;
  } else {
    throw new Error('This function requires two string as parameter');
  }
}
