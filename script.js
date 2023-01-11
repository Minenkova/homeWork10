const divs = document.getElementsByTagName("div");
const selectedDiv = document.getElementsByClassName("selected__div");
const outsideSpace = document.getElementsByTagName("body");
const getBtnConfirm = document.getElementById('btn__confirm');
const inputText = document.getElementsByClassName('text__add');


for (let el of divs) {
  el.addEventListener("click", (event) => {
    event.stopPropagation();
    const nameSelectedDiv = event.target.getAttribute("div-name");
    // console.log(nameSelectedDiv);
    selectedDiv[0].innerText = `Selected: ${nameSelectedDiv}`;
  });
}
const handlerFirstBtn = (event) => {
    event.stopPropagation();
    selectedDiv[0].innerText = 'Selected: Button 1';
}

const handlerSecondtBtn = (event)=> {
    event.stopPropagation();
    selectedDiv[0].innerText = 'Selected: Button 2';
}

outsideSpace[0].addEventListener('click', (event)=>{
    event.stopPropagation();
    selectedDiv[0].innerText = '';
});

getBtnConfirm.disabled = true;

inputText[0].addEventListener('click', (event)=> {
    if (inputText.value!== ''){
        getBtnConfirm.disabled = false;
    }
    else {
        getBtnConfirm.disabled = true;
    }
});

getBtnConfirm.addEventListener('click',() => {
let result = inputText[0].value;
alert(result);
});

const onTypePress = (event) =>{
if(event.key === event.key.toUpperCase()){
    event.preventDefault();
}
};
