const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const passwordRegexMay_AZ = /(?=.*[A-Z])/;
const passwordRegexMin_az = /(?=.*[a-z])/;
const passwordRegexDigits = /(?=.*\d)/;
const passwordRegexSpecialCaracter = /(?=.*[@#$%^&+=!_])/;
const passwordRegexLength = /^.{8,}$/;
const passwordRegex = /.*\d+.*/;

module.exports = {
  emailRegex,
  passwordRegexMay_AZ,
  passwordRegexMin_az,
  passwordRegexDigits,
  passwordRegexSpecialCaracter,
  passwordRegexLength,
  passwordRegex,
};
