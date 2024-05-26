const btn = document.getElementsByClassName("btn")[0];
// console.log(btn);
const inputN = document.getElementById("name");
// console.log(inputN);

// const displayName = inputN.value ;
// console.log(inputN.value);

const inputE = document.getElementById("email");
// console.log(inputE);

// const displayEmail = inputE.value ;
// console.log(displayEmail);

const errorN = document.querySelector(".errorName");
// console.log(errorN);
const errorE = document.querySelector(".errorEmail");
// console.log(errorE);

// const displayName = document.getElementById("welcomeN");
// console.log(displayName);
// const displayEmail = document.getElementById("welcomeE");
// console.log(displayEmail);


// console.log(displayName)



document.addEventListener("DOMContentLoaded", function () 
{
    const displayName = document.getElementById("welcomeN");
    const displayEmail = document.getElementById("welcomeE");

    displayName.textContent = 'Hey ' + localStorage.getItem("userName") + '!!';
    displayEmail.textContent = 'Email: ' + localStorage.getItem("userEmail");

    // displayName.style.marginLeft = "115px";
    // displayEmail.style.marginLeft = "30px";
    displayName.style.textAlign = "center";
    displayEmail.style.textAlign = "center";
});

btn.addEventListener("click",validation);
function validation(e)
{
    nameValidation(e);
    emailValidation(e);
}

function nameValidation(e)
{
    if (inputN.value === "" || isFinite(inputN.value) )
    {
        e.preventDefault();
        errorN.style.display = "block";
    }
    else
    {
        localStorage.setItem("userName", inputN.value);
    }
}
function emailValidation(e)
{
    if (inputE.value === "")
    {
        e.preventDefault();
        errorE.style.display = "block";
    }
    else
    {
        localStorage.setItem("userEmail", inputE.value);
    }
}
//document.getElementById("welcomeN").innerHTML = 'Hey '+ inputN.value +'!!';

