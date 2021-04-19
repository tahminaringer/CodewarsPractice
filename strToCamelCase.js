function toCamelCase(str){
  if(!str) {
    return '';
  }
  const regEx = /[-_]\w/ig;
  return str.replace(regEx, (match) => {
    return match.charAt(1).toUpperCase();
  });
}

toCamelCase('to-camel-case');
toCamelCase('To-camel-case');