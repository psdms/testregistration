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


//Установка значений при регистрации
function setSignUp(arrSignUp) {
    arrSignUp.email = document.getElementById('emailSignUp').value || null;
    arrSignUp.pass = document.getElementById('passSignUp').value || null;
}


//проверка длины парол
function passValidUp() {
    var passcount = document.getElementById('passSignUp').value || null; //количество символов в пароле

    if (passcount.length < 6) //если пароль < 6 символов
        document.getElementById('pass12').innerHTML = " Pass < 6 ";
    else
        document.getElementById('pass12').innerHTML = "";
}

//----------------------------------------------------
function RedirectSignIn() {
    document.location.href = "http://localhost:3000/signin";
}

function signup_html() {
    //отправляю POST запрос и получаю ответ
    $(document).ready(function(){
        var user,pass;

        user=$("#emailSignUp").val();
        pass=$("#passSignUp").val();
        $.post("http://localhost:3000/SignUpEnter",{user: user,password: pass}, function(data){
            if(data==='yes'){
                RedirectSignIn();
                document.getElementById('ajax_status').innerHTML = 'SignUp success';
                alert(" You Create Account ");
            }
            if(data==='ml_use'){
                document.getElementById('ajax_status').innerHTML = 'Mail already in use';
            }
        });
    });
}

//функция для регистрации
function validateSignUp(el) {
    el.preventDefault();
    var boolVar = true;
    var r = /^\w+@\w+\.\w{2,4}$/i;

    var email = document.getElementById('emailSignUp').value || null;
    var pass = document.getElementById('passSignUp').value || null;

    if (!r.test(email)) {
        boolVar = false;
        document.getElementById('idemailUp').innerHTML = " Email is not correct! ";
        alert("Email is not correct!");
    }
    else if (pass.length < 6) {
        boolVar = false;
    }
    else {

        if (boolVar) {
            document.getElementById('idemailUp').innerHTML = "";
            //localStorage.setItem('user', arrSignUp.email);
            setSignUp(arrSignUp);
            signup_html();
        }
    }
    //alert(" Yuo are register ");
}


document.getElementById('submitSignUp').addEventListener('click', validateSignUp);
//document.getElementById('submitSignUp').addEventListener('click', SendPost);
