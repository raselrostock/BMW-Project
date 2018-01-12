
/*********************************
Impressum Modal
**********************************/
var ImpressumModal = document.getElementById('ImpressumModal');

// Get the button that opens the modal
var ImpressumBtn = document.getElementById("ImpressumBtn");

// Get the <span> element that closes the modal
var ImpressumClose = document.getElementsByClassName("ImpressumClose")[0];

// When the user clicks the button, open the modal 
ImpressumBtn.onclick = function() {
    ImpressumModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ImpressumClose.onclick = function() {
    ImpressumModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ImpressumModal) {
        ImpressumModal.style.display = "none";
    }
}

/*********************************
    Haftungsausschluss Modal
**********************************/
var HaftungsausschlussModal = document.getElementById('HaftungsausschlussModal');
var HaftungsausschlussBtn = document.getElementById("HaftungsausschlussBtn");
var HaftungsausschlussClose = document.getElementsByClassName("HaftungsausschlussClose")[0]; 
HaftungsausschlussBtn.onclick = function() {
    HaftungsausschlussModal.style.display = "block";
}
HaftungsausschlussClose.onclick = function() {
    HaftungsausschlussModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == HaftungsausschlussModal) {
        HaftungsausschlussModal.style.display = "none";
    }
}

/*********************************
        Datenschutz Modal
**********************************/
var DatenschutzModal = document.getElementById('DatenschutzModal');
var DatenschutzBtn = document.getElementById("DatenschutzBtn");
var DatenschutzClose = document.getElementsByClassName("DatenschutzClose")[0];
DatenschutzBtn.onclick = function() {
    DatenschutzModal.style.display = "block";
}

DatenschutzClose.onclick = function() {
    DatenschutzModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == DatenschutzModal) {
        DatenschutzModal.style.display = "none";
    }
}



function setActiveMenu(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName('a');
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('active')
    }
    // add 'active' classs to the element that was clicked
    elem.classList.add('active');
}