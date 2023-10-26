
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    
    const minChars = 8;
    const minDigits = 2; 

    
    if (username && password) {
        if (password.length >= minChars) {
            const digitPattern = /\d/g;
            const digitCount = (password.match(digitPattern) || []).length;

            if (digitCount >= minDigits) {
                
                localStorage.setItem(username, password);
                alert("Registration successful!");
            } else {
                alert("Password must contain at least " + minDigits + " digits.");
            }
        } else {
            alert("Password must be at least " + minChars + " characters long.");
        }
    } else {
        alert("Please fill in both fields.");
    }
}


// Function to log in a user
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to show the registration form
function showRegistrationForm() {
    document.getElementById("registration").style.display = "block";
    document.getElementById("login").style.display = "none";
}

// Function to show the login form
function showLoginForm() {
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "block";
}

