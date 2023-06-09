// let user_input = prompt('Enter your name')

// alert(`Welcome to the page ${user_input}!`)

// let clickMe = document.querySelector('button')
// console.log(clickMe) 

// function buttonClick(event) {
//     alert(`Ouch!`);
//     clickMe.removeEventListener('click', buttonClick)
//     console.log(event)
//     event.stopImmediatePropagation();
// }

// clickMe.addEventListener('click', buttonClick)
// To pass a function definition to javascript to call later
// If you put in parentheses then you are calling it right now. 
// This is why we don't have the () after button_click

// let div = document.querySelector('div')

// function divFunction(event) {
//     console.log(`Hi I'm a DIV`);
// }

// div.addEventListener('click', divFunction)


// function changeBackgroundColor(event){
//     document.body.style.backgroundColor = "red";
// }

// clickMe.addEventListener('click', changeBackgroundColor)

// ========================================================================

// let div = document.querySelector('div');
// console.log('div')

// function changePartColor(event) {
//     console.log(event.target.tagName);
//     if (event.target.tagName === 'BUTTON'){
//         // event.target.style.backgroundColor = "green";
//         event.target.classList.toggle('greenBackground');
//     }
// }

// div.addEventListener('click', changePartColor)

//=========================================================================

//1. Get a reference to the button --> querySelector
let clickity = document.querySelector('#clickMe')

//2. Define a function to alert user
function ouch(event) {
    alert("Ouch! Ding lay go fai");
    // clickity.removeEventListener('click', ouch);
    //putting the removeEventListener here will make the button only work once.
}
//3. Add function as event listener.
clickity.addEventListener('click', ouch, {once: true})
//this way also makes it so the button will only work once. 

function changeBGPink(event){
    document.body.classList.add("pinkBG")
    //document itself is not defined so you need to add in body. 
}

clickity.addEventListener('click', changeBGPink)

function changeButtonText(){
    //if it says Click Me! change it to clicked
    //else change it to Click Me!
    if (clickity.textContent === "Click Me") {
    clickity.textContent = "Clicked";
    } else {
        clickity.textContent = "Click Me";
    }
}

clickity.addEventListener('click', changeButtonText)
