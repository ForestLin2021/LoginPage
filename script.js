function onSignUp(){
    console.log('SingUp Button is clicked.');
    email = document.getElementById("email-input").value;
    password = document.getElementById("password-input").value;
    console.log(email);
    console.log(password);
    document.getElementById("email-input").value = '';
    document.getElementById("password-input").value = '';

}