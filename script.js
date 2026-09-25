/* =====================================================
   RC PRODUTOS DE LIMPEZA
   SISTEMA DE PRODUTOS + CARROSSEL + CARRINHO
===================================================== */


/* =====================================================
   CONFIGURAÇÃO
===================================================== */

const WHATSAPP = "5511983184154";

const STORAGE_CARRINHO =
    "rc_produtos_carrinho";


/* =====================================================
   PRODUTOS
===================================================== */

const produtos = [

    /* =========================
       LIMPEZA
    ========================== */

    {
        id: 1,
        nome: "Sabão de Querozene 1L",
        preco: 18.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/querozene.webp",
        descricao: "Produto para limpeza pesada e desengordurante."
    },

       {
        id: 2,
        nome: "Tira Manchas 500ml",
        preco: 18.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/tira-manchas.webp",
        descricao: "Produto para limpeza pesada e desinfecção."
    },

    {
        id: 3,
        nome: "pereirâo 2L",
        preco: 23.20,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/pereirao.webp",
        descricao: "Produto para limpeza pesada e desengordurante."
    },

    {
        id: 4,
        nome: "Limpador Perfumado Roxo 2L",
        preco: 17.60,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/limpador-roxo.webp",
        descricao: "Produto para limpeza geral, perfumado."
    },

    {
        id: 5,
        nome: "Ricardão Multiuso 2L",
        preco: 13.60,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/ricardão.webp",
        descricao: "Produto para limpeza geral."
    },

    {
        id: 6,
        nome: "Cloro Desinfetante em Gel 2L",
        preco: 16.00,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/cloro.webp",
        descricao: "Produto para limpeza pesada e desinfecção."
    },

    {
        id: 7,
        nome: "Luastra moveis 500ml",
        preco: 18.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/moveis.webp",
        descricao: "Luastra e perfuma móveis."
    },

    {
        id: 8,
        nome: "Pinho Neutro 2L",
        preco:14.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/pinho.webp",
        descricao: "Produto para limpeza geral, perfumado."
    },

    {
        id: 9,
        nome: "Limpa vidros 1L",
        preco:14.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "/limpeza/vidro.webp",
        descricao: "Limpa vidros e superfícies lisas, perfumado."
    },
    
    /* =========================
       LAVANDERIA
    ========================== */

      {
        id: 10,
        nome: "Sabão líquido cereja 2L",
        preco:14.40,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "/lavanderia/sabao-cereja2l.webp",
        descricao: "Produto para limpeza geral, perfumado."
    },

    {
        id: 11,
        nome: "Sabão líquido azul 2L",
        preco:14.40,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "/lavanderia/sabao-azul.webp",
        descricao: "Produto para limpeza geral, perfumado."
    },

        {
        id: 12,
        nome: "",
        preco: 16.00,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "/lavanderia/cloro.webp",
        descricao: "Produto para limpeza pesada e desinfecção."
    },


    {
        id: 13,
        nome: "",
        preco: 13.60,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "/lavanderia/amaciante.jpg",
        descricao: "Deixa as roupas macias e perfumadas."
    },


    /* =========================
       ACESSÓRIOS
    ========================== */

    {
        id: 14,
        nome: "Borrifador",
        preco: 4.60,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "/acessorios/borrifador.webp",
        descricao: "Borrifador para produtos de limpeza."
    },

    {
        id: 15,
        nome: "Vassoura",
        preco: 9.60,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "/acessorios/vassoura.webp",
        descricao: "Ideal para limpeza da casa."
    },

    {
        id: 16,
        nome: "Rodo",
        preco: 13.60,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "/acessorios/rodo.webp",
        descricao: "Rodo para pisos e superfícies."
    },

    {
        id: 17,
        nome: "Lixeira",
        preco: 10.40,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "/acessorios/lixeira.webp",
        descricao: "Lixeira para organização."
    },

    {
        id: 18,
        nome: "",
        preco: 7.40,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "/acessorios/limpa-aluminio.webp",
        descricao: "Para limpeza de alumínio."
    },

    {
        id: 19,
        nome: "Sabão em Pedra",
        preco: 4.20,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "/acessorios/sabao-pedra.webp",
        descricao: "Sabão para limpeza geral."
    },


    /* =========================
       PERFUMAÇÃO
    ========================== */

    {
        id: 20,
        nome: "Cheirinho Azul",
        preco: 14.40,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "/perfumacao/cheirinho-azul.webp",
        descricao: "Perfume para ambientes."
    },

    {
        id: 21,
        nome: "Cheirinho Cereja",
        preco: 18.40,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "/perfumacao/cheirinho-cereja500.webp",
        descricao: "Perfume para tecidos e ambientes."
    },

    {
        id: 23,
        nome: "Cheirinho de coco",
        preco: 18.40,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "/perfumacao/cheirinho-coco.webp",
        descricao: "Limpeza e cuidado para móveis."
    }

];


