// Get the button element by its ID
var buttonToMobile = document.getElementById('toMobile');
var buttonToDesktop = document.getElementById('toDesktop');

// Add a click event listener to the button
buttonToMobile.addEventListener('click', function() {
    // Redirect the user to the specified URL
    window.location.href = "mobile.html"; // Replace with your desired URL
});

// Add a click event listener to the button
buttonToDesktop.addEventListener('click', function() {
    // Redirect the user to the specified URL
    window.location.href = "index.html"; // Replace with your desired URL
});
