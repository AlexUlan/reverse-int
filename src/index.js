module.exports = function reverse(n) {
    let stringNumber = Math.abs(n).toString();
    return stringNumber.split("").reverse().join("");
};
