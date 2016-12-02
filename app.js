document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write'; // default text
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second :)';

setInterval(function() { // function that saves innerHTML of the div
    localStorage['title'] = document.getElementById('heading').innerHTML; // heading div
    localStorage['text'] = document.getElementById('text').innerHTML; // content div
}, 1000); // save every 1000 milliseconds or 1 second
