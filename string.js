function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


function countOcurrences(str, value) {
  var regExp = new RegExp(value, "gi");
  return (str.match(regExp) || []).length;
}


var prefixNum = function(num, totalLength) {
  var needFixLength = totalLength - (num + '').length;
  if(needFixLength) {
    for (var i = 0; i < needFixLength; i++) {
      num = '0' + num
    }
  }
  return num;
}

