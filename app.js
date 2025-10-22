let inputName = document.querySelector('.inputName input');
let inputEmail = document.querySelector('.inputEmail input');
let button = document.querySelector('button');


button.addEventListener('click',()=>{
   
    if(!/^[a-zA-Z]+@[a-z]+\.[a-z]{1,5}$/gm.test(inputEmail.value)){
        console.log('error with email');
    }
    if(!/^[a-zA-Z]+$/gm.test(inputName.value)){
        console.log('error with name');
    }
    if(/^[a-zA-Z]+@[a-z]+\.[a-z]{1,5}$/gm.test(inputEmail.value) && (/^[a-zA-Z]+$/gm).test(inputName.value))
    {
        console.log('correct data');
    }
})