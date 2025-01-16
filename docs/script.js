$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        if (username === "user" && password === "password") { 
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    });
    $('#contactLink').on('click', function (e) {
        e.preventDefault();
        window.location.href = "contact.html";
    });
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.geckoterminal.com/api/v2",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer YOUR_API_KEY_HERE"
        }
    };
    $.ajax(settings).done(function (response) {
        console.log("API Response:", response);
    }).fail(function (error) {
        console.error("API Error:", error);
    });
});
