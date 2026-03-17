function criarCaixaDeInteracao() {
    const input = document.createElement('textarea');
    input.id = 'pedidoInput';
    input.style.width = '500px';
    input.style.height = '50px';
    input.style.padding = '3px';
    input.style.marginBottom = '5px';
    input.style.fontSize = '14px';
    input.style.border = '1px solid #';
    input.style.borderRadius = '4px';
    input.style.display = 'block';
    input.style.margin = '0 auto';
    input.style.backgroundColor = '#FFFAF0';

    const botao = document.createElement('button');
    botao.textContent = 'Digite seu pedido';
    botao.style.padding = '10px 20px';
    botao.style.backgroundColor = '#800020';
    botao.style.color = 'white';
    botao.style.border = 'none';
    botao.style.borderRadius = '4px';
    botao.style.fontSize = '16px';
    botao.style.cursor = 'pointer';
    botao.style.display = 'block';
    botao.style.margin = '10px auto';

    const pedidoRecebido = document.createElement('div');
    pedidoRecebido.id = 'pedidoRecebido';
    pedidoRecebido.style.textAlign = 'center';
    pedidoRecebido.style.fontWeight = 'bold';
    pedidoRecebido.style.marginTop = '20px';

    document.body.appendChild(input);
    document.body.appendChild(botao);
    document.body.appendChild(pedidoRecebido);

    botao.addEventListener('click', function() {
        const pedido = input.value;
        if (pedido.trim()) {
            pedidoRecebido.textContent = "Pedido Recebido: " + pedido;
            input.value = '';
        } else {
            alert('Por favor, escreva seu pedido.');
        }
    });
}

window.onload = criarCaixaDeInteracao;
