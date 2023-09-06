const botaoZap = document.querySelector('#botao-comprar')

botaoZap.addEventListener('click', chamaNoZap)

function chamaNoZap() {
    
    window.open(`https://wa.me//5571992819692?text=Olá,%20olhei%20o%20catálogo%20AZUNI%20e%20tenho%20interesse%20nisso:${produtoComprado}%20o%20total%20da%20minha%20compra%20foi%20de%20${total.toFixed(2)}.`)
}