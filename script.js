// Função para alterar o conteúdo do parágrafo quando o botão for clicado
document.getElementById('meuBotao').addEventListener('click', function() {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.textContent = "Você clicou no botão! O texto foi alterado.";
    });