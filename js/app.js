function abreMenuMobile(){
    const menuMobile = document.getElementById('container-menu');

    menuMobile.style.display = 'flex';
}

function escondeMenuMobile(){
    const menuMobile = document.getElementById('container-menu');
    
    if (window.innerWidth <= 1024){
        menuMobile.style.display = 'none';
    }  
}

function verificaLargura(){
    const menuMobile = document.getElementById('container-menu');

    if (window.innerWidth <= 1024){
        menuMobile.style.display = 'none';
    } else if(window.innerWidth > 1024){
        menuMobile.style.display = 'flex';
    } 
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