/* =====================================================
   CARRINHO
===================================================== */

let carrinho = carregarCarrinho();


/* =====================================================
   ELEMENTOS
===================================================== */

const abrirCarrinho =
    document.getElementById("abrirCarrinho");

const fecharCarrinho =
    document.getElementById("fecharCarrinho");

const carrinhoOverlay =
    document.getElementById("carrinhoOverlay");

const listaCarrinho =
    document.getElementById("listaCarrinho");

const contadorCarrinho =
    document.getElementById("contadorCarrinho");

const totalCarrinho =
    document.getElementById("totalCarrinho");

const limparCarrinho =
    document.getElementById("limparCarrinho");

const enviarWhatsApp =
    document.getElementById("enviarWhatsApp");

const nomeCliente =
    document.getElementById("nomeCliente");

const enderecoCliente =
    document.getElementById("enderecoCliente");

const pesquisaProdutos =
    document.getElementById("pesquisaProdutos");

const resultadoPesquisa =
    document.getElementById("resultadoPesquisa");

const menuMobile =
    document.getElementById("menuMobile");

const menu =
    document.getElementById("menu");

const toast =
    document.getElementById("toast");


/* =====================================================
   LOCAL STORAGE
===================================================== */

function carregarCarrinho() {

    try {

        const dados =
            localStorage.getItem(
                STORAGE_CARRINHO
            );

        if (!dados) {
            return [];
        }

        const carrinhoSalvo =
            JSON.parse(dados);

        if (!Array.isArray(carrinhoSalvo)) {
            return [];
        }

        return carrinhoSalvo;

    } catch (erro) {

        console.error(
            "Erro ao carregar carrinho:",
            erro
        );

        return [];
    }
}


function salvarCarrinho() {

    localStorage.setItem(
        STORAGE_CARRINHO,
        JSON.stringify(carrinho)
    );

}


/* =====================================================
   PREÇO
===================================================== */

