
 const generateBtn = document.querySelector('#generate-button');

generateBtn.addEventListener('click', function(){
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById('password').value = password;
    setTimeout(function(){
        document.getElementById('password').value = '';
    }, 10000)
}) 