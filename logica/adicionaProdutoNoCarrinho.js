
const botaoAddCarrinho = document.querySelectorAll('.botao-adiciona-no-carrinho')
const carrinho = []
const lista = document.querySelector('.lista-carrinho')
/* console.log(carrinho.getBoundingClientRect()) */
const quantidade = document.querySelector('.quantidade')
var produtoComprado = ''

botaoAddCarrinho.forEach(botao => {
    botao.addEventListener('click', pegaProdutoClicado)
})

function pegaProdutoClicado(event) {
    let nomeProdutoClicado = (event.target.parentNode.querySelector('h3').innerHTML)
    procuraProdutoClicado(nomeProdutoClicado, event)
}

function procuraProdutoClicado(nomeProdutoClicado, event) {
    estoque.aneis.forEach(anel=>{
        if(anel.nome.indexOf(nomeProdutoClicado)===0) {
            enviaProCarrinho(anel.fotos[0], event)
            adicionaProdutoNoCarrinho(anel)
        }
    })
    estoque.brincos.forEach(brinco=>{
        if(brinco.nome.indexOf(nomeProdutoClicado)===0) {
            adicionaProdutoNoCarrinho(brinco)
        }
    })
    estoque.colares.forEach(colar=>{
        if(colar.nome.indexOf(nomeProdutoClicado)===0) {
            adicionaProdutoNoCarrinho(colar)
        }
    })
    estoque.conjuntos.forEach(conjunto=>{
        if(conjunto.nome.indexOf(nomeProdutoClicado)===0) {
            adicionaProdutoNoCarrinho(conjunto)
        }
    })
    estoque.pulseiras.forEach(pulseira=>{
        if(pulseira.nome.indexOf(nomeProdutoClicado)===0) {
            adicionaProdutoNoCarrinho(pulseira)
        }
    })
}

function adicionaProdutoNoCarrinho(produto) {
    carrinho.push(produto)
    atualizaCarrinho()
}

function atualizaCarrinho() {
    produtoComprado = ''
    if(carrinho.length > 0){
        botaoComprar.removeAttribute('disabled')
        quantidade.innerHTML = `${carrinho.length}`
    } else {
        botaoComprar.setAttribute('disabled', 'true')
        quantidade.innerHTML = ''
    }
    carrinho.forEach(compra => {
        produtoComprado += ` ${compra.nome},`
    })
    criaPaginaCarrinho()
}

function enviaProCarrinho(foto, event) {
    console.log(event.target.parentNode/* .getBoundingClientRect() */)
    let localPartida = event.target.parentNode
    let imagemAtirada = document.createElement('img')
    configuraImage(imagemAtirada, foto, localPartida)

}

function configuraImage(imagem, foto, localPartida) {
    /* console.log(iconeCarrinho.getBoundingClientRect().x)
    console.log(imagem.getBoundingClientRect()) */
    let posicaoX = iconeCarrinho.getBoundingClientRect().x.toFixed(0)
    let posicaoY = iconeCarrinho.getBoundingClientRect().y.toFixed(0)
    imagem.setAttribute('src', foto)
    imagem.setAttribute('class', 'atirada')
    /* imagem.style.top = '0' */
    localPartida.appendChild(imagem)
    console.log(posicaoX-imagem.getBoundingClientRect().x)
    console.log(localPartida)
    setTimeout(() => {
        imagem.style.transition = 'transform 2s;'
        imagem.style.transform  = `translate(${posicaoX-imagem.getBoundingClientRect().x}px, -${imagem.getBoundingClientRect().y-posicaoY}px)`
        setTimeout(() => {
        localPartida.removeChild(imagem)
        }, 300)
    }, 100);
    
    /* transform: translate(200px, 50px); */
}