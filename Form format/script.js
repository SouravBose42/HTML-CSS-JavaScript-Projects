const myform = document.querySelector("form");
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const email = document.getElementById("Email");
const role = document.getElementById("Job_role");
const address = document.getElementById("Address");
const city = document.getElementById("city");
const pin = document.getElementById("pincode");
const date = document.getElementById("Date");
const cvselection = document.getElementById("Upload");
const msg = document.getElementById("msg");

myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if (firstname.value==""||lastname.value==""||email.value==""||role.value==""|| address.value==""||city.value==""||pin.value==""||
    date.value==""||cvselection.value=="") {
        alert("All fields are mandatory.");
    }
    else
{
    alert("succesfully submitted.");
}

    
}







