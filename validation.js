let formDangKy = document.getElementById('form-dangky')
let fullName = document.getElementById('fullname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let passwordConfirm = document.getElementById('password_confirmation')

let errorFullname = document.getElementById('name_error');
let errorEmail = document.getElementById('email_error');
let errorPassword = document.getElementById('password_error');
let errorPasswordConfirm = document.getElementById('passwordConfirm_error');




formDangKy.addEventListener('submit', (e) => {
    var emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (fullName.value === '' || fullName.value == null) {
        e.preventDefault();
        errorFullname.innerHTML = 'Name is required'
    } else {
        errorFullname.innerHTML = ''
    }



    if (!email.value.match(emailCheck)) {
        e.preventDefault();
        errorEmail.innerHTML = 'Valid email is required';
    } else {
        errorEmail.innerHTML = '';
    }



    if (password.value.length <= 5) {
        e.preventDefault()
        errorPassword.innerHTML = "The password must be more than 6 characters";
    } else if (password.value.length > 16) {
        e.preventDefault()
        errorPassword.innerHTML = "The password cannot exceed 16 characters"
    } else {
        errorPassword.innerHTML = ""
    }



    if (errorPasswordConfirm.value !== password.value) {
        e.preventDefault();
        errorPasswordConfirm.innerHTML = "Checkout your password";
    } else {
        errorPasswordConfirm.innerHTML = "";
    }


})
