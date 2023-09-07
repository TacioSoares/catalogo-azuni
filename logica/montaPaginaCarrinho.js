listaDeItens = []
var total = 0
const iconeCarrinho = document.querySelector('.carrinho')
const botaoComprar = document.querySelector('#botao-comprar')
const bandejaCarrinho = document.querySelector('#carrinho')

iconeCarrinho.addEventListener('click', moveBandejaCarrinho)

function moveBandejaCarrinho() {
    console.log('clicou')
    if(bandejaCarrinho.style.display === 'block') {
        bandejaCarrinho.style.left = '100%'
        bandejaCarrinho.style.display = 'none'
    } else {
        bandejaCarrinho.style.display = 'block'
        window.scrollTo(0,0)
        /* window.scrollTo(bandejaCarrinho.getBoundingClientRect().x, bandejaCarrinho.getBoundingClientRect().y) */
        bandejaCarrinho.style.left = '0'   
    }
}

function criaPaginaCarrinho() {
    lista.innerHTML = ''
    carrinho.forEach(produto =>{
        let li = document.createElement('li')
        let imagem = document.createElement('img')
        let span = document.createElement('span')
        span.addEventListener('click', removeDaLixeira)
        colocaAtributos(li, imagem, span, produto)

        let pn = document.createElement('p')
        let pv = document.createElement('p')
        colocaTextos(pn, pv, span, produto)

        lista.appendChild(montaPedido(li, imagem, pn, pv, span))
    })
    realizaSomatoria()
}

function colocaAtributos(li, imagem, span, produto) {
    li.setAttribute('class', 'item-carrinho')
    imagem.setAttribute('src', `${produto.fotos[0]}`)
    imagem.setAttribute('alt', `produto`)
    span.setAttribute('class', 'material-symbols-outlined lixeira')
}

function colocaTextos(pn, pv, span, produto) {
    pn.innerHTML = `${produto.nome}`
    pv.innerHTML = `${produto.valor.toFixed(2)}`
    span.innerHTML = 'delete'
}

function montaPedido(li, imagem, pn, pv, span) {
    li.appendChild(imagem)
    li.appendChild(pn)
    li.appendChild(pv)
    li.appendChild(span)
    return li
}

function realizaSomatoria() {
    total = 0
    carrinho.forEach(produto => {
        total += produto.valor
    })
    criaElementosTotais(total)
}

function criaElementosTotais(total) {
    let liTotal = document.createElement('li')
    liTotal.setAttribute('class', `item-carrinho passa-regua`)
    let spanTotal = document.createElement('span')
    spanTotal.setAttribute('class', `total`)
    let spanValorTotal = document.createElement('span')
    spanValorTotal.setAttribute('class', `total`)
    spanTotal.innerHTML = 'TOTAL'
    spanValorTotal.innerHTML = `${total.toFixed(2)}`
    liTotal.appendChild(spanTotal)
    liTotal.appendChild(spanValorTotal)
    lista.appendChild(liTotal)
}

function removeDaLixeira(event) {
    let nomeDoItemRemovido = event.target.parentNode.querySelector('p').innerText
    carrinho.forEach(produto => {
        if(produto.nome == nomeDoItemRemovido) {
            carrinho.splice(carrinho.indexOf(produto), 1)
            atualizaCarrinho()
        }
    })

}

