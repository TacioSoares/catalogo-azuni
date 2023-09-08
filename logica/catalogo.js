containerAneis = document.querySelector('.aneis').querySelector('.container')
containerBrincos = document.querySelector('.brincos').querySelector('.container')
containerCorrentes = document.querySelector('.correntes').querySelector('.container')
containerConjuntos = document.querySelector('.conjuntos').querySelector('.container')
containerPulseiras = document.querySelector('.pulseiras').querySelector('.container')


function preenchePecas(produtos, container) {
    produtos.forEach(elemento => { //Para cada anel, a criação de um anuncio

        // CRIANDO ELEMENTOS
        var divProduto = document.createElement('div')
        var img = document.createElement('img')
        var h3 = document.createElement('h3')
        var p = document.createElement('p')
        var button = document.createElement('input')

        // INSERE ATRIBUTOS NOS ELEMENTOS CRIADOS
        insereAtributos(divProduto, img, elemento, button) 

        // ADICIONA TEXTOS NOS ELEMENTOS
        adicionaTextos(h3, p, elemento)

        // INSERE OS ELEMENTOS UM NOS OUTROS
        container.appendChild(aglutinaElementos(divProduto, img, h3, p, button))
    });
}

function insereAtributos(div, img, elemento, button) {
    div.setAttribute('class', 'container-produto')
    img.setAttribute('src', `${elemento.fotos[0]}`)
    img.setAttribute('alt', `${elemento.nome}`)
    img.addEventListener('click', mostraTodasAsFotos)
    button.setAttribute('type', `button`)
    button.setAttribute('value', `Adicionar ao carrinho`)
    button.setAttribute('class', `botao-adiciona-no-carrinho`)
}

function adicionaTextos(h3, p, elemento) {
    h3.innerHTML = `${elemento.nome}`
    p.innerHTML = `R$ ${elemento.valor.toFixed(2)}`
}

function aglutinaElementos(div, img, h3, p, button) {
    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(button)
    return div
}


preenchePecas(estoque.aneis, containerAneis)
preenchePecas(estoque.brincos, containerBrincos)
preenchePecas(estoque.colares, containerCorrentes)
preenchePecas(estoque.conjuntos, containerConjuntos)
preenchePecas(estoque.conjuntos, containerPulseiras)


function mostraTodasAsFotos() {
    console.log()
}