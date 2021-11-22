var nome = document.getElementById
var whatsapp =document.getElementById("whatsapp");
var email=document.getElementById("email");
var mensagem = Document.getElementById("mensagem");
var btnEnviar =document.getElementById("enviar");
var contato =document.getElementById("contato")

btnEnviar.addEventListener('submit' , event =>{
    e.preventDefault ();
    const formData = new FormData (event.target);
    const date = new Date ().toLocaleDateString();
    const info = Objet.fromEntries(formdata);
alert("mensagem enviada com sucesso");
});