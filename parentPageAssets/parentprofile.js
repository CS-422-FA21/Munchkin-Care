function openForm()     { document.getElementById("myForm").style.display = "block"; }
function closeForm()    { document.getElementById("myForm").style.display = "none"; }
function _closeForm()   { document.getElementById("confirm-popup").style.display = "none"; }

function overheadPopup(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function confirmChildAdd() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("confirm-popup").style.display = "block";
}

function errorPage()    { window.open("errorPage.html",     "_self"); }
function homePage()     { window.open("index.html",         "_self"); }
function msgPage()      { window.open("messages.html",      "_self"); }
function parentPage()   { window.open("parentProfile.html", "_self"); }
function reviewsPage()  { window.open("parentPageAssets/reviews.html",     "_self"); }