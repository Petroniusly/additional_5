module.exports = function check(str, bracketsConfig) {
  
  var array = str.split('');
  var stack = [];
   
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (array[j] == bracketsConfig[i][1]) { 
        if (stack[stack.length - 1] == i) {   //next item in array equal last close bracket, 
                                              //delete from stack bracket's last type (bracket was open and close correct)
          stack.pop(i);
          break;
        } else if (array[j] == bracketsConfig[i][0]) { //open-close bracket is both equal and now is open
          stack.push(i);
          break;
        } else {
          return false;
        }
      } else if (array[j] == bracketsConfig[i][0]) { //item in array equal some open bracket, add to stack type of bracket (remember number i)
        stack.push(i);
        break;
      } 
    }
  }
  return stack.length == 0 ? true : false;
}
