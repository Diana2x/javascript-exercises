const palindromes = function (string) {
    newString = string.toLowerCase().replace(/[^A-Za-z]/g, ""); 
    return (
    newString
        .split("")
        .reverse()
        .join("")
    == newString
    );   
};

module.exports = palindromes;
