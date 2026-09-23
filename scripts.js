/* =========================================
   PRODUTOS DA LOJA
========================================= */

const produtos = [

    // ==============================
    // PRODUTOS DE LIMPEZA
    // ==============================

    {
        id: 1,
        nome: "Água sanitária 5L",
        preco: 9.60,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/agua-sanitara-5l.jpg",
        descricao: "Água sanitária para limpeza geral."
    },

    {
        id: 2,
        nome: "Cloro",
        preco: 16.00,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/cloro.jpg",
        descricao: "Cloro para limpeza."
    },

    {
        id: 3,
        nome: "Cloro 5L",
        preco: 32.00,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/cloro-5l.jpg",
        descricao: "Cloro em embalagem de 5 litros."
    },

    {
        id: 4,
        nome: "Limpador perfumado",
        preco: 17.60,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/limpador-perfumado.jpg",
        descricao: "Limpador perfumado para diversos ambientes."
    },

    {
        id: 5,
        nome: "Pinho",
        preco: 14.40,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/pinho.jpg",
        descricao: "Produto para limpeza e desinfecção."
    },

    {
        id: 6,
        nome: "Pereirão",
        preco: 23.20,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/pereirao.jpg",
        descricao: "Produto para limpeza geral."
    },

    {
        id: 7,
        nome: "Sabão querosene",
        preco: 18.40,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/sabao-querosene.jpg",
        descricao: "Sabão para limpeza pesada."
    },

    {
        id: 8,
        nome: "Detergente neutro",
        preco: 12.00,
        estoque: 20,
        categoria: "limpeza",
        imagem: "img/detergente-neutro.jpg",
        descricao: "Detergente neutro."
    },


    // ==============================
    // LAVANDERIA
    // ==============================

    {
        id: 9,
        nome: "Sabão líquido azul 5L",
        preco: 25.50,
        estoque: 20,
        categoria: "lavanderia",
        imagem: "img/sabao-liquido-azul.jpg",
        descricao: "Sabão líquido para roupas."
    },

    {
        id: 10,
        nome: "Sabão líquido branco",
        preco: 14.40,
        estoque: 20,
        categoria: "lavanderia",
        imagem: "img/sabao-liquido-branco.jpg",
        descricao: "Sabão líquido para lavagem de roupas."
    },

    {
        id: 11,
        nome: "Tira manchas",
        preco: 16.40,
        estoque: 20,
        categoria: "lavanderia",
        imagem: "img/tira-manchas.jpg",
        descricao: "Remove manchas de tecidos."
    },

    {
        id: 12,
        nome: "Amaciante",
        preco: 13.60,
        estoque: 20,
        categoria: "lavanderia",
        imagem: "img/amaciante.jpg",
        descricao: "Amaciante para roupas."
    },


    // ==============================
    // ACESSÓRIOS
    // ==============================

    {
        id: 13,
        nome: "Borrifador",
        preco: 4.60,
        estoque: 20,
        categoria: "acessorios",
        imagem: "img/borrifador.jpg",
        descricao: "Borrifador para produtos de limpeza."
    },

    {
        id: 14,
        nome: "Vassoura",
        preco: 9.60,
        estoque: 20,
        categoria: "acessorios",
        imagem: "img/vassoura.jpg",
        descricao: "Vassoura para limpeza."
    },

    {
        id: 15,
        nome: "Rodo",
        preco: 13.60,
        estoque: 20,
        categoria: "acessorios",
        imagem: "img/rodo.jpg",
        descricao: "Rodo para pisos."
    },

    {
        id: 16,
        nome: "Lixeira",
        preco: 10.40,
        estoque: 20,
        categoria: "acessorios",
        imagem: "img/lixeira.jpg",
        descricao: "Lixeira para ambientes domésticos."
    },

    {
        id: 17,
        nome: "Limpa alumínio",
        preco: 7.40,
        estoque: 20,
        categoria: "acessorios",
        imagem: "img/limpa-aluminio.jpg",
        descricao: "Produto para limpeza de alumínio."
    },

    {
        id: 18,
        nome: "Sabão em pedra",
        preco: 4.20,
        estoque: 20,
        categoria: "acessorios",
        imagem: "img/sabao-pedra.jpg",
        descricao: "Sabão em pedra."
    },


    // ==============================
    // PERFUMAÇÃO
    // ==============================

    {
        id: 19,
        nome: "Cheirinho",
        preco: 14.40,
        estoque: 20,
        categoria: "perfumacao",
        imagem: "img/cheirinho.jpg",
        descricao: "Aromatizador para ambientes."
    },

    {
        id: 20,
        nome: "Cheirinho para cama e cozinha",
        preco: 14.40,
        estoque: 20,
        categoria: "perfumacao",
        imagem: "img/cheirinho-cama-cozinha.jpg",
        descricao: "Perfume para cama e cozinha."
    },

    {
        id: 21,
        nome: "Produto para dar cheiro",
        preco: 4.25,
        estoque: 20,
        categoria: "perfumacao",
        imagem: "img/produto-cheiro.jpg",
        descricao: "Produto para perfumar ambientes."
    },

    {
        id: 22,
        nome: "Limpa móveis",
        preco: 10.40,
        estoque: 20,
        categoria: "perfumacao",
        imagem: "img/limpa-moveis.jpg",
        descricao: "Limpa e perfuma móveis."
    }

];

