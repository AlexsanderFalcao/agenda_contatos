document.getElementById('formularioContato').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Criando uma nova linha na tabela
    const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Inserindo células na nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    // Adicionando os valores do formulário nas células
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Resetando o formulário
    document.getElementById('formularioContato').reset();
});
