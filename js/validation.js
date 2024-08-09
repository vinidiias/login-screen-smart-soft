const usuarios = [
    {
        login: 'vini',
        senha: 'dias'
    },
    {
        login: 'admin',
        senha: 'admin'
    },
    {
        login: 'teste',
        senha: 'teste'
    }
]

var submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    event.preventDefault();

    let title = document.getElementById('title-login');
    let warningRegister = document.getElementById('warningRegister');

    if(title.textContent == 'Entrar') {
        validationLogin();
    }
    else {
        if(validationRegister() == true) {
            warningRegister.classList.add('none');
            RegisterToLogin();
        } else {
            warningRegister.classList.remove('none');
        }
    }
});

function validationLogin(){
    let user = document.getElementById('usuario');
    let password = document.getElementById('pwd');

    let warning = document.getElementById('warningLogin');
    let validator = false;

    for(let i in usuarios) {
        if(user.value == usuarios[i].login && password.value == usuarios[i].senha) {
            validator = true;
        }
    }

    if(validator == true) {
        user.value ="";
        password.value ="";
        warning.classList.add('none');
        setTimeout(() => {
            alert('Logado com sucesso.');
        }, 100)
    } else {
        warning.classList.remove('none');
        user.value ="";
        password.value ="";
    }
}

function validationRegister(){
    let inputUser = document.getElementById('usuario');
    let inputPassword = document.getElementById('pwd');
    let inputPasswordConfirm = document.getElementById('pwd-confirm');

    if(inputUser.value == ""  || inputPassword.value == "" || inputPasswordConfirm.value == ""){
        console.log('false');
        return false;
    } else {
        console.log('true');
        inputUser.value = "";
        inputPassword.value = "";
        inputPasswordConfirm.value = "";
        return true;
    }
}

function RegisterToLogin() {
    let textElement = document.querySelectorAll('.text-pwd');
    let input = document.querySelectorAll('.form-input');
    let title = document.getElementById('title-login');
    let textSign = document.getElementById('text-sign');
    let textRegister = document.getElementById('register');

    input[0].classList.add('hidden');
    textElement[0].classList.add('hidden');
    textElement[1].classList.add('hidden');


    title.classList.add('hidden');
    textSign.classList.add('hidden');
    textRegister.classList.remove('hidden');

    setTimeout(() => {
        input[0].classList.add('none');
        textElement[0].textContent = "Senha";
        textElement[0].classList.remove('hidden');
        textElement[1].classList.add('none');

        textSign.textContent = "Entrar";
        textSign.classList.remove('hidden');
        
        textRegister.classList.remove('none');

        title.textContent = "Entrar"
        title.classList.remove('hidden');
    }, 200);
}