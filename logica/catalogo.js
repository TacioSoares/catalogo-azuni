const containerAneis = document.querySelector('.aneis').querySelector('.container')
const containerBrincos = document.querySelector('.brincos').querySelector('.container')
const containerCorrentes = document.querySelector('.correntes').querySelector('.container')
const containerConjuntos = document.querySelector('.conjuntos').querySelector('.container')
const containerPulseiras = document.querySelector('.pulseiras').querySelector('.container')
var fotosDasPeças = []
var descricaoDasPecas = []


function preenchePecas(produtos, container) {
    produtos.forEach(elemento => { //Para cada anel, a criação de um anuncio

        // CRIANDO ELEMENTOS
        var divProduto = document.createElement('div')
        var img = document.createElement('img')
        var h3 = document.createElement('h3')
        var p = document.createElement('p')
        var button = document.createElement('input')
        var pEsgotado = document.createElement('p')
        // INSERE ATRIBUTOS NOS ELEMENTOS CRIADOS
        insereAtributos(divProduto, img, elemento, button, pEsgotado) 

        // ADICIONA TEXTOS NOS ELEMENTOS
        adicionaTextos(h3, p, elemento, pEsgotado)
       
        // CONFERE STATUS DO PRODUTO
        
        // INSERE OS ELEMENTOS UM NOS OUTROS
        container.appendChild(aglutinaElementos(divProduto, img, h3, p, button, pEsgotado, elemento))

        confereStatus(elemento, divProduto, pEsgotado, button, img, p)
    });
}

function insereAtributos(div, img, elemento, button, pEsgotado) {
    div.setAttribute('class', 'container-produto')
    img.setAttribute('src', `${elemento.fotos[0]}`)
    descricaoDasPecas.push(elemento.descricao)
    fotosDasPeças.push(elemento.fotos)
    img.setAttribute('alt', `${elemento.nome}`)
    button.setAttribute('type', `button`)
    button.setAttribute('value', `Adicionar ao carrinho`)
    button.setAttribute('class', `botao-adiciona-no-carrinho`)
    pEsgotado.setAttribute('id','esgotado')
}

function adicionaTextos(h3, p, elemento, pEsgotado) {
    h3.innerHTML = `${elemento.nome}`
    p.innerHTML = `R$ ${elemento.valor.toFixed(2)}`
    pEsgotado.innerHTML = 'ESGOTADO'
}

function aglutinaElementos(div, img, h3, p, button, pEsgotado, elemento) {
    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(button)
    
    return div
}

function confereStatus(elemento, div, pEsgotado, button, img, p) {
    if(elemento.status != 'disponivel') {
        button.setAttribute('disabled', 'true')
        img.style.opacity = '0.5'
        div.appendChild(pEsgotado)
    }
    if(elemento.promocao) {
        
        p.innerHTML = `<span class="riscado">R$ ${elemento.valor.toFixed(2)}</span> <span class="promo">R$ ${elemento.precoPromocional.toFixed(2)}</span>`
        if(elemento.nomePromocao == 'blackfriday') {
            div.style.backgroundColor = 'black'
            p.style.color = 'red'
            p.style.fontWeight = 'bolder'
            div.querySelector('h3').style.color = 'white'
            div.querySelector('span').style.color = 'white'
        }
    }
}

preenchePecas(estoque.aneis, containerAneis)
preenchePecas(estoque.brincos, containerBrincos)
preenchePecas(estoque.colares, containerCorrentes)
preenchePecas(estoque.conjuntos, containerConjuntos)
preenchePecas(estoque.conjuntos, containerPulseiras)


