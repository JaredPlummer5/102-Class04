function whodat() {

    let myname = prompt("What is your name?");
    console.log(myname);
     alert("Hello, " + myname);
}

whodat();




function printInput() {
    var input = document.getElementById("inputBox").value + '<br>';
    let x = document.getElementById("Icons").innerHTML
    console.log(x)
    // <br> tag allow you to create a new line for your comment section
    document.getElementById("sampleText").innerHTML  = document.getElementById("Icons").innerHTML + input + document.getElementById("sampleText").innerHTML;
    // "+" is how to add more the one input and print it on your website

}


let text = prompt("Do you love bees?")
while (text.toLowerCase() != "yes") {

    text = prompt("Do you love bees?");

}


function tryAgain(){
    let myUsername = prompt("What is your username?");
    let secondName = " ";
   
    while(myUsername != secondName){
        if (myUsername != secondName){
            secondName = prompt("Please re-enter your username!")
        }
            else{
                alert(`Hello ${thisName}!`);
            }
        }

        // Line 93 and 80 has back tic-marks and code (${insert code}) that allows you to use code in a sentence
}
tryAgain();

let rating = prompt("How many star would you rate my website? From 1-5");
 console.log(rating)


for (let i = 0; i < rating && i < 5; i++){
     console.log(i);
    // Use single quotes for the inside of your code and use double quotes for the out side of the code in the paraenthesis
    document.write("<img class = 'ratingPictures' src = 'preview.jpg'/>");
}

    

