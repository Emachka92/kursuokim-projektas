const myTextParagraph = document.getElementById("my-text");

myTextParagraph.textContent = "This text was set using JavaScript";

function addStyles() {
    myTextParagraph.classList.add("special-text");
}

function showAnotherPhoto(){
    const photoImg = document.querySelector(#photo-switcher);
    let photoSrc = photoImg.getAttribute("src");
    const myPhotos = ["fb.png","senjorai.png"];

    if(myPhotos.length - 1 === currentPhotoIndex) {
        currentPhotoIndex = 0;
    }
    else {
        currentPhotoIndex++;
    }
let nextPhotos currentPhotoIndex];
photoImg.setAttribute("src", nextPhotos);
}