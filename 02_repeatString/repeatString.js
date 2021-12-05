
const repeatString = function(str, times) {
     if (times>0){
         return str.repeat(times);
     } else {
         return ""
     }

};

repeatString("hey",3);

module.exports = repeatString;
