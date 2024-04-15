// API de autocomplemento do endereço apartir do CEP informado
// API do https://brasilapi.com.br/docs#tag/CEP

function buscaCep() {
    let cep = document.getElementById('cepUsuario').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("enderecoUsuario").value = endereco.street
                document.getElementById("bairroUsuario").value = endereco.neighborhood
                document.getElementById("cidadeUsuario").value = endereco.city
            }
            else if(req.status === 404){
                alert("CEP inválido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function(){
    let cepUsuario = document.getElementById("cepUsuario");
    cepUsuario.addEventListener("blur", buscaCep);
}