var buttonRegister = document.getElementById('register-transition');

buttonRegister.addEventListener('click', () => {
    event.preventDefault();

    LoginToRegister();
});

function LoginToRegister(){
    let textElement = document.querySelectorAll('.text-pwd');
    let input = document.querySelectorAll('.form-input');
    let title = document.getElementById('title-login');
    let textSign = document.getElementById('text-sign');
    let textRegister = document.getElementById('register');


    input[0].classList.remove('none');
    textElement[0].classList.add('hidden');
    textElement[1].classList.remove('none');

    textSign.classList.add('hidden');
    title.classList.add('hidden');
    textRegister.classList.add('hidden');
    setTimeout(() => {
        input[0].classList.remove('hidden');     
        textElement[0].textContent = "Nova senha";
        textElement[0].classList.remove('hidden');
        textElement[1].classList.remove('hidden');

        textSign.textContent = "Criar conta"
        textSign.classList.remove('hidden');

        textRegister.classList.add('none');

        title.textContent = "Criar conta";
        title.classList.remove('hidden');
    }, 200);
}