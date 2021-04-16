function disemvowel(str) {
  let newStr = str.split('');
  for(i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      newStr[i] = '';
    }
  }
  return newStr.join('');
}