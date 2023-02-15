// function whodat() {

//     let myname = prompt("What is your name?");
//     console.log(myname);
//      alert("Hello, " + myname);
// }

// whodat();

// The function above prompts the user to enter their name
// Then the code takes the input and put it in the console 
// Then an alert will pop up and say  "Hello, 'input'"




function printInput() {
    var input = document.getElementById("inputBox").value + '<br>';
    // <br> tag allow you to create a new line for your comment section
    document.getElementById("sampleText").innerHTML  = input + document.getElementById("sampleText").innerHTML;
    // "+" is how to add more the one input and print it on your website
}

let userAns = "";

 function rating(){
    let rating = prompt("How many star would you rate my website? From 1-5");
    document.getElementById('btn').style.visibility= 'hidden';
    for (let i = 0; i < rating && i < 5; i++){
        document.getElementById("thisPar").innerHTML += "<img class = 'ratingPictures' src = 'preview.jpg'/>"
    }
}


function printIcon() {
    let userChoice = prompt("Chose an icon by typing house, user, star, or hippo!!!!!")
    const iconsArray = ["house", "user", "star", "hippo"]

   


    while(userChoice !== iconsArray){
        if (userChoice == iconsArray[0]){
            document.getElementById("houseIcon");


            document.getElementById("userIcon").remove();
            document.getElementById("starIcon").remove();
            document.getElementById("hippoIcon").remove();
    
    
        }else if(userChoice == iconsArray[1]){

            document.getElementById("userIcon");


            document.getElementById("houseIcon").remove();
            document.getElementById("starIcon").remove();
            document.getElementById("hippoIcon").remove();

    
        }else if(userChoice == iconsArray[2]){

            document.getElementById("starIcon");


            document.getElementById("houseIcon").remove();
            document.getElementById("userIcon").remove();
            document.getElementById("hippoIcon").remove();
    
    
        }else if(userChoice == iconsArray[3]){

            document.getElementById("hippoIcon");


            document.getElementById("houseIcon").remove();
            document.getElementById("userIcon").remove();
            document.getElementById("starIcon").remove();
    
        }else{
            alert("ERROR")
        
            userChoice = prompt("Chose an icon by typing house, user, star, or hippo!!!!!")
    
        }
    }
}
printIcon();

let text = prompt("Do you love bees?")
while (text.toLowerCase() != "yes") {

    text = prompt("Do you love bees?");

}


// function tryAgain(){
//     let myUsername = prompt("What is your username?");
//     let secondName = " ";
   
//     while(myUsername != secondName){
//         if (myUsername != secondName){
//             secondName = prompt("Please re-enter your username!")
//         }
//             else{
//                 alert(`Hello ${thisName}!`);
//             }
//         }

//         // Line 93 and 80 has back tic-marks and code (${insert code}) that allows you to use code in a sentence
// }
// tryAgain();

// The function above is working code that prompts the user to enter a user name twice. 
//If the second input doesn't match the first the code will keep them there until the second input matches the first

// let rating = prompt("How many star would you rate my website? From 1-5");
//  console.log(rating)


// for (let i = 0; i < rating && i < 5; i++){
//      console.log(i);
//     // Use single quotes for the inside of your code and use double quotes for the out side of the code in the paraenthesis
//     document.write("<img class = 'ratingPictures' src = 'preview.jpg'/>");
// }
 


    

