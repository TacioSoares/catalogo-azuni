
const pecasNoCatalogo = Array.from(document.querySelectorAll('.container-produto'))
var posicao = 0
const header = document.querySelector('header')
let arrastando = false;
let posicaoInicialX 
let posicaoElementoX
let contadorDePassagemDeFoto = 0
let fotosDaPecaClicada = []

window.addEventListener('mousedown', function(e){
    posicao = e.pageY
})


pecasNoCatalogo.forEach(card => {
    card.querySelector('img').addEventListener('click', () => {
        fotosDaPecaClicada = fotosDasPeças[pecasNoCatalogo.indexOf(card)]
        let descricaoDaPecaClicada = descricaoDasPecas[pecasNoCatalogo.indexOf(card)]
        mostraTodasAsFotos(fotosDaPecaClicada, descricaoDaPecaClicada)
    })

})

function mostraTodasAsFotos(imagens, descricao) {
    // CRIA A SECTION QUE VAI A DIV COM TODAS AS FOTOS
    let sectionFotosGrandes = document.createElement('section')
    sectionFotosGrandes.setAttribute('class','fotos-grandes')

    // CRIA A DIV QUE VAI AS FOTOS DENTRO
    let divContainer = document.createElement('div')
    divContainer.setAttribute('class', 'container-fotos')

    // CRIA O PARÁGRAFO QUE VAI A DESCRIÇÃO DA PEÇA DENTRO DA SECTION
    let pDescricao = document.createElement('p')
    pDescricao.setAttribute('class','descricao-peca')
    // ADICIONA DESCRICAO DENTRO DO PARAGRAFO P
    pDescricao.innerHTML = `${descricao}`

    // COLOCA A DIV NA POSICAO ORIGINAL, PARA EVITAR VOLTAR DA POSIÇÃO MEXIDA ANTES
    divContainer.style.left = '0'
    // CRIA AS IMAGENS 
    imagens.forEach(imagem => {
        let image = document.createElement('img')
        image.setAttribute('src', `${imagem}`)
        image.setAttribute('class','foto-grande')
        // ADICIONA AS IMAGENS DENTRO DA DIV
        divContainer.appendChild(image)
    })
    // CRIA BOTÃO DE FECHAR A SECTION E SETAS A ESQUERDA E DIREITA
    let spanFecha = document.createElement('span')
    let spanEsquerda = document.createElement('span')
    let spanDireita = document.createElement('span')
    // DEFINE AS CLASSES
    spanFecha.setAttribute('class','material-symbols-outlined bota-fechar')
    spanEsquerda.setAttribute('class','material-symbols-outlined seta-esquerda')
    spanDireita.setAttribute('class','material-symbols-outlined seta-direita')
    spanFecha.innerHTML = 'cancel'
    spanEsquerda.innerHTML = 'arrow_back_ios'
    spanDireita.innerHTML = 'arrow_forward_ios'
    // ADICIONA A DIV, SPAN, SETAS E PARAGRAFO DENTRO DA SECTION
    sectionFotosGrandes.appendChild(spanFecha)
    sectionFotosGrandes.appendChild(divContainer)
    sectionFotosGrandes.appendChild(spanEsquerda)
    sectionFotosGrandes.appendChild(spanDireita)
    sectionFotosGrandes.appendChild(pDescricao)
    // ADICIONA A FUNÇÃO FECHAR NO SPAN
    spanFecha.addEventListener('click', fechaFotos)
    spanDireita.addEventListener('click', passaFoto)
    spanEsquerda.addEventListener('click', voltaFoto)
    // INSERE A SECTION EM DETERMINADA POSICAO DENTRO DO BODY
    sectionFotosGrandes.style.top = `${posicao-350}px`
    window.scroll(0,posicao-350)
    document.body.appendChild(sectionFotosGrandes)
    
    // DESABILITA O SCROLL DA PÁGINA
    document.body.style.overflow = 'hidden'
    sectionFotosGrandes.style.overflow = 'hidden'
    header.style.width = `${sectionFotosGrandes.clientWidth}`
    // CRIA O ARRASTO COM DEDO/MOUSE
    arrastoDaDiv(divContainer)
}

function arrastoDaDiv(divContainer) {

    divContainer.addEventListener("mousedown", iniciarArrasto);
    divContainer.addEventListener("touchstart", iniciarArrasto);

}

function iniciarArrasto(event) {
    let elementoArrastado = event.target.parentNode
    arrastando = true;
    posicaoInicialX = event.clientX || event.touches[0].clientX;
    posicaoElementoX = elementoArrastado.getBoundingClientRect().left;
  
    // Adicione eventos de escuta para continuar o arrasto e parar o arrasto.
    elementoArrastado.addEventListener("mousemove", arrastar);
    elementoArrastado.addEventListener("touchmove", arrastar);
    elementoArrastado.addEventListener("mouseup", pararArrasto);
    elementoArrastado.addEventListener("touchend", pararArrasto);
}
  
function arrastar(event) {
    let elementoArrastado = event.target.parentNode
    if (!arrastando) return;
    const posX = event.clientX || event.touches[0].clientX;
  
    const deltaX = posX - posicaoInicialX;
    elementoArrastado.style.left = `${posicaoElementoX+deltaX}px`;
}
  
function pararArrasto(event) {
    let elementoArrastado = event.target.parentNode
    arrastando = false;
    elementoArrastado.removeEventListener("mousemove", arrastar);
    elementoArrastado.removeEventListener("touchmove", arrastar);
    elementoArrastado.removeEventListener("mouseup", pararArrasto);
    elementoArrastado.removeEventListener("touchend", pararArrasto);
}
  

function fechaFotos(event) {
    // REMOVE A SECÇÃO DO HTML
    document.body.style.overflow = ''
    document.body.removeChild(event.target.parentNode)
    contadorDePassagemDeFoto = 0
    event.target.parentNode.querySelector('.container-fotos').style.transition = 'none'
}

function passaFoto(event) {
    let elementoArrastado = event.target.parentNode.querySelector('.container-fotos')

    let passoParaPassar = elementoArrastado.querySelector('img').clientWidth

    /* console.log((passoParaPassar*(contadorDePassagemDeFoto+1))+60) */

    if(contadorDePassagemDeFoto < (fotosDaPecaClicada.length-1)) {
        console.log(contadorDePassagemDeFoto)
        elementoArrastado.style.transition = 'left 0.5s'
        elementoArrastado.style.left = `${-(((passoParaPassar)+40)*(contadorDePassagemDeFoto+1))}px`
        contadorDePassagemDeFoto += 1
        event.target.parentNode.querySelector('.seta-esquerda').style.opacity = '100%'
        if(contadorDePassagemDeFoto == (fotosDaPecaClicada.length-1)){
            event.target.style.opacity = '50%'
        }
    }
}
function voltaFoto(event) {
    let elementoArrastado = event.target.parentNode.querySelector('.container-fotos')
    let passoParaPassar = elementoArrastado.querySelector('img').clientWidth


    if((contadorDePassagemDeFoto) < fotosDaPecaClicada.length && contadorDePassagemDeFoto != 0) {
        elementoArrastado.style.transition = 'left 0.5s'
        elementoArrastado.style.left = `${-(((passoParaPassar)+40)*(contadorDePassagemDeFoto-1))}px`
        contadorDePassagemDeFoto -= 1
        event.target.parentNode.querySelector('.seta-direita').style.opacity = '100%'
        console.log(contadorDePassagemDeFoto)
        if(contadorDePassagemDeFoto == 0){
            event.target.style.opacity = '50%'
        }
    } else {
        event.target.style.opacity = '50%'
    }
}