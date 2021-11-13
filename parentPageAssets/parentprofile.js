function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function _closeForm() {
    document.getElementById("confirm-popup").style.display = "none";
}

function errorPage() {
    window.open("errorPage.html", "_self");
}

function overheadPopup(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function homePage() {
    window.open("index.html", "_self");
}

function confirmChildAdd() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("confirm-popup").style.display = "block";
}