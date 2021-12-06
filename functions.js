var recebidos = JSON.parse(localStorage.getItem("@iwagy/messagens")) || []
var contato =document.getElementById("contato")

contato.addEventListener("submit" , (event) =>{ event.preventDefault ();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    recebidos.push(info)
localStorage.setItem ("@iwagy/messagens", JSON.stringify(recebidos));

contato.reset();
    
alert("mensagem enviada com sucesso");
});