function openProfile(){
    window.open("parentProfile.html", "_self");
}

function errorLink(){
    window.open("errorPage.html", "_self");
}

function homeLink(){
    window.open("index.html", "_self");
}
function messageLink(){
    window.open("messages.html", "_self");
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

function cancelButton(){
    document.getElementById("popUP").style.display = "none";
    document.getElementById("recurring").style.display = "none";
    document.getElementById("single").style.display = "none";
}