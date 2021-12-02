function homePage() {
    window.open("index.html", "_self");
}

function msgPage(){
    window.open("messages.html", "_self");
}

function parentPage(){
    window.open("parentProfile.html", "_self");
}

function openPopup(){
    document.getElementById("popUP").style.display = "block";
    document.getElementById("single").style.display = "none";
}

function signlePick(){
    document.getElementById("single").style.display = "block";
    document.getElementById("popUP").style.display = "none";
}

function recurringPick(){
    document.getElementById("recurring").style.display = "block";
    document.getElementById("popUP").style.display = "none";
}

function confrimPopup(){
    document.getElementById("recurring").style.display = "none";
    document.getElementById("single").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

function cancelButton(){
    document.getElementById("popUP").style.display = "none";
    document.getElementById("recurring").style.display = "none";
    document.getElementById("single").style.display = "none";
    document.getElementById("confirmation").style.display = "none";

}

