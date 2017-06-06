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

//проверка длины пароля
function passValidIn() {
    var passcount = document.getElementById('passSignIn').value || null; //количество символов в пароле

    if (passcount.length < 6) //если пароль < 6 символов
        document.getElementById('pass22').innerHTML = " Pass < 6 ";
    else
        document.getElementById('pass22').innerHTML = "";
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
             if(data==='yes'){ //done
                 RedirectSignIn();
                 document.getElementById('ajax_status').innerHTML = 'SignUp success';
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
            alert(" You Create Account ");
            signup_html();
        }
    }
    //alert(" Yuo are register ");
}



//-------------------------------------------------------------
function RedirectWork() {
    document.location.href = "http://localhost:3000/work";
}

function Signinhtml() {
    //отправляю POST запрос и получаю ответ
    $(document).ready(function(){
        var userin,passin;

        userin=$("#emailSignIn").val();
        passin=$("#passSignIn").val();
        $.post("http://localhost:3000/SignInEnter",{user: userin,password: passin}, function(data){
            if(data === 'yes'){
                alert(" You Sign In! ");
                document.getElementById('ajax_status').innerHTML = 'SignUp success';
                RedirectWork();
            }
            else{
                alert("Different data are entered!"); //Введены различные данные
            }
        });
    });
}
//функция для входа в систему
function validateSignIn() {
    alert('adfbvsadfbsdfbsdfbsdf');
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
            document.getElementById('idemailIn').innerHTML = "987654312";
            console.log('gkgkgkgkgkgdfvk');
            arrSignIn = {
                email: document.getElementById('emailSignIn').value || null,
                pass: document.getElementById('passSignIn').value || null};

            Signinhtml();
        }
    }
}


// ajax work
/*function SendPost() {
    //отправляю POST запрос и получаю ответ
    $(document).ready(function(){
        var user,pass;

        user=$("#emailSignUp").val();
        pass=$("#passSignUp").val();
        $.post("http://localhost:3000/loginSignUp",{user: user,password: pass}, function(data){
            if(data==='yes') //done
            {
                SendGet();
                document.getElementById('ajax_status').innerHTML = 'SignUp success';
            }
        });
    });
}
*/

document.getElementById('submitSignUp').addEventListener('click', validateSignUp);
//document.getElementById('submitSignUp').addEventListener('click', SendPost);
document.getElementById('submitSignIn').addEventListener('click', validateSignIn);
