const botaoZap = document.querySelector('#botao-comprar')
botaoZap.addEventListener('click', chamaNoZap)

function chamaNoZap() {
    
    carrinho.forEach(verificaRepetidos)

    var cep = document.querySelector('#cep').value
    if(cep) {
        window.open(`https://wa.me//557186686018?text=Olá,%20olhei%20o%20catálogo%20AZUNI%20e%20tenho%20interesse%20nisso:%0A%0A${produtoComprado}%0A%0AO%20total%20da%20minha%20compra%20foi%20de:%0AR$%20${total.toFixed(2)}.%0A%0AO%20meu%20CEP%20é:%0A%0A${cep}.`)
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
    if(!(produtoComprado.includes(`${quantidade} ${compra.nome}.%0A`))) {
        produtoComprado += `${quantidade} ${compra.nome}.%0A`
    }
}