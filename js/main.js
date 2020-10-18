function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
}

function redirecionar() {
    window.open("https://neoxscans.com/manga/56789/"); //abrir em uma nova janela
    //window.location.href = "https://neoxscans.com/manga/56789/"; //abrir na mesma janela
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/*
function soma(n1, n2) {
    return n1 + n2;
}


var validar= 0;

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    }
    else { 
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/

/*
var d = new Date();
alert(d.getTime());
*/

/*
var count;
for(count=1; count <= 5; count++) {
    alert(count);
}
*/


/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}
else {
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maca", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maca", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Jota Nascimento";
//var idade = 23;
//var idade2 = 10;
//var frase = "Japao e o melhor time do mundo";
//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japao", "Brasil"));
