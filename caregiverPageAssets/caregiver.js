function errorLink(){
    window.open("errorPage.html", "_self");
}

function openPopup(){
    document.getElementById("popUP").style.display = "block";
    document.getElementById("single").style.display = "none";
}
function homePage() {
    window.open("index.html", "_self");
}

function msgPage(){
    window.open("messages.html", "_self");
}

function parentPage(){
    window.open("parentProfile.html", "_self");
}

function signlePick(){
    document.getElementById("single").style.display = "block";
    document.getElementById("popUP").style.display = "none";
}

function recurringPick(){
    document.getElementById("recurring").style.display = "block";
    document.getElementById("popUP").style.display = "none";
}

function cancelButton(){
    document.getElementById("popUP").style.display = "none";
    document.getElementById("recurring").style.display = "none";
    document.getElementById("single").style.display = "none";
    document.getElementById("confirmation").style.display = "none";

}

function taskButton(){
    document.getElementById("popUP").style.display = "none";
    document.getElementById("recurring").style.display = "none";
    document.getElementById("single").style.display = "none";
    window.open("tasks.html", "_self");
}

function confrimPopup(){
    document.getElementById("recurring").style.display = "none";
    document.getElementById("single").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

function reviewsPage() { window.open("cg_reviews.html", "_self"); }