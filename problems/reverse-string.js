
module.exports = function reverseString(string) {
  if(typeof string !== "string"){
    throw new TypeError("input must be string")
  }
  return string.split("").reverse().join("")
};

