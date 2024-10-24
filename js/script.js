document.getElementById('edit-profile').addEventListener('click', function() {
    // Edita o Nome
    let nome = prompt("Edite seu nome:", document.getElementById('nome').innerText);
    if (nome) {
      document.getElementById('nome').innerText = nome;
    }
  
    // Edita o cargo
    let cargo = prompt("Edite sua profissão:", document.getElementById('cargo').innerText);
    if (cargo) {
      document.getElementById('cargo').innerText = cargo;
    }
  
    // Edita Sobre Mim
    let sobre = prompt("Edite a descrição 'Sobre Mim':", document.getElementById('sobre').innerText);
    if (sobre) {
      document.getElementById('sobre').innerText = sobre;
    }
  
    // Edita Gostos Pessoais
    let gosto1 = prompt("Edite seu primeiro gosto:", document.getElementById('gosto1').innerText);
    if (gosto1) {
      document.getElementById('gosto1').innerText = gosto1;
    }
  
    let gosto2 = prompt("Edite seu segundo gosto:", document.getElementById('gosto2').innerText);
    if (gosto2) {
      document.getElementById('gosto2').innerText = gosto2;
    }
  
    let gosto3 = prompt("Edite seu terceiro gosto:", document.getElementById('gosto3').innerText);
    if (gosto3) {
      document.getElementById('gosto3').innerText = gosto3;
    }

  
    // Edita Motivações
    let motivacoes = prompt("Edite suas motivações:", document.getElementById('motivacoes').innerText);
    if (motivacoes) {
      document.getElementById('motivacoes').innerText = motivacoes;
    }

    // Edita Contatos
    let contato1 = prompt("Edite seu primeiro contato:", document.getElementById('contato1').innerText);
    if (contato1) {
        document.getElementById('contato1').innerText = 'Email: ' +  contato1;
    }

    let contato2 = prompt("Edite seu segundo contato:", document.getElementById('contato2').innerText);
    if (contato2) {
        document.getElementById('contato2').innerText = 'Telefone: ' +  contato2;
    }


  });

  document.getElementById('year').textContent = new Date().getFullYear();

  
  