/* =========================================
   CRIAR CARD DO PRODUTO
========================================= */

function criarCardProduto(produto) {

    const card = document.createElement("div");

    card.className = "produto-card";

    card.innerHTML = `

        <div class="produto-imagem">

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
                onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'sem-foto\\'><span>📷</span>Adicione a foto do produto</div>';"
            >

        </div>


        <div class="produto-info">

            <h4>
                ${produto.nome}
            </h4>


            <div class="produto-descricao">
                ${produto.descricao}
            </div>


            <div class="produto-preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </div>


            <div class="produto-estoque">
                Estoque disponível: ${produto.estoque}
            </div>


            <button
                class="btn-adicionar-produto"
                onclick="adicionarProdutoCarrinho(${produto.id})"
            >
                🛒 Adicionar ao carrinho
            </button>

        </div>

    `;

    return card;
}

/* =========================================
   MOSTRAR PRODUTOS NAS CATEGORIAS
========================================= */

function carregarProdutos() {

    const categorias = {

        limpeza: document.getElementById("carousel-limpeza"),

        lavanderia: document.getElementById("carousel-lavanderia"),

        acessorios: document.getElementById("carousel-acessorios"),

        perfumacao: document.getElementById("carousel-perfumacao")

    };


    // Limpa os carrosséis

    Object.values(categorias).forEach(carousel => {

        if (carousel) {
            carousel.innerHTML = "";
        }

    });


    // Coloca cada produto na categoria correta

    produtos.forEach(produto => {

        const carousel = categorias[produto.categoria];

        if (carousel) {

            carousel.appendChild(
                criarCardProduto(produto)
            );

        }

    });

}
/* =========================================
   MOVER CARROSSEL
========================================= */

function moverCarrossel(id, direcao) {

    const carousel = document.getElementById(id);

    if (!carousel) return;


    const distancia = 320;


    carousel.scrollBy({

        left: distancia * direcao,

        behavior: "smooth"

    });

}

/* =========================================
   PESQUISA
========================================= */

const campoPesquisa =
    document.getElementById("pesquisaProdutos");

const resultadoPesquisa =
    document.getElementById("resultadoPesquisa");


campoPesquisa.addEventListener("input", function () {

    const pesquisa =
        this.value
            .toLowerCase()
            .trim();


    // Se não estiver pesquisando
    // volta para as categorias

    if (pesquisa === "") {

        document.body.classList.remove("pesquisando");

        resultadoPesquisa.innerHTML = "";

        resultadoPesquisa.classList.remove("ativo");

        return;

    }


    document.body.classList.add("pesquisando");

    resultadoPesquisa.innerHTML = "";

    resultadoPesquisa.classList.add("ativo");


    // Procura pelo nome,
    // descrição ou categoria

    const encontrados = produtos.filter(produto => {

        return (

            produto.nome
                .toLowerCase()
                .includes(pesquisa)

            ||

            produto.descricao
                .toLowerCase()
                .includes(pesquisa)

            ||

            produto.categoria
                .toLowerCase()
                .includes(pesquisa)

        );

    });


    // Nenhum resultado

    if (encontrados.length === 0) {

        resultadoPesquisa.innerHTML = `

            <div class="sem-resultados">

                🔎

                <h3>
                    Produto não encontrado
                </h3>

                <p>
                    Tente pesquisar por outro nome.
                </p>

            </div>

        `;

        return;

    }


    // Mostra resultados

    encontrados.forEach(produto => {

        resultadoPesquisa.appendChild(
            criarCardProduto(produto)
        );

    });

});

/* =========================================
   ADICIONAR PRODUTO AO CARRINHO
========================================= */

function adicionarProdutoCarrinho(id) {

    const produto =
        produtos.find(
            item => item.id === id
        );


    if (!produto) {
        return;
    }


    /*
       Usa a função do seu sistema
       de carrinho.
    */

    adicionarAoCarrinho(produto);

}
/* =========================================
   INICIAR LOJA
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    carregarProdutos();

});
