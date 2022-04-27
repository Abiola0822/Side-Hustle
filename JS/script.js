 // email va;idation code
 
 function validation() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let email_error = document.getElementsByClassName('text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    console.log(email_error)
    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove('invalid');
        email_error.innerHTML = "";
        document.getElementsByClassName('text')[0].style.display = "none";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        email_error.innerHTML = "please enter a valid email address";
        document.getElementsByClassName('text')[0].style.display = "block";
        
    }
 }
