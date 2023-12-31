const botaoZap = document.querySelector('#botao-comprar')
botaoZap.addEventListener('click', chamaNoZap)

function chamaNoZap() {
    
    carrinho.forEach(verificaRepetidos)

    var cep = document.querySelector('#cep').value
    if(cep) {
        window.open(`https://wa.me//557186686018?text=Olá,%20olhei%20o%20site%20AZUNI%20e%20tenho%20interesse%20em:%0A%0A${produtoComprado}%0A*Subtotal*:%0AR$%20${total.toFixed(2)}.%0A%0AGostaria%20de%20saber%20o%20valor%20do%20frete.%0AO%20*meu%20CEP*%20é:%0A${cep}.`)
    } else {
        window.alert('Por favor, digite seu CEP no campo para que possamos calcular o seu frete.')
    }

    
}

function verificaRepetidos(compra, index) {
    let quantidade = 0
    carrinho.forEach(verifica => {
        if(verifica.nome === compra.nome) {
            quantidade += 1
        }
    })
    if(!(produtoComprado.includes(`_${quantidade}x ${compra.nome}._%0A`))) {
        produtoComprado += `_${quantidade}x ${compra.nome}._%0A`
    }
}