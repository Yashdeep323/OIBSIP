//Get references to the Celsius and Fahrenheit values
const celsius = document.querySelector("#cel"),
 fahrenheit = document.querySelector("#fah");

//Set focus to the celsius input field when the page loads
 window.addEventListener("load", () => celsius.focus());

//Convert celsius to fahrenheit when celsius value changes
 celsius.addEventListener("input", ()  => {
    fahrenheit.value = ((celsius.value*9)/5 + 32).toFixed(2);
    //Clear fahrenheit input when celsius field is empty
    if(!celsius.value) fahrenheit.value ="";
});

//Convert fahrenheit to celsius when celsius value changes
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32)*5)/9).toFixed(2);
    //Clear celsius input when fahrenheit input is empty
    if(!fahrenheit.value) celsius.value="";
});