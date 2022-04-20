// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'

function calculateCelsius() {
  
  // input
  let fahrenheit = parseFloat(document.getElementById('fahrenheit-to-celsius').value)
  
  // process
  let celsius = (fahrenheit - 32) * 5/9
  
  // output
  document.getElementById('celsius-answers').innerHTML = 'The temperature celsius is: ' + celsius.toFixed(2) + ' ° '
}