const wrapper=document.querySelector('.wrapper');
const signupHeader=document.querySelector('.form_signup header');
const loginHeader=document.querySelector('.form_login header');
loginHeader.addEventListener("click",()=>{
    wrapper.classList.add("active");
    console.log('login header called');
});

signupHeader.addEventListener('click',()=>{
    wrapper.classList.remove("active");
    console.log('signup')
})

//Add data to localStorage using signup form;

 function storeData(){
    let nameVal=document.getElementById('fName').value;
    let emailVal=document.getElementById('email').value;
    let passVal=document.getElementById('password').value;
    document.signup_form.reset();
    localStorage.setItem('UserName',nameVal);
    localStorage.setItem('EmailId',emailVal);
    localStorage.setItem('Password',passVal);
 }

 //login form data check;
 
 function checkData(){
    let checkEmailVal=document.getElementById('emailCheck').value;
    let checkPassVal=document.getElementById('passwordCheck').value;
    let getEmail=localStorage.getItem('EmailId');
    let getPassword=localStorage.getItem('Password');
    document._form.reset();

    //check entered email and password is alredy registered or not;
    if(checkEmailVal==getEmail){
        if(checkPassVal==getPassword){
            alert('Login Successful:')
        }
        else{
            alert('Wrong Password:');
        }
    }
        else{
            alert('Invalid Details:');
        }  
    }

 