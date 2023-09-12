const categoria = document.querySelector('#categoria-itens')
const containerProdutos = document.querySelectorAll('.produtos')

categoria.addEventListener('change', filtroDeCategoria)

function filtroDeCategoria() {
    let categoriaSelecionada = categoria.value

    containerProdutos.forEach(section => {
        if(categoriaSelecionada != '' && categoriaSelecionada != 'todos') {
            section.style.transition = 'opacity 0.5s'
            section.style.opacity = '0%'
            setTimeout(() => {
                section.style.display = 'none'
                section.style.marginTop = '0px'
                if(section.classList[1] == categoriaSelecionada) {
                    section.style.display = 'block'
                    section.style.marginTop = '320px'
                    section.style.opacity = '100%'
                }
            }, 700);
        } else {
            section.style.transition = 'opacity 0.5s'
            section.style.marginTop = '0px'
            containerProdutos[0].style.marginTop = '320px'
            section.style.display = 'block'
            setTimeout(() => {
                section.style.opacity = '100%' 
            }, 500);
        }
        
    })
    setTimeout(() => {
        window. scrollTo(0, 0)
    }, 400);
}
