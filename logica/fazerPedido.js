const botaoZap = document.querySelector('#botao-comprar')
botaoZap.addEventListener('click', chamaNoZap)

function chamaNoZap() {
    
    carrinho.forEach(verificaRepetidos)

    window.open(`https://wa.me//557186686018?text=Olá,%20olhei%20o%20catálogo%20AZUNI%20e%20tenho%20interesse%20nisso:%0A%0A${produtoComprado}%0A%0AO total%20da%20minha%20compra%20foi%20de:%0AR$${total.toFixed(2)}.`)
}

function verificaRepetidos(compra, index) {
    let quantidade = 0
    carrinho.forEach(verifica => {
        if(verifica.nome === compra.nome) {
            quantidade += 1
        }
    })
    if(!(produtoComprado.includes(` ${quantidade} ${compra.nome},`))) {
        produtoComprado += `
         ${quantidade} ${compra.nome}.`
    }
}