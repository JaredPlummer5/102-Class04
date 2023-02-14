function whodat() {

    let myname = prompt("What is your name?");
    console.log(myname);
     alert("Hello, " + myname);
}

whodat();




function printInput() {
    var input = document.getElementById("inputBox").value + '<br>';
    // <br> tag allow you to create a new line for your comment section
    document.getElementById("sampleText").innerHTML  = input + document.getElementById("sampleText").innerHTML;
    // "+" is how to add more the one input and print it on your website
}

function printIcon() {
    let userChoice = prompt("Chose an icon by typing house, user, star, or hippo!!!!!")
    
    if (userChoice == "house"){
        document.getElementById("houseIcon");

        document.getElementById("userIcon").remove();
        document.getElementById("starIcon").remove();
        document.getElementById("hippoIcon").remove();
//         // document.getElementById("userIcons2").remove();
//         // document.getElementById("userIcons3").remove();
//         // document.getElementById("userIcons4").remove();
//         // document.getElementById("submitBtn1")
//         // document.getElementById("submitBtn2").remove();
//         // document.getElementById("submitBtn3").remove();
//         // document.getElementById("submitBtn4").remove();
    
    
    }else if(userChoice == "user"){

        document.getElementById("userIcon");


        document.getElementById("houseIcon").remove();
        document.getElementById("starIcon").remove();
        document.getElementById("hippoIcon").remove();
//         // document.getElementById("userIcons2");
//         // document.getElementById("userIcons1").remove();
//         // document.getElementById("userIcons3").remove();
//         // document.getElementById("userIcons4").remove();
//         // document.getElementById("submitBtn2")
//         // document.getElementById("submitBtn1").remove();
//         // document.getElementById("submitBtn3").remove();
//         // document.getElementById("submitBtn4").remove();
        
    
    
    }else if(userChoice == "star"){


        document.getElementById("starIcon");


        document.getElementById("houseIcon").remove();
        document.getElementById("userIcon").remove();
        document.getElementById("hippoIcon").remove();
//         // document.getElementById("userIcons3");
//         // document.getElementById("userIcons1").remove();
//         // document.getElementById("userIcons2").remove();
//         // document.getElementById("userIcons4").remove();
//         // document.getElementById("submitBtn3")
//         // document.getElementById("submitBtn1").remove();
//         // document.getElementById("submitBtn2").remove();
//         // document.getElementById("submitBtn4").remove();
        
    
    
    }else if(userChoice == "hippo"){

        document.getElementById("hippoIcon");


        document.getElementById("houseIcon").remove();
        document.getElementById("userIcon").remove();
        document.getElementById("starIcon").remove();


//         // document.getElementById("userIcons4");
//         // document.getElementById("userIcons1").remove();
//         // document.getElementById("userIcons2").remove();
//         // document.getElementById("userIcons3").remove();
//         // document.getElementById("submitBtn4")
//         // document.getElementById("submitBtn1").remove();
//         // document.getElementById("submitBtn2").remove();
//         // document.getElementById("submitBtn3").remove();
        
    
    
    }else{
        alert("ERROR")
    }
}
printIcon();

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

// let rating = prompt("How many star would you rate my website? From 1-5");
//  console.log(rating)


// for (let i = 0; i < rating && i < 5; i++){
//      console.log(i);
//     // Use single quotes for the inside of your code and use double quotes for the out side of the code in the paraenthesis
//     document.write("<img class = 'ratingPictures' src = 'preview.jpg'/>");
// }
 let userAns = "";

 function rating(){
    let rating = prompt("How many star would you rate my website? From 1-5");
    document.getElementById('btn').style.visibility= 'hidden';
    for (let i = 0; i < rating && i < 5; i++){
        document.getElementById("thisPar").innerHTML += "<img class = 'ratingPictures' src = 'preview.jpg'/>"
    }
}


    

