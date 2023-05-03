"use strict";

function convertFToC(currentTemp) {
    let Celsius= 5/9 *(currentTemp-32);
    
    console.log("The current temp in Fahrenheit is " + currentTemp);  
    displayconvertFtoC(Celsius);   
    
    return Celsius; 
}

function displayconvertFtoC(celsiusValue) {
    console.log ("The temperature in Celsius is " + celsiusValue); 

}

convertFToC(212);
