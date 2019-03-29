const signup_btn = document.querySelector('.signup_btn');
const emailInput = document.getElementById('email');
const passwordInput= document.getElementById('password')
const message = document.querySelector('.message');
const firstNameInput = document.getElementById('first_Name');
const lastNameInput = document.getElementById('last_Name');
const freelancerUrlInput = document.getElementById('freelancer_url');
const photoUrlInput = document.getElementById('photo_url');
const noMobileInput = document.getElementById('no_mobile');
const countryInput = document.getElementById('country');
signup_btn.addEventListener('click',event=>{
    event.preventDefault();
    const requestData = {
        firstName:firstNameInput.value,
        lastName:lastNameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
        freelancerUrl:firstNameInput.value,
        photoUrl:photoUrlInput.value,
        noMobile:noMobileInput.value,
        country:countryInput.value
    }

    fetch('/signup',{
        method:'POST',
        body: JSON.parse(requestData)
    },(err,result)=>{
        if(err) new TypeError(err);
        else{
            return message.textContent('signUp is successfully');
        }
    });
})