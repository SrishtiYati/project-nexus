function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}
function validateEmail(email) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
}
function validatePassword(password) {
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordPattern.test(password);
}
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Add your login logic here
    console.log('Login with:', email, password);
    if (!validateEmail(email)) {
        alert('Invalid email format. Please use all lowercase letters, optional numbers, and include "@" and ".com".');
        return;
    }

    if (!validatePassword(password)) {
        alert('Invalid password format. Password must be at least 8 characters long and contain at least one special character.');
        return;
    }
    alert('Logged in successfully');
}


function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Add your signup logic here
    console.log('Sign up with:', name, email, password);
    if (!validateEmail(email)) {
        alert('Invalid email format. Please use all lowercase letters, optional numbers, and include "@" and ".com".');
        return;
    }

    if (!validatePassword(password)) {
        alert('Invalid password format. Password must be at least 8 characters long and contain at least one special character.');
        return;
    }
    alert('Signed up successfully');
}
