module.exports = function check(str, bracketsConfig) {
let key = bracketsConfig.map(item => item.join(''))

for (let i = 0; i < key.length; i++) {
    if (str.includes(key[i])) {
        str = str.replace(key[i], '');
        i = -1;
    }
}
return str.length === 0 ? true : false;
}
