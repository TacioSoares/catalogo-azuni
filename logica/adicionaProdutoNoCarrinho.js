
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
            enviaProCarrinho(brinco.fotos[0], event)
            adicionaProdutoNoCarrinho(brinco)
        }
    })
    estoque.colares.forEach(colar=>{
        if(colar.nome.indexOf(nomeProdutoClicado)===0) {
            enviaProCarrinho(colar.fotos[0], event)
            adicionaProdutoNoCarrinho(colar)
        }
    })
    estoque.conjuntos.forEach(conjunto=>{
        if(conjunto.nome.indexOf(nomeProdutoClicado)===0) {
            enviaProCarrinho(conjunto.fotos[0], event)
            adicionaProdutoNoCarrinho(conjunto)
        }
    })
    estoque.pulseiras.forEach(pulseira=>{
        if(pulseira.nome.indexOf(nomeProdutoClicado)===0) {
            enviaProCarrinho(pulseira.fotos[0], event)
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
        quantidade.style.display = 'inline'
    } else {
        botaoComprar.setAttribute('disabled', 'true')
        quantidade.innerHTML = ''
        quantidade.style.display = 'none'
    }
    criaPaginaCarrinho()
}

function enviaProCarrinho(foto, event) {
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
    setTimeout(() => {
        imagem.style.transition = 'transform 2s;'
        imagem.style.transform  = `translate(${posicaoX-imagem.getBoundingClientRect().x}px, -${imagem.getBoundingClientRect().y-posicaoY}px)`
        setTimeout(() => {
        localPartida.removeChild(imagem)
        }, 300)
    }, 100);
    
    /* transform: translate(200px, 50px); */
}