var naame = document.getElementById("name");
// console.log(naame);
var email = document.getElementById("email");
// console.log(email);
var age = document.getElementById("number");
// console.log(number);
var btn = document.getElementById("btn");
// console.log(btn);
var tbody = document.getElementById("tableBody");
// console.log(tbody);
var resetBtn = document.getElementById("resetBtn");
// console.log(resetBtn);

btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (naame.value === "" || email.value === "" || age.value === "") {
        alert("All fields are required.");
        return;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${naame.value}</td><td>${age.value}</td><td>${email.value}</td>`;
    tbody.appendChild(tr);

    naame.value = "";
    email.value = "";
    age.value = "";
});

resetBtn.addEventListener("click", function () {
    tbody.innerHTML = "";
});
