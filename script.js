// let apple = 1;
// let myname = '';

// function applepie(){
//     let ingredientX = 5;
//     console.log(apple);
// }

// let pie2 = function(cinnamon) {

//     console.log(apple + cinnamon);

// }

// // console.log(ingredientX);

// applepie();
// pie2(9)

function whodat() {

    let myname = prompt("What is your name?");
    if (myname != 'Jared') {
        alert('ERROR HACKER ERROR');
    } else {
    alert("Hello, " + myname);
    }
}

whodat();




function printInput() {
    var input = document.getElementById("inputBox").value + '<br>';
    // <br> tag allow you to create a new line for your comment section
    document.getElementById("sampleText").innerHTML  = input + document.getElementById("sampleText").innerHTML;
    // This is how to add more the one input and print it on your website
}




function loveTheBees() {

    let text = prompt("Do you love bees");
    if (text != 'Yes'){
        alert("You're not nice.")
    } 

}

printSupport();