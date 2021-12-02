function openPopup(){
    document.getElementById("popUP").style.display = "block";
    document.getElementById("single").style.display = "none";
}
function closeForm()    { document.getElementById("popUP").style.display = "none"; }

function closeConfirm() { 
    document.getElementById("confirm-popup").style.display = "none"; 
    window.open("newChild.html",     "_self");
}

function overheadPopup(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function confirmChildAdd() {
    document.getElementById("popUP").style.display = "none";
    document.getElementById("confirm-popup").style.display = "block";
}

function errorPage()    { window.open("p_reviews.html",     "_self"); }
function homePage()     { window.open("index.html",         "_self"); }
function msgPage()      { window.open("messages.html",      "_self"); }
function parentPage()   { window.open("parentProfile.html", "_self"); }
function reviewsPage()  { window.open("parentPageAssets/reviews.html",     "_self"); }