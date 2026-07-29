//Task numero uno

const message = document.getElementById("message");

message.addEventListener("input", (event) =>{
    const length = event.target.value.length;
    const lengthElement = document.getElementById("length");
    lengthElement.innerText = `characters : ${length} / 100`;

    if(length >= 100){
        lengthElement.style.color ='red';
    }else{
        lengthElement.style.color ='black';

    }

})
// ----------------------------------------------------

// Task #2

