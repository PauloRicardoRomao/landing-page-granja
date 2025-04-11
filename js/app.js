function abreMenuMobile(){
    const menuMobile = document.getElementById('container-menu');
    const tela = document.getElementById('container');
    const linksMenu = menuMobile.querySelectorAll('ul li a');

    menuMobile.style.display = 'flex';
    tela.style.overflow = 'hidden';
    linksMenu.forEach(link => {
        if (link.textContent.length >= 13) {
            link.style.lineHeight = '1.0em';
        }
    });
}

function escondeMenuMobile(){
    const menuMobile = document.getElementById('container-menu');
    const tela = document.getElementById('container');
    if (window.innerWidth <= 1024) {
        tela.style.overflow = 'auto';
        menuMobile.style.display = 'none';
    }
}

function verificaLargura(){
    const menuMobile = document.getElementById('container-menu');
    const textMenuMobile = menuMobile.querySelectorAll('ul li a');

    if (window.innerWidth <= 1024){
        menuMobile.style.display = 'none';
        textMenuMobile.forEach(textMenuMobile => {
            if (window.innerWidth <= 389) {
                textMenuMobile.style.fontSize = '2.0em';
            }
        });
    } else if(window.innerWidth > 1024){
        menuMobile.style.display = 'flex';
    } 
}


const banner = document.getElementById("banner");

const observarBanner = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            banner.style.opacity = 1;
            banner.style.transform = "translateY(0)";
        } else {
            banner.style.opacity = 0;
            banner.style.transform = "translateY(50px)";
        }
    });
});

if (banner) {
    observarBanner.observe(banner);
}


const empresa = document.getElementById("empresa");

const observarEmpresa = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            empresa.style.opacity = 1;
            empresa.style.transform = "translateY(0)";
        } else {
            empresa.style.opacity = 0;
            empresa.style.transform = "translateY(50px)";
        }
    });
});

if (empresa) {
    observarEmpresa.observe(empresa);
}



const clientes = document.getElementById("clientes");

const observarClientes = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            clientes.style.opacity = 1;
            clientes.style.transform = "translateY(0)"; 
        } else {
            clientes.style.opacity = 0;
            clientes.style.transform = "translateY(50px)";
        }
    });
});

if (clientes) {
    observarClientes.observe(clientes);
}



const boxdeVendas = document.getElementById("box-de-vendas");

const observarBoxdeVendas = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            boxdeVendas.style.opacity = 1;
            boxdeVendas.style.transform = "translateY(0)"; 
        } else {
            boxdeVendas.style.opacity = 0;
            boxdeVendas.style.transform = "translateY(50px)";
        }
    });
});

if (boxdeVendas) {
    observarBoxdeVendas.observe(boxdeVendas);
}



const contatos = document.getElementById("contatos");

const observarContatos = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            contatos.style.opacity = 1;
            contatos.style.transform = "translateY(0)"; 
        } else {
            contatos.style.opacity = 0;
            contatos.style.transform = "translateY(50px)";
        }
    });
});

if (contatos) {
    observarContatos.observe(contatos);
}



/*js banner carrossel*/


const carrossel = document.querySelector('.container-carrossel');
const botaoAnterior = document.querySelector('.slide-prev');
const botaoProximo = document.querySelector('.slide-next');
const slides = document.querySelectorAll('.conteudo-carrossel');
let indiceAtual = 0;
let larguraSlide = slides[0]?.offsetWidth || 0; // Adicionado um fallback para o caso de slides ser vazio

function irParaSlide(indice) {
    
    carrossel.style.transform = `translateX(-${indice * larguraSlide}px)`;
    indiceAtual = indice;

}

function proximoSlide() {

    console.log(carrossel.style.overflowY);

    console.log(indiceAtual, slides.length - 1);
    if(indiceAtual < slides.length){
        irParaSlide(indiceAtual+1);
        atualizarBotoes();
        console.log(indiceAtual, slides.length -1);
    }
}

function slideAnterior() {

    console.log(indiceAtual, slides.length - 1);
    if(indiceAtual < slides.length){
        irParaSlide(indiceAtual-1);
        atualizarBotoes();
        console.log(indiceAtual, slides.length -1);
    }
}

function atualizarBotoes() {
    if (botaoAnterior) {
        botaoAnterior.disabled = indiceAtual === 0;
    }

    if(botaoProximo){
        botaoProximo.disabled = indiceAtual === slides.length - 1;
    }
}

window.addEventListener('load', () => {
    // Recalcula a largura do slide após a página carregar para garantir precisão
    if (slides.length > 0) {
        larguraSlide = slides[0].offsetWidth;
        irParaSlide(indiceAtual); // Garante que o primeiro slide esteja na posição correta
        atualizarBotoes(); // Garante que os botões estejam no estado inicial correto
    }
});

// Chama a função inicialmente para definir o estado dos botões
if (slides.length > 0) {
    atualizarBotoes();
}


function carrosselMobile(){
    

    console.log(carrossel.style.overflowY);
}


carrossel.addEventListener('touchmove', carrosselMobile);