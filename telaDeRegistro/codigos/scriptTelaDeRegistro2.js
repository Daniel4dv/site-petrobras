    document.getElementById('loginButton').addEventListener('click', function() {
    var acepUsuario = document.getElementById('cepUsuario').value;
    var acidadeUsuario = document.getElementById('cidadeUsuario').value;
    var aenderecoUsuario = document.getElementById('enderecoUsuario').value;
    var anumeroUsuario = document.getElementById('numeroUsuario').value;
    var anumeroCasaUsuario = document.getElementById('numeroCasaUsuario').value;
    var abairroUsuario = document.getElementById('bairroUsuario').value;
    var atelefoneUsuario = document.getElementById('telefoneUsuario').value;
    var argUsuario = document.getElementById('rgUsuario').value;
    var acpfUsuario = document.getElementById('cpfUsuario').value;

    if (acepUsuario !== '' &&
        acidadeUsuario !== '' &&
        aenderecoUsuario !== '' &&
        anumeroUsuario !== '' &&
        anumeroCasaUsuario !== '' &&
        abairroUsuario !== '' &&
        atelefoneUsuario !== '' &&
        argUsuario !== '' &&
        acpfUsuario !== '') {
        // Todos os campos estão preenchidos, então chame sua função aqui
                    // Mostrar balão flutuante
                    document.getElementById('balao').style.display = 'block';
    
                    // Ocultar o balão após 3 segundos
                    setTimeout(function() {
                        document.getElementById('balao').style.display = 'none';

                    // Redirecionar para outra página após 3 segundos
                    window.location.href = 'F:/trabalhoFinalSenai/siteCompleto/Home/home.html';  // ALTERAR O PARA ONDE ESTÁ SENDO REDIRECIONADO 
                    }, 3000);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
        });