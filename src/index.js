module.exports = function check(str, bracketsConfig) {
    let currentBrackets = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if ((str[i] === bracketsConfig[j][0]) && (bracketsConfig[j][0] !== bracketsConfig[j][1])) {
                currentBrackets += str[i];
            } else if (((str[i] === bracketsConfig[j][0]) && (bracketsConfig[j][0] === bracketsConfig[j][1]))) {
                if (currentBrackets[currentBrackets.length - 1] === bracketsConfig[j][1]) {
                    currentBrackets = currentBrackets.slice(0, -1);
                } else {
                    currentBrackets += str[i];
                }
            } else if (str[i] === bracketsConfig[j][1]) {
                if (currentBrackets[currentBrackets.length - 1] === bracketsConfig[j][0]) {
                    currentBrackets = currentBrackets.slice(0, -1);
                } else {
                    return false;
                }
            }
        }
    }
    if (currentBrackets === '') return true;
    return false;
}
