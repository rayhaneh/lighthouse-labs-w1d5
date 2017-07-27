module.exports = {
  age : function (birthYear) {
    return currentYear() - birthYear;
  }
}

function currentYear () {
  year = new Date().getFullYear();
  return year;
}