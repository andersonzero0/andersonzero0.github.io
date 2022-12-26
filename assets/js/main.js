// VARIAVEIS - START
var btn_maxView = document.getElementById('btn_maxView');
var btn_exitView = document.getElementById('btn_exitView');
var terminal = document.getElementById('terminal');
var content_data = document.getElementById('content_data');
var btn_openTerminal = document.getElementById('btn_openTerminal');
var navbar = document.getElementById('navbar');

var btn_exitViewPort = document.getElementById("btn_exitViewPort");
var btn_maxViewPort = document.getElementById('btn_maxViewPort');
var profile = document.getElementById("profile");
var btn_openProfile = document.getElementById("btn_openProfile");
// VARIAVEIS - END

// DISPLAY - START
terminal.style.display = "none";
profile.style.display = "none";
// DISPLAY - END

// HEADER - START
now = new Date;
dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

content_data.innerHTML = dayName[now.getDay() ] + ", " + now.getDate() + " de " + monName[now.getMonth()] +  " de "  +     now.getFullYear ();
// HEADER - END

// PROFILE - START
btn_openProfile.onclick = function openProfile() {
    profile.style.transition = "ease 0.2s";
    profile.style.display = "block";
}

var verifMaxViewProf = false;
btn_maxViewPort.onclick = function maxViewPort() {
    if(verifMaxViewProf === false) {
        profile.style.transition = "ease 0.2s";
        profile.style.width = "100%";
        profile.style.height = "100vh";
        profile.style.marginTop = 0;
        navbar.style.transition = "ease 0.2s";
        navbar.style.display = "none";
        verifMaxViewProf = true;
    }else {
        profile.style.width = "900px";
        profile.style.height = "500px";
        profile.style.margin = "50px auto";
        navbar.style.display = "block";
        verifMaxViewProf = false;
    }
}

btn_exitViewPort.onclick = function exitTerminalViewPort() {
    profile.style.display = "none";
    navbar.style.display = "block";
}
// PROFILE - END

// PROJETOS - START

// HITNUMBER - START

function efectImgHitNumber1() {
    document.getElementById("img_HitNumber").src = "assets/images/hitnumber/img_HitNumber1.png";
    setTimeout("efectImgHitNumber2()", 2000);
}
function efectImgHitNumber2() {
    document.getElementById("img_HitNumber").src = "assets/images/hitnumber/img_HitNumber2.png";
    setTimeout("efectImgHitNumber3()", 2000);
}
function efectImgHitNumber3() {
    document.getElementById("img_HitNumber").src = "assets/images/hitnumber/img_HitNumber3.png";
    setTimeout("efectImgHitNumber1()", 2000);
}
// HITNUMBER - END

// PROJETOS - END

// TERMINAL - START
btn_openTerminal.onclick = function openTerminal() {
    terminal.style.transition = "ease 0.2s";
    terminal.style.display = "block";
    document.getElementById('inputEntrada').focus();
}

var verifMaxView = false;
document.getElementById('inputEntrada').focus();
btn_maxView.onclick = function maxView() {
    if(verifMaxView === false) {
        document.getElementById('inputEntrada').focus();
        terminal.style.transition = "ease 0.2s";
        terminal.style.width = "100%";
        terminal.style.height = "100vh";
        terminal.style.marginTop = 0;
        navbar.style.transition = "ease 0.2s";
        navbar.style.display = "none";
        verifMaxView = true;
    }else {
        terminal.style.width = "700px";
        terminal.style.height = "400px";
        terminal.style.marginTop = "100px";
        navbar.style.display = "block";
        verifMaxView = false;
        document.getElementById('inputEntrada').focus();
    }
}

btn_exitView.onclick = function exitTerminalView() {
    terminal.style.display = "none";
    navbar.style.display = "block";
}
// TERMINAL - END