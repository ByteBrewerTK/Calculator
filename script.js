const display = document.querySelector('#display');

const inputElem = document.querySelectorAll("input:not(#display,.clear, .delete, .equal)");


display.value = "";

//For accessing the value of the button clicked
inputElem.forEach(input=>{
    input.addEventListener('click', () =>{
        display.value += input.value;
    })
})

//clearing the value of display
document.querySelector('.clear').addEventListener('click', ()=>display.value = "");

//deleting one by one element from the last 
document.querySelector('.delete').addEventListener('click', ()=>display.value = display.value.toString().slice(0, -1));

//Computing the input values
document.querySelector('.equal').addEventListener('click', ()=>{
   
    // eval() is used for computing the arithmatic operations
    display.value = eval(display.value);
})