
const botaoAddCarrinho = document.querySelectorAll('.botao-adiciona-no-carrinho')
const carrinho = []
const lista = document.querySelector('.lista-carrinho')
/* console.log(carrinho.getBoundingClientRect()) */


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
    if(carrinho.length > 0){
        botaoComprar.removeAttribute('disabled')
    } else {
        botaoComprar.setAttribute('disabled', 'true')
    }
    criaPaginaCarrinho()
}

function enviaProCarrinho(foto, event) {
    console.log(event.target.parentNode/* .getBoundingClientRect() */)
    let localPartida = event.target.parentNode
    let imagemAtirada = document.createElement('img')
    configuraImage(imagemAtirada, foto, localPartida)

}

function configuraImage(imagem, foto, localPartida) {
    console.log(iconeCarrinho.getBoundingClientRect())
    imagem.setAttribute('src', foto)
    imagem.setAttribute('class', 'atirada')
    localPartida.appendChild(imagem)
    setTimeout(() => {
        imagem.style.transition = '0.3s;'
        imagem.style.top = '-145px'
        imagem.style.left = '423px'
    }, 100);
    
    /* transform: translate(200px, 50px); */
}