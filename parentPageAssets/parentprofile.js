function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function errorPage() {
    window.open("mainFrameTasks.html", "_self");
}

function overheadPopup(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}