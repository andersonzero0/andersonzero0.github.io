var btn_maxView = document.getElementById('btn_maxView');
var btn_exitView = document.getElementById('btn_exitView');
var terminal = document.getElementById('terminal');
var content_data = document.getElementById('content_data');
var btn_openTerminal = document.getElementById('btn_openTerminal');
terminal.style.display = "none";

//header
now = new Date;
dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

content_data.innerHTML = dayName[now.getDay() ] + ", " + now.getDate() + " de " + monName[now.getMonth()] +  " de "  +     now.getFullYear ();
//----------

//terminal

btn_openTerminal.onclick = function openTerminal() {
    terminal.style.transition = "ease 0.2s";
    terminal.style.display = "block";
    document.getElementById('inputEntrada').focus();
}

var verifMaxView = false;
document.getElementById('inputEntrada').focus();
btn_maxView.onclick = function maxView() {
    if(verifMaxView === false) {
        terminal.style.transition = "ease 0.2s";
        terminal.style.width = "100%";
        terminal.style.height = "100vh";
        terminal.style.marginTop = 0;
        verifMaxView = true;
    }else {
        terminal.style.width = "700px";
        terminal.style.height = "400px";
        terminal.style.marginTop = "100px";
        verifMaxView = false;
    }
}

btn_exitView.onclick = function exitTerminalView() {
    terminal.style.display = "none";
}
// -----------