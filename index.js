class StringMethods {
    static replaceCount(str, oldSubstr, newSubstr, count) {
      let occurrences = 0;
      return str.replace(new RegExp(oldSubstr, 'g'), (match) => {
        occurrences++;
        return occurrences <= count ? newSubstr : match;
      });
    }
  
    static count(str, substr) {
      return (str.match(new RegExp(substr, 'g')) || []).length;
    }
  
    static isAlnum(str) {
      return /^[a-z0-9]+$/i.test(str);
    }
  
    static isDigit(str) {
      return /^\d+$/.test(str);
    }
  
    static isLower(str) {
      return /^[a-z]+$/.test(str);
    }
  
    static isUpper(str) {
      return /^[A-Z]+$/.test(str);
    }
  
    static isSpace(str) {
      return /^\s+$/.test(str);
    }
  
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  
    static title(str) {
      return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
    }
  }
  
  module.exports = StringMethods;
  