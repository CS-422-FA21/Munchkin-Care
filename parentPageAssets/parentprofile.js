function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
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