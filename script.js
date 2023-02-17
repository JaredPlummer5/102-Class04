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
        document.getElementById("thisPar").innerHTML += "<img class = 'ratingPictures' src = 'preview.jpg'/>";
    }
}


function printIcon(iconName) { 
    // This line starts a new function called printIcon that accepts a parameter called iconName.
    const iconsArray = ["house", "user", "star", "hippo"]; 
    // This line creates an array called iconsArray that contains 
    // four string values representing the names of different icons.
    
    for (let i = 0; i < iconsArray.length; i++) { 
        // This line starts a for loop that iterates through each item in the iconsArray array. 
        //The let keyword creates a new variable called i that is used to keep track of the current iteration.
     
     
        const iconId = iconsArray[i] + "Icon"; 
      // This line creates a new string variable called iconId that combines 
      // the current item in the iconsArray array with the string "Icon". 
      // This is done to create a unique ID for each HTML element that represents an icon.
      
      
      const iconElement = document.getElementById(iconId); 
      // This line uses the document.getElementById() method to select an 
      // HTML element with an ID that matches the iconId string.
    
      if (iconsArray[i] === iconName) {       
        // This if statement checks if the current item in the iconsArray array is equal to the iconName parameter. 
        iconElement.style.display = "block"; 
        // If it is, then it sets the style.display property of the corresponding HTML element to "block"
        // , which makes the icon visible.
        
        
      } else { 
        iconElement.style.display = "none"; 
        // If it is not, then it sets the style.display property to "none", which hides the icon.
      }
    }
  }


  const modal = document.querySelector('.modal');
  const okBtn = document.querySelector('#ok-btn');
  const okBtn2 = document.querySelector('#ok-btn2');
  const okBtn3 = document.querySelector('#ok-btn3');
  const okBtn4 = document.querySelector('#ok-btn4');
  // These lines use the document.querySelector() method to 
  // select several HTML elements and assign them to variables. 

  // The first line selects an element with a class of "modal", 
  // while the next five lines select buttons with different IDs.
  
  
  
  okBtn.addEventListener('click', () => { 
    //This line sets up an event listener for the okBtn element. 
     modal.style.display = 'none';         
     printIcon('house');                   
    });
    // When this button is clicked, the callback function sets the style.display property of the modal element to "none"
    //, and then calls the printIcon function with the argument 'house'.
  
  okBtn2.addEventListener('click', () => {
      modal.style.display = 'none';         
      printIcon('user');                   
    });
    // This line sets up an event listener for the okBtn2 element
    // , which has the same functionality as the previous event listener,
    // but calls the printIcon function with the argument 'user'.
    
    okBtn3.addEventListener('click', () => { 
      modal.style.display = 'none';           
      printIcon('star');                      
    });

    // This line sets up an event listener for the okBtn3 element, 
    // which has the same functionality as the previous event listeners, 
    // but calls the printIcon function with the argument 'star'.
  
  okBtn4.addEventListener('click', () => {
    modal.style.display = 'none';
    printIcon('hippo');
  });
  // This line sets up an event listener for the okBtn4 element, 
    // which has the same functionality as the previous event listeners, 
    // but calls the printIcon function with the argument 'hippo'.
  
//   cancelBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//     printIcon();
//   });
  
modal.style.display = 'block';
// show the modal
  




// let text = prompt("Do you love bees?")
// while (text.toLowerCase() != "yes") {

//     text = prompt("Do you love bees?");

// }




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
 




// function whodat() {

//     let myname = prompt("What is your name?");
//     console.log(myname);
//      alert("Hello, " + myname);
// }

// whodat();

// The function above prompts the user to enter their name
// Then the code takes the input and put it in the console 
// Then an alert will pop up and say  "Hello, 'input'"



    // function printIcon() {
    
    //     userChoice = prompt("Chose an icon by typing house, user, star, or hippo!!!!!");
    //     const iconsArray = ["house", "user", "star", "hippo"];
    
    //     while(userChoice !== iconsArray){
    //         if (userChoice == iconsArray[0]){
    //             document.getElementById("houseIcon");
    
    
    //             document.getElementById("userIcon").remove();
    //             document.getElementById("starIcon").remove();
    //             document.getElementById("hippoIcon").remove();
        
        
    //         }else if(userChoice == iconsArray[1]){
    
    //             document.getElementById("userIcon");
    
    
    //             document.getElementById("houseIcon").remove();
    //             document.getElementById("starIcon").remove();
    //             document.getElementById("hippoIcon").remove();
    
        
    //         }else if(userChoice == iconsArray[2]){
    
    //             document.getElementById("starIcon");
    
    
    //             document.getElementById("houseIcon").remove();
    //             document.getElementById("userIcon").remove();
    //             document.getElementById("hippoIcon").remove();
        
        
    //         }else if(userChoice == iconsArray[3]){
    
    //             document.getElementById("hippoIcon");
    
    
    //             document.getElementById("houseIcon").remove();
    //             document.getElementById("userIcon").remove();
    //             document.getElementById("starIcon").remove();
        
    //         }else{
    //             alert("ERROR")
            
    //             userChoice = prompt("Chose an icon by typing house, user, star, or hippo!!!!!");
        
    //         }
    //     }
    // }
    
    // printIcon();

    

