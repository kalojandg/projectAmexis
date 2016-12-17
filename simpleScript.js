function submitClicked() {
    window.open("intro2.html");
}
function onNameEnter() {
    //alert("You chose to enter first name!");
    window.resizeBy(0.5);
}
function onLastNameEnter() {
    //alert("You chose to enter last name!");
}
var invis = document.getElementById("invisibleDiv");
invis.style.visibility = 'hidden';
function onPictureclick() {
    //alert("Picture clicked");
    //Watch-out-MEME-500x375
    var domAlone = document.getElementById("imgForeverAlone");
    domAlone.src = "Watch-out-MEME-500x375.jpg";
    domAlone.style.borderStyle = 'solid';
    changeHandler();
}
function onOver() {
    document.body.appendChild(document.createElement("div", "artificiallyCreatedDiv"));
    var domAlone = document.getElementById("imgForeverAlone");
    domAlone.title = "This is added tooltip";
}
function changeHandler() {
    var domAlone = document.getElementById("imgForeverAlone");
    domAlone.setAttribute("onclick", "changedHandler()");
}
function changedHandler() {
    var domAlone = document.getElementById("imgForeverAlone");
    if (domAlone.src == "file:///C:/Users/kaloyan.georgiev/Desktop/intro/happy_forever_alone_by_ninnymuffin-d55o62c.png")
        domAlone.setAttribute("src", "Watch-out-MEME-500x375.jpg")
    else
        domAlone.setAttribute("src", "happy_forever_alone_by_ninnymuffin-d55o62c.png");
}
function createShtuff() {
    var newDiv = document.createElement("div", "artificiallyAddedDiv");
    newDiv.style.width = 1000;
    newDiv.style.height = 700;
    var domAlone = document.getElementById("imgForeverAlone");
    newDiv.appendChild(domAlone);
}
var timer;
function enableTimer() {
    timer = setInterval(moveAround, 400);
}
function disableTimer() {
    clearInterval(timer);
}
function moveAround() {
    var formDiv = document.getElementById("formDiv");
    //alert(formDiv.style.bottom);
    //formDiv.style.bottom = (formDiv.style.bottom + Math.random()) ;\
    for (var i = 0; i < 100; i++) { 
    var number = parseInt(Math.random() * (window.innerHeight - formDiv.clientHeight) )-5;
        formDiv.style.left = number + "px";
        formDiv.style.top = number + "px";
    //location.reload();
        //console.log(number);
        //console.log(formDiv.style.top + formDiv.style.left);
        
    }
    
}
var formDiv = document.getElementById("formDiv");
formDiv.onmouseleave = logOut;
function logOut() {
    //console.log("mouse exited");
}
window.addEventListener("click", onDocumentclick);
function onDocumentclick(event) {
    var x = event.clientX;
    var y = event.clientY;
    //alert(document.location.protocol);
    //console.log(x, y);
    var invis = document.getElementById("invisibleDiv");
    //console.log(invis.style.top);
    invis.style.visibility = 'visible';
    invis.style.marginLeft = x + "px";
    invis.style.marginTop = y + "px";
    invis.style.backgroundColor = "red";
}
//brace yourself
var requests = new XMLHttpRequest();
if (!requests) alert("mazalo");


requests.open("GET", "respond.txt", true);
requests.send(null);

//requests.onload = function () {
//    divInDiv.innerHTML = requests.responseText;
//}
//alert(requests.responseText);
//alert(divInDiv);
var divInDiv = document.getElementById("formDiv");

requests.onreadystatechange = function () {
    if(this.status= 200)
        divInDiv.innerHTML = requests.responseText;
}