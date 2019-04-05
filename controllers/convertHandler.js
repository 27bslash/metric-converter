/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function (input) {
    let unitList = ['gal', 'l', 'kg', 'lbs', 'mi', 'km']
    let result;
    let validFraction = /^([1-9]\d*(\.\d+)?)[/](\d+(\.\d+)?)$/g //regex match fractions
    let validDecimal = /^\d+(\.\d+)?$/ //regex match decimals
    let split = input.replace(/[^0-9./]/gi, '')
    if (validDecimal.test(split)) {
      result = Number(split)
    } else if (validFraction.test(split)) {
      let separate = split.split('/')
      let fraction = separate[0] / separate[1];
      result = fraction
    } else if (split.length === 0) {
      result = 1;
    } else {
      result = 'invalid number'
    }
    return result;
  };

  this.getUnit = function (input) {
    var result;
    let unitList = ['gal', 'l', 'kg', 'lbs', 'mi', 'km'];
    let units = input.toLowerCase()
    let split = units.replace(/[^a-z]/gi, '')
    if (unitList.includes(split)) {
      result = split;
    } else {
      result = 'invalid units';
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    const units = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      kg: 'lbs',
      lbs: 'kg',
      km: 'mi'
    }
    return units[initUnit]
  };

  this.spellOutUnit = function (unit) {
    const units = {
      gal: 'gallons',
      l: 'litres',
      mi: 'miles',
      kg: 'kilograms',
      lbs: 'pounds',
      km: 'kilometers'
    }

    return units[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    const convertTable = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg
    };

    result = Math.round(initNum * convertTable[initUnit] * 10 ** 5) / 10 ** 5;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    // var string = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit) + '.'
    // var result = 'initNum: '+ initNum + ', ' + 'initUnit: '+ initUnit + ', ' + 'returnNum: ' + returnNum + ', ' + 'string: ' + string
    // return string;
    result = initNum + ' ' + this.spellOutUnit(initUnit)
      + ' converts to ' + returnNum + ' '
      + this.spellOutUnit(returnUnit);

    return result;
  }

}
module.exports = ConvertHandler;
