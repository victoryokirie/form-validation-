const username = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('.form')
const confirmPassword = document.querySelector('#confirm_password')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    validateForm()
})

function validateForm(){
    //username
    if(username.value.trim()=== ''){
        setError(username, "Name cannot be empty")
    }else if(username.value.trim().length < 5 || username.value.trim().length >15){
        setError(username, "Username must be between 5 and 15 characters long")
    }else{
        setSuccess(username)
    }

    //email
    if(email.value.trim()===''){
        setError(email, "Please input an email address")
    }else if(isEmailValid(email.value)){
        setSuccess(email)
    }else{
        setError(email, "Provide a valid email address")
    }
    //password
    if(password.value.trim()===''){
        setError(password, "Please enter your password!")
    }else if(password.value.trim().length<6 || password.value.trim().length>20){
        setError(password, "Password length must be between 6 to 20 characters")
    }else{
        setSuccess(password)
    }

    //confirm password
    if(confirmPassword.value.trim()===''){
        setError(confirmPassword,"This field cannot be empty")
    }else if(confirmPassword.value.trim() !== password.value.trim()){
        setError(confirmPassword, "Password does not match")
    }else{
        setSuccess(confirmPassword)
    }
}

function setError(element, errorMessage){
    // selecting the parent div, adding error class and removing success class
    const parent = element.parentElement

     if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }

    parent.classList.add('error')
    
    //selecting the paragraph tag
    
    const paragraph = parent.querySelector('p')
    paragraph.textContent= errorMessage
}

function setSuccess(element){
    //selecting parent div, adding success class and removing error class
    const parent = element.parentElement
    parent.classList.add('success')

    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    

}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}