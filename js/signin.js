/*
 //Переменные в форме:
 emailSignUp  - Email при регистрации
 passSignUp   - Пароль при регистрации
 emailSignIn  - Email при входе в систему
 passSignIn   - Пароль при входе в систему
 */


//Переменные для хранения данных
var arrSignUp = {
    email: "",
    pass: ""
};
var arrSignIn = {
    email: "",
    pass: ""
};


//проверка длины пароля
function passValidIn() {
    var passcount = document.getElementById('passSignIn').value || null; //количество символов в пароле

    if (passcount.length < 6) //если пароль < 6 символов
        document.getElementById('pass22').innerHTML = " Pass < 6 ";
    else
        document.getElementById('pass22').innerHTML = "";
}

//-------------------------------------------------------------
function RedirectWork() {
    document.location.href = "http://localhost:3000/work";
}

function signinhtml() {
    //отправляю POST запрос и получаю ответ
    $(document).ready(function(){
        var userin,passin;

        userin=$("#emailSignIn").val();
        passin=$("#passSignIn").val();
        $.post("http://localhost:3000/SignInEnter",{user: userin,password: passin}, function(data){
            if(data === 'yes'){
                document.getElementById('idemailIn').innerHTML = "enter 987987";
                alert(" You Sign In! ");
                //document.getElementById('ajax_status').innerHTML = 'SignUp success';
                RedirectWork();
            }else if(data === 'nouser'){
                document.getElementById('idemailIn').innerHTML = "No user with such an email ";
                alert("No user with such an email!"); //Введены различные данные
            }
            else{
                document.getElementById('idemailIn').innerHTML = "not enter";
                alert("Different data are entered!"); //Введены различные данные
            }
        });
    });
}
//функция для входа в систему
function validateSignIn() {
    var boolVar = true;
    var r = /^\w+@\w+\.\w{2,4}$/i;
    var email = document.getElementById('emailSignIn').value || null;
    var pass = document.getElementById('passSignIn').value || null;

    if (!r.test(email)) {
        boolVar = false;
        document.getElementById('idemailIn').innerHTML = " Email is not correct! ";
        alert("Email is not correct!");
    }
    else if (pass.length === 0) {
        boolVar = false;

    }
    else {
        if (boolVar) {
            //document.getElementById('idemailIn').innerHTML = "987654312";
            //console.log('gkgkgkgkgkgdfvk');
            arrSignIn = {
                email: document.getElementById('emailSignIn').value || null,
                pass: document.getElementById('passSignIn').value || null};

            signinhtml();
        }
    }
}

document.getElementById('submitSignIn').addEventListener('click', validateSignIn);
