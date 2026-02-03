document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    const message = document.getElementById('message');
    button.addEventListener('click', function() {
        const name = document.querySelector('.first-form').value.trim();
        const age = parseInt(document.querySelector('.second-form').value);
        
        if (name && !isNaN(age)) {
            if (age < 18) {
                message.textContent = `MR(s) ${name} You are under 18`;
                message.style.color = 'rgb(255, 0, 0)';
               
            } else {
                message.textContent = `MR(s) ${name} You are over 18`;
                message.style.color = 'green';
              
            }
        } else {
            message.textContent = 'Please enter a valid name and age.';
            message.style.color = 'rgb(255, 255, 255)';
        }
    });
});