// variaveis globais
var	conta = [];

  window.onload = function pagCadastro() {
	pagLogin();
  };

  function pagCadastro() {
  	//abre a pagina de cadastro
	document.getElementById("container").innerHTML = document.getElementById("cadastro").innerHTML;
	//esconde a saida
	document.getElementById("saida").style.display = "none";
  }

  function pagLogin() {
  	//abre a pagina de login
	document.getElementById("container").innerHTML = document.getElementById("login").innerHTML;
	//esconde a saida
	document.getElementById("saida").style.display = "none";
  }

  //==========================================
  //Funcoes para Erros
  function erro_ok() {
  	//quando quer tirar a mensagem de erro
	document.getElementById("saida").style.display = "none";
  }

  function erro_ValorFaltando() {
  	//quando não preencheu tudo
	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1>Preencha as lacunas!</h1>";
	document.getElementById("saida").innerHTML += "<button onclick='erro_ok();' style='width: 30%; '>Ok</button>"
  }

  function erro_Email() {
  	//email em formato invalido
	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1>Email Invalido!</h1>";
	document.getElementById("saida").innerHTML += "<button onclick='erro_ok();' style='width: 30%; '>Ok</button>"
  }

  function erro_SenhaDiferente() {
  	//as duas senhas sao diferentes"
	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1>As Senhas não são iguais!</h1>";
	document.getElementById("saida").innerHTML += "<button onclick='erro_ok();' style='width: 30%; '>Ok</button>"
  }

  function erro_UsuarioNaoEncontrado(){
  	// Usuario do login nao encotrado
	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1>Usuario errado ou não encontrado!</h1>";
	document.getElementById("saida").innerHTML += "<button onclick='erro_ok();' style='width: 30%; '>Ok</button>"
  }

  function erro_SenhaErrada(){
  	// Usuario existe mas senha errada
	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1>Senha incorreta!</h1>";
	document.getElementById("saida").innerHTML += "<button onclick='erro_ok();' style='width: 30%; '>Ok</button>"
  }


  //==========================================
  //Funcoes para o cadastro de uma conta nova

  function novoCadastro(){
  	//recebe as variaveis e coloca cada uma em uma posição do vetor
  	conta[0] = document.getElementById("nome").value;
  	conta[1] = document.getElementById("email").value;
  	conta[2] = document.getElementById("senha1").value;

  	// mostra que deu certo pro usuario
  	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1 style='color: #fff;'>Sua conta foi criada com sucesso!</h1>";
	document.getElementById("saida").innerHTML += "<button onclick='pagLogin();' style='width: 30%; '>Fazer Login</button>"
  }

  function confereCadastro(){
  	//confere se os dados dados fazem sentido
  	//	se fazem, roda "novoCadastro()"

  	//Recebe as variaveis
  	var	analise = [];
  	analise[0] = document.getElementById("nome").value;
  	analise[1] = document.getElementById("email").value;
  	analise[2] = document.getElementById("senha1").value;
  	analise[3] = document.getElementById("senha2").value;

  	// Confere se tem algum valor faltando
	for (var i = 0; i < analise.length; i++) {
	  if (!analise[i]) {
	    // se n tem tudo, mada o erro e acaba aqui
	    erro_ValorFaltando();
	    return;
	  }
	}

	//confere se tem um "@" e um "." em algum ponto depois na string
	if (!/@.*\./.test(analise[1])) {
		//se n tem, acaba aqui
		erro_Email();
		return;
	}

	//confere se as duas senhas sao iguais
	if (analise[2] !== analise[3]) {
		//se e diferente, acaba aqui
		erro_SenhaDiferente();
		return;
	}
	
	//se chegou ate aqui, e pq ta tudo certo
	novoCadastro();
  }

  //==========================================
  // funcoes para o login

  function sucessoLogin() {
  	//deu certo na hr de logar

  	// mostra que deu certo pro usuario
  	document.getElementById("saida").style.display = "block";
	document.getElementById("saida").innerHTML = "<h1 style='color: #fff;'>Logado com sucesso!</h1>";
  }

  function confereLogin() {
  	// Roda quando alguem tenta logar
  	// confere se ta certo

  	var dados = []
  	dados[0] = document.getElementById("usuario").value;
  	dados[1] = document.getElementById("senha").value;

  	// tenta achar o usuario
  	// 	olha o nome e o email
  	if (dados[0] == conta[0] || dados[0] == conta[1]){
  		// encontrou o usuario, agr confere a senha
  		if (dados[1] == conta[2]){
  			// deu tudo certo yay
  			sucessoLogin();
  			return;
  		} else{
  			//senha errada
  			erro_SenhaErrada();
  			return;
  		}
  	} else{
  		// usuario nao encontrado
  		erro_UsuarioNaoEncontrado();
  		return;
  	}

  }