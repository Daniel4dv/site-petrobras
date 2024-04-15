// Ativar a visualização da senha 
function togglePassword() {    
    var senhaInput = document.getElementById("senhaUsuario");
    var confirmarSenhaInput = document.getElementById("confirmarSenhaUsuario");
    var olhoIcone = document.getElementById("olho");

    if (senhaInput.type === "password" && confirmarSenhaInput.type === "password") {
        senhaInput.type = "text"; // Se a senha estiver visivel 
        confirmarSenhaInput.type = "text"; // Se a confirmação da senha estiver visivel 
        ohoIcone.className = "fas fa-eye-slash"; // ícone de olho fechado
    } else {
        senhaInput.type = "password"; // Se a senha estiver invisível 
        confirmarSenhaInput.type = "password"; // Se a confirmação da senha estiver invisível 
    }
}

// Função para validar a confirmação da senha
    let senha = document.getElementById('senhaUsuario');
    let senhaC = document.getElementById('confirmarSenhaUsuario');

    function validarSenha() {
        if (senha.value != senhaC.value) {
            senhaC.setCustomValidity("Senhas diferentes!");
            senhaC.reportValidity();
            return false;
        } else {
            senhaC.setCustomValidity("");
            return true;
        }
    }
    // verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
    senhaC.addEventListener('input', validarSenha);


// Define se o campo foi preenchido com email ou cpf 
    var acpfUsuario = document.getElementById('cpfUsuario').value;


// Função para voltar uma página
    document.getElementById("backBtn").addEventListener("click", function(){
        history.back();
    });