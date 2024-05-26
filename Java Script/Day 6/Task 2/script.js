let div = document.createElement("div");
div.innerText = "Original div ";
div.style.width = "150px";
div.style.height = "200px";
div.style.backgroundColor = "lightblue";
div.style.display = "inline-block";
div.style.margin = "7px";
div.style.textAlign="center";
div.style.padding="30px";
document.body.append(div);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

document.addEventListener('click', function(event) {
    let clonedDiv = div.cloneNode();
    clonedDiv.innerText = "Sub-div"; 
    clonedDiv.style.backgroundColor = getRandomColor();
    document.body.append(clonedDiv);
});
