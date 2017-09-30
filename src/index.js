module.exports = function check(str, bracketsConfig) {
  
  var array = str.split('');
/* 
  First bad idea for loop the look only number open/closed brackets without positionin string
  for (var i = 0; i < bracketsConfig.length; i++) {
    var open = bracketsConfig[i][0];
    var close = bracketsConfig[i][1];
    var count = 0;
    var countArr = [];

    for (var j = 0; j < array.length; j++) {
      if (array[j] == open) {
        count++;
        countArr.push( ' + ');
      }
      if (array[j] == close) {
        count--;
        countArr.push('- ');}
      if (count < 0) {
        //return count + ' : ' + countArr.join('');
        return false;
      }
    }

    if (count > 0) {
      //return count + ' : ' + countArr.join('');
      return false;
    }

    //return count + ' : ' + countArr.join('');
  }
  
  //return count + ' : ' + countArr.join('');
  return true;

*/

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
          //return 'first false : ' + stack;
          return false;
        }
      } else if (array[j] == bracketsConfig[i][0]) { //item in array equal some open bracket, add to stack type of bracket (remember number i)
        stack.push(i);
        break;
      } 
    }
  }
  //return 'finish, stack is ' + stack;
  return stack.length == 0 ? true : false;
}
