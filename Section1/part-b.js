let initialString = prompt("Write the string you want to reverse");

let reverseStringFX = (String) =>{
    let reverseString = '';
    length = String.length;

    for(i =0; i <= String.length; i++){

    reverseString += String.charAt(length);
    length--;
}
return reverseString;
}
console.log(reverseStringFX(initialString));