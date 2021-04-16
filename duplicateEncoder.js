function duplicateEncode(word){
  if(!word) {
    return;
  }
  let str = word.toLowerCase();
  let newString = '';
  for(let i = 0; i < str.length; i ++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      newString += '(';
    } else {
      newString += ')';
    }
  }
  return newString;
}
