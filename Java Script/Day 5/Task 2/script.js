// var photo = document.querySelector("#header img");
// // console.log(photo);
// window.addEventListener("load",changeImg);
// function changeImg()
// {
    
// }
window.addEventListener("load", changeImg);

function changeImg() {
    var photo = document.querySelector("#header img");
    var duplicatePhoto = document.createElement('img');
    duplicatePhoto.src='dom.jpg';
    // var duplicatePhoto = photo.cloneNode(true);
    photo.parentNode.appendChild(duplicatePhoto);
    // photo.style.display = "inline-block"; 
    photo.style.position = "absolute";
    photo.style.top = "0";
    photo.style.left = "1250px";

    duplicatePhoto.style.position = "absolute";
    duplicatePhoto.style.top = "450px"; 
    duplicatePhoto.style.left = "40px"; 
    // duplicatePhoto.style.display = "inline-block";
    adjust()
}

function adjust() {
    var list = document.getElementById("nav");
    // list.style.display = "block";
    list.style.position = "absolute";
    list.style.top = "275px";
    list.style.left = "700px";
    list.style.listStyleType = "circle";
}







