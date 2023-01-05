// console.log("Assalomu alaykum");
const elBtns = document.querySelector(".btn-group");
const elHeading = document.querySelector(".js-heading");
const elInput = document.querySelector(".js-input");
const elForm = document.querySelector(".js-form");

function myFunc(elInput,node) {
    

    if(elInput.value == 1){
        node.textContent = "Positive content"; 
    }
    if(elInput.value == 2){
        node.textContent = "Negative content";
    }
    if(elInput.value == 3){
        node.textContent = "Neutral content"; 
    }
    if(elInput.value > 3){
       alert("index is invalid")
    elInput.value = ""
    }
        elInput.value =""
}
myFunc(elInput,elHeading)

elForm.addEventListener("click", (evt) => {
    elInput.innerHTML =""
    myFunc(elInput,elHeading)
  if (evt.target.matches(".btn-positive")) {
    elHeading.textContent = "Positive content";
  }
  if (evt.target.matches(".btn-negative")) {
    elHeading.textContent = "Negative content";
  }
  if (evt.target.matches(".btn-neutral")) {
    elHeading.textContent = "Neutral content";
  }
});

