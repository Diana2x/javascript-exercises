const reverseString = function(str) {
    return str
    .split('')
    .reverse()
    .join('');
};

reverseString("hello there");

module.exports = reverseString;

