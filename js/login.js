console.log('✅ Login.html is active');

const input = document.querySelector('.email-input');
const loginButton = document.querySelector('.login-btn');

input.addEventListener('input', function() {
    if(input.value.trim() !== '') {
        loginButton.classList.add('active');
    }

    else{
        loginButton.classList.remove('active');
    }
})