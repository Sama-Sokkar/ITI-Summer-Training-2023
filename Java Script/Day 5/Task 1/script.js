var icon = document.getElementById("togglePassword");
// console.log(icon); 
var passwordInput = document.getElementById("password");
// console.log(passwordInput);
icon.addEventListener("click",toggleContent)
function toggleContent()
{
    if(passwordInput.type === "password")
    {
        passwordInput.type = "text";
        icon.innerHTML = '<i class="fas fa-eye"></i>';
    }
    else {
        passwordInput.type = "password";
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
}