function dinheiro(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =====================================================
   PRODUTO PELO ID
===================================================== */

function encontrarProduto(id) {

    return produtos.find(
        produto =>
            produto.id === Number(id)
    );

}


/* =====================================================
   QUANTIDADE TOTAL
===================================================== */

function quantidadeTotal() {

    return carrinho.reduce(
        (total, item) =>
            total + item.quantidade,
        0
    );

}


/* =====================================================
   VALOR TOTAL
===================================================== */

function valorTotal() {

    return carrinho.reduce(
        (total, item) => {

            const produto =
                encontrarProduto(item.id);

            if (!produto) {
                return total;
            }

            return total +
                produto.preco *
                item.quantidade;

        },
        0
    );

}


/* =====================================================
   IMAGEM
===================================================== */

function imagemProduto(produto) {

    return `
        <img
            src="${produto.imagem}"
            alt="${produto.nome}"
            loading="lazy"
            style="
                width:100%;
                height:100%;
                object-fit:contain;
                display:block;
            "
            onerror="this.style.display='none';"
        >
    `;

}


/* =====================================================
   CRIAR CARD
===================================================== */

function criarCard(produto) {

    const item =
        carrinho.find(
            item =>
                item.id === produto.id
        );

    const quantidade =
        item
            ? item.quantidade
            : 0;

    const disponivel =
        produto.estoque -
        quantidade;

    const limite =
        disponivel <= 0;


    return `

        <article class="produto-card">

            <div class="produto-imagem">

                ${imagemProduto(produto)}

            </div>


            <div class="produto-info">

                <span class="produto-categoria">
                    ${produto.categoriaNome}
                </span>

                <h4>
                    ${produto.nome}
                </h4>

                <p class="produto-descricao">
                    ${produto.descricao}
                </p>

                <div class="produto-preco">
                    ${dinheiro(produto.preco)}
                </div>

                <div class="produto-estoque">

                    ${
                        limite
                            ? "Limite de estoque atingido"
                            : `${disponivel} disponíveis`
                    }

                </div>


                <button
                    type="button"
                    class="btn-adicionar"
                    data-id="${produto.id}"
                    ${limite ? "disabled" : ""}
                >

                    ${
                        limite
                            ? "Estoque atingido"
                            : "🛒 Adicionar ao carrinho"
                    }

                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   RENDERIZAR CARROSSÉIS
===================================================== */

function renderizarCarrosseis() {

    const categorias = [
        "limpeza",
        "lavanderia",
        "acessorios",
        "perfumacao"
    ];


    categorias.forEach(
        categoria => {

            const carrossel =
                document.getElementById(
                    `carousel-${categoria}`
                );

            if (!carrossel) {
                return;
            }


            const lista =
                produtos.filter(
                    produto =>
                        produto.categoria ===
                        categoria
                );


            carrossel.innerHTML =
                lista
                    .map(criarCard)
                    .join("");


            /*
               Liga o botão de cada produto
               ao carrinho.
            */

            carrossel
                .querySelectorAll(
                    ".btn-adicionar"
                )
                .forEach(
                    botao => {

                        botao.addEventListener(
                            "click",
                            () => {

                                adicionarAoCarrinho(
                                    Number(
                                        botao.dataset.id
                                    )
                                );

                            }
                        );

                    }
                );

        }
    );

}


/* =====================================================
   ADICIONAR AO CARRINHO
===================================================== */

function adicionarAoCarrinho(id) {

    const produto =
        encontrarProduto(id);

    if (!produto) {
        return;
    }


    const item =
        carrinho.find(
            item =>
                item.id === id
        );


    if (item) {

        if (
            item.quantidade >=
            produto.estoque
        ) {

            mostrarToast(
                "Você atingiu o estoque disponível."
            );

            return;
        }

        item.quantidade++;

    } else {

        carrinho.push({
            id: id,
            quantidade: 1
        });

    }


    salvarCarrinho();

    atualizarTudo();

    mostrarToast(
        `${produto.nome} adicionado ao carrinho!`
    );

}


/* =====================================================
   AUMENTAR
===================================================== */

function aumentarQuantidade(id) {

    const produto =
        encontrarProduto(id);

    const item =
        carrinho.find(
            item =>
                item.id === Number(id)
        );

    if (!produto || !item) {
        return;
    }


    if (
        item.quantidade >=
        produto.estoque
    ) {

        mostrarToast(
            "Você atingiu o estoque disponível."
        );

        return;
    }


    item.quantidade++;

    salvarCarrinho();

    atualizarTudo();

}


/* =====================================================
   DIMINUIR
===================================================== */

function diminuirQuantidade(id) {

    const item =
        carrinho.find(
            item =>
                item.id === Number(id)
        );

    if (!item) {
        return;
    }


    if (item.quantidade > 1) {

        item.quantidade--;

    } else {

        carrinho =
            carrinho.filter(
                item =>
                    item.id !== Number(id)
            );

    }


    salvarCarrinho();

    atualizarTudo();

}


/* =====================================================
   REMOVER
===================================================== */

function removerProduto(id) {

    carrinho =
        carrinho.filter(
            item =>
                item.id !== Number(id)
        );


    salvarCarrinho();

    atualizarTudo();

    mostrarToast(
        "Produto removido do carrinho."
    );

}


/* =====================================================
   RENDERIZAR CARRINHO
===================================================== */

function renderizarCarrinho() {

    contadorCarrinho.textContent =
        quantidadeTotal();


    totalCarrinho.textContent =
        dinheiro(
            valorTotal()
        );


    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `

            <div class="carrinho-vazio">

                <div style="font-size:50px;">
                    🛒
                </div>

                <strong>
                    Seu carrinho está vazio.
                </strong>

                <span>
                    Escolha alguns produtos para começar.
                </span>

            </div>

        `;

        return;
    }


    listaCarrinho.innerHTML =
        carrinho
            .map(criarItemCarrinho)
            .join("");


    ligarEventosCarrinho();

}


/* =====================================================
   ITEM DO CARRINHO
===================================================== */

function criarItemCarrinho(item) {

    const produto =
        encontrarProduto(item.id);

    if (!produto) {
        return "";
    }


    const subtotal =
        produto.preco *
        item.quantidade;


    return `

        <div class="carrinho-item">

            <div class="carrinho-imagem">

                ${imagemProduto(produto)}

            </div>


            <div class="carrinho-item-info">

                <h4>
                    ${produto.nome}
                </h4>

                <div class="carrinho-item-preco">
                    ${dinheiro(subtotal)}
                </div>


                <div class="quantidade">

                    <button
                        type="button"
                        class="btn-diminuir"
                        data-id="${produto.id}"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantidade}
                    </span>


                    <button
                        type="button"
                        class="btn-aumentar"
                        data-id="${produto.id}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                type="button"
                class="remover"
                data-id="${produto.id}"
                title="Remover produto"
            >
                🗑️
            </button>

        </div>

    `;

}


/*=====================================================
   EVENTOS DO CARRINHO
===================================================== */

function ligarEventosCarrinho() {

    document
        .querySelectorAll(".btn-diminuir")
        .forEach(
            botao => {

                botao.addEventListener(
                    "click",
                    () => {

                        diminuirQuantidade(
                            Number(
                                botao.dataset.id
                            )
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(".btn-aumentar")
        .forEach(
            botao => {

                botao.addEventListener(
                    "click",
                    () => {

                        aumentarQuantidade(
                            Number(
                                botao.dataset.id
                            )
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(".remover")
        .forEach(
            botao => {

                botao.addEventListener(
                    "click",
                    () => {

                        removerProduto(
                            Number(
                                botao.dataset.id
                            )
                        );

                    }
                );

            }
        );

}


/* =====================================================
   ATUALIZAR TUDO
===================================================== */

function atualizarTudo() {

    renderizarCarrinho();

    renderizarCarrosseis();

}


/* =====================================================
   MOVER CARROSSEL
===================================================== */

function moverCarrossel(
    id,
    direcao
) {

    const carrossel =
        document.getElementById(id);

    if (!carrossel) {
        return;
    }


    const card =
        carrossel.querySelector(
            ".produto-card"
        );


    const distancia =
        card
            ? card.offsetWidth + 18
            : 278;


    carrossel.scrollBy({

        left:
            distancia *
            Number(direcao) *
            2,

        behavior: "smooth"

    });

}


/* =====================================================
   SETAS
===================================================== */

document
    .querySelectorAll(".seta")
    .forEach(
        seta => {

            seta.addEventListener(
                "click",
                () => {

                    moverCarrossel(
                        seta.dataset.carousel,
                        seta.dataset.direction
                    );

                }
            );

        }
    );


/* =====================================================
   PESQUISA
===================================================== */

function pesquisar() {

    const termo =
        pesquisaProdutos.value
            .trim()
            .toLowerCase();


    const categorias =
        document.querySelectorAll(
            ".categoria"
        );


    if (termo === "") {

        resultadoPesquisa.classList.remove(
            "ativo"
        );

        resultadoPesquisa.innerHTML =
            "";


        categorias.forEach(
            categoria => {

                categoria.style.display =
                    "";

            }
        );

        return;
    }


    categorias.forEach(
        categoria => {

            categoria.style.display =
                "none";

        }
    );


    const resultados =
        produtos.filter(
            produto => {

                const texto = `
                    ${produto.nome}
                    ${produto.descricao}
                    ${produto.categoriaNome}
                `.toLowerCase();


                return texto.includes(
                    termo
                );

            }
        );


    resultadoPesquisa.classList.add(
        "ativo"
    );


    if (resultados.length === 0) {

        resultadoPesquisa.innerHTML = `

            <div class="sem-resultado">

                <div style="font-size:45px;">
                    😕
                </div>

                <strong>
                    Produto não encontrado
                </strong>

                <p>
                    Tente pesquisar por outro nome.
                </p>

            </div>

        `;

        return;
    }


    resultadoPesquisa.innerHTML = `

        <h3 class="resultado-titulo">
            🔎 ${resultados.length}
            produto(s) encontrado(s)
        </h3>

        <div class="resultado-grid">

            ${resultados
                .map(criarCard)
                .join("")}

        </div>

    `;


    resultadoPesquisa
        .querySelectorAll(
            ".btn-adicionar"
        )
        .forEach(
            botao => {

                botao.addEventListener(
                    "click",
                    () => {

                        adicionarAoCarrinho(
                            Number(
                                botao.dataset.id
                            )
                        );

                    }
                );

            }
        );

}


/* =====================================================
   ABRIR CARRINHO
===================================================== */

function abrirModalCarrinho() {

    carrinhoOverlay.classList.add(
        "aberto"
    );

    document.body.classList.add(
        "bloqueado"
    );

}


/* =====================================================
   FECHAR CARRINHO
===================================================== */

function fecharModalCarrinho() {

    carrinhoOverlay.classList.remove(
        "aberto"
    );

    document.body.classList.remove(
        "bloqueado"
    );

}


/* =====================================================
   LIMPAR
===================================================== */

function limparTudo() {

    if (carrinho.length === 0) {

        mostrarToast(
            "O carrinho já está vazio."
        );

        return;
    }


    carrinho = [];

    salvarCarrinho();

    atualizarTudo();

    mostrarToast(
        "Carrinho limpo."
    );

}


/* =====================================================
   WHATSAPP
===================================================== */

function enviarPedido() {

    if (carrinho.length === 0) {

        mostrarToast(
            "Adicione produtos ao carrinho."
        );

        return;
    }


    const nome =
        document
            .getElementById("nomeCliente")
            .value
            .trim();


    const endereco =
        document
            .getElementById("enderecoCliente")
            .value
            .trim();


    if (!nome) {

        mostrarToast(
            "Digite seu nome."
        );

        document
            .getElementById("nomeCliente")
            .focus();

        return;
    }


    let mensagem =
        "🧽 *NOVO PEDIDO - RC PRODUTOS DE LIMPEZA*";


    mensagem +=
        `\n\n👤 *Cliente:* ${nome}`;


    if (endereco) {

        mensagem +=
            `\n📍 *Endereço:* ${endereco}`;

    }


    mensagem +=
        "\n\n🛒 *PRODUTOS:*";


    carrinho.forEach(
        item => {

            const produto =
                encontrarProduto(item.id);

            if (!produto) {
                return;
            }


            const subtotal =
                produto.preco *
                item.quantidade;


            mensagem +=
                `\n• ${produto.nome}` +
                ` x${item.quantidade}` +
                ` — ${dinheiro(subtotal)}`;

        }
    );


    mensagem +=
        `\n\n💰 *TOTAL:* ${dinheiro(
            valorTotal()
        )}`;


    mensagem +=
        "\n\nAguardo a confirmação do pedido. 😊";


    const url =
        `https://wa.me/${WHATSAPP}?text=` +
        encodeURIComponent(mensagem);


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimeout;


function mostrarToast(texto) {

    clearTimeout(toastTimeout);


    toast.textContent =
        texto;


    toast.classList.add(
        "mostrar"
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "mostrar"
                );

            },
            2500
        );

}


/* =====================================================
   MENU MOBILE
===================================================== */

menuMobile.addEventListener(
    "click",
    () => {

        menu.classList.toggle(
            "aberto"
        );

    }
);


document
    .querySelectorAll(".menu a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "aberto"
                    );

                }
            );

        }
    );


/* =====================================================
   EVENTOS
===================================================== */

abrirCarrinho.addEventListener(
    "click",
    abrirModalCarrinho
);


fecharCarrinho.addEventListener(
    "click",
    fecharModalCarrinho
);


carrinhoOverlay.addEventListener(
    "click",
    evento => {

        if (
            evento.target ===
            carrinhoOverlay
        ) {

            fecharModalCarrinho();

        }

    }
);


limparCarrinho.addEventListener(
    "click",
    limparTudo
);


enviarWhatsApp.addEventListener(
    "click",
    enviarPedido
);


pesquisaProdutos.addEventListener(
    "input",
    pesquisar
);


/* ESC */

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape"
        ) {

            fecharModalCarrinho();

            menu.classList.remove(
                "aberto"
            );

        }

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

renderizarCarrosseis();

renderizarCarrinho();
