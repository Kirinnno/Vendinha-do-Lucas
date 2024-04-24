const botoesComprar = document.querySelectorAll('.botao-comprar');
const elementoQuantidadeItens = document.getElementById('quantidade-itens');
const listaProdutos = document.getElementById('lista-produtos');
let totalItens = 0;
let produtosAdicionados = [];

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        totalItens++;
        const nomeProduto = botao.parentNode.querySelector('h2').textContent;
        produtosAdicionados.push(nomeProduto);
        elementoQuantidadeItens.textContent = totalItens;
        atualizarListaProdutos();
    });
});

function atualizarListaProdutos() {
    listaProdutos.innerHTML = '';
    produtosAdicionados.forEach(produto => {
        const itemLista = document.createElement('li');
        itemLista.textContent = produto;
        listaProdutos.appendChild(itemLista);
    });
}

const botaoConfirmarCompra = document.getElementById('botao-confirmar');
botaoConfirmarCompra.addEventListener('click', () => {
    alert('Obrigado por comprar conosco!');
    totalItens = 0;
    produtosAdicionados = [];
    elementoQuantidadeItens.textContent = totalItens;
    listaProdutos.innerHTML = '';
});
