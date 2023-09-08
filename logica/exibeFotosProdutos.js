
const pecasNoCatalogo = Array.from(document.querySelectorAll('.container-produto'))
var posicao = 0

let arrastando = false;
let posicaoInicialX 
let posicaoElementoX

window.addEventListener('mousedown', function(e){
    posicao = e.pageY
})


pecasNoCatalogo.forEach(card => {
    card.addEventListener('click', () => {
        let fotosDaPecaClicada = fotosDasPeças[pecasNoCatalogo.indexOf(card)]
        
        mostraTodasAsFotos(fotosDaPecaClicada)
    })

})

function mostraTodasAsFotos(imagens) {
    // CRIA A SECTION QUE VAI A DIV COM TODAS AS FOTOS
    let sectionFotosGrandes = document.createElement('section')
    sectionFotosGrandes.setAttribute('class','fotos-grandes')
    
    // CRIA A DIV QUE VAI AS FOTOS DENTRO
    let divContainer = document.createElement('div')
    divContainer.setAttribute('class', 'container-fotos')

    // CRIA AS IMAGENS 
    imagens.forEach(imagem => {
        let image = document.createElement('img')
        image.setAttribute('src', `${imagem}`)

        // ADICIONA AS IMAGENS DENTRO DA DIV
        divContainer.appendChild(image)
    })
    // CRIA BOTÃO DE FECHAR A SECTION 
    let spanFecha = document.createElement('span')
    spanFecha.setAttribute('class','material-symbols-outlined bota-fechar')
    spanFecha.innerHTML = 'cancel'
    // ADICIONA A DIV E SPAN DENTRO DA SECTION
    sectionFotosGrandes.appendChild(spanFecha)
    sectionFotosGrandes.appendChild(divContainer)
    
    // ADICIONA A FUNÇÃO FECHAR NO SPAN
    spanFecha.addEventListener('click', fechaFotos)

    // INSERE A SECTION EM DETERMINADA POSICAO DENTRO DO BODY
    sectionFotosGrandes.style.top = `${posicao-400}px`
    document.body.appendChild(sectionFotosGrandes)
    
    // DESABILITA O SCROLL DA PÁGINA
    document.body.style.overflowY = 'hidden'

    // CRIA O ARRASTO COM DEDO/MOUSE
    arrastoDaDiv(divContainer)
}

function arrastoDaDiv(divContainer) {

    divContainer.addEventListener("mousedown", iniciarArrasto);
    divContainer.addEventListener("touchstart", iniciarArrasto);

}

function iniciarArrasto(event) {
    let elementoArrastado = event.target.parentNode
    console.log(elementoArrastado)
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
    console.log(posicaoElementoX+deltaX)
    elementoArrastado.style.left = `${posicaoElementoX+deltaX}px`;
}
  
function pararArrasto(event) {
    let elementoArrastado = event.target.parentNode
    console.log('soltou')
    arrastando = false;
    elementoArrastado.removeEventListener("mousemove", arrastar);
    elementoArrastado.removeEventListener("touchmove", arrastar);
    elementoArrastado.removeEventListener("mouseup", pararArrasto);
    elementoArrastado.removeEventListener("touchend", pararArrasto);
}
  

function fechaFotos(event) {
    // REMOVE A SECÇÃO DO HTML
    document.body.removeChild(event.target.parentNode)
    document.body.style.overflowY = ''
}