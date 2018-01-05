import { RomanNumerals } from './../src/js/roman.js';

describe('RomanNumerals', function() {

  let newRomanNumeral;

  beforeEach(function() {
    newRomanNumeral = new RomanNumerals()
  });

  it('should return an empty sting in place of any non-integer input', function() {
    expect(newRomanNumeral.numberCruncher('g')).toEqual('')
  });

  it('should return an error message if a number higher than "3999" is inputted', function() {
    expect(newRomanNumeral.numberCruncher('4000')).toEqual('There are no Roman Numerals higher than 3999, try again.')
  });

  it('should return "I" if input is "1"', function() {
    expect(newRomanNumeral.numberCruncher('1')).toEqual('I')
  });

  it('should return "II" if input is "2"', function() {
    expect(newRomanNumeral.numberCruncher('2')).toEqual('II')
  })

  it('should return "IV" if input is "4"', function() {
    expect(newRomanNumeral.numberCruncher('4')).toEqual('IV')
  })

  it('should return "X" if input is "10"', function() {
    expect(newRomanNumeral.numberCruncher('10')).toEqual('X')
  })

  it('should return "XX" if input is "20"', function() {
    expect(newRomanNumeral.numberCruncher('20')).toEqual('XX')
  })

  it('should return "XXI" if input is "21"', function() {
    expect(newRomanNumeral.numberCruncher('21')).toEqual('XXI')
  })

});
