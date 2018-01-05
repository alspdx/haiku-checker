import { RomanNumerals } from './../src/js/roman.js';

// User Interface Logic:
$(function() {
  $("#convert-input").submit(function(event) {
    event.preventDefault();
    const numeralizeIt = new RomanNumerals();
    const userInput = $("#number-input").val();
    const output = numeralizeIt.numberCruncher(userInput);
    $("#numeral-output").text(output);
  });
});
