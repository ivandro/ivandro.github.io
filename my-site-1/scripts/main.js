var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg') {
        myImage.setAttribute('src', 'images/harukochan-slamdunk.jpg');
    } else {
        myImage.setAttribute('src', 'images/me.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent= 'My Webpage is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'My webpage is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}