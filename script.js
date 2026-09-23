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
        nome: "Água Sanitária 5L",
        preco: 9.60,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/agua-sanitaria.jpg",
        descricao: "Ideal para limpeza e higienização."
    },

    {
        id: 2,
        nome: "Cloro",
        preco: 16.00,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/cloro.jpg",
        descricao: "Produto para limpeza pesada."
    },

    {
        id: 3,
        nome: "Cloro 5L",
        preco: 32.00,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/cloro-5l.jpg",
        descricao: "Cloro em embalagem de 5 litros."
    },

    {
        id: 4,
        nome: "Limpador Perfumado",
        preco: 17.60,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/limpador-perfumado.jpg",
        descricao: "Limpeza com perfume agradável."
    },

    {
        id: 5,
        nome: "Pinho",
        preco: 14.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/pinho.jpg",
        descricao: "Produto para limpeza geral."
    },

    {
        id: 6,
        nome: "Pereirão",
        preco: 23.20,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/pereirao.jpg",
        descricao: "Limpador para diversas superfícies."
    },

    {
        id: 7,
        nome: "Sabão Querosene",
        preco: 18.40,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/sabao-querosene.jpg",
        descricao: "Produto para limpeza pesada."
    },

    {
        id: 8,
        nome: "Detergente Neutro",
        preco: 12.00,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/detergente-neutro.jpg",
        descricao: "Detergente para uso diário."
    },


    /* =========================
       LAVANDERIA
    ========================== */

    {
        id: 9,
        nome: "Sabão Líquido Azul 5L",
        preco: 25.50,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "img/sabao-liquido-azul.jpg",
        descricao: "Sabão líquido para roupas."
    },

    {
        id: 10,
        nome: "Sabão Líquido Branco",
        preco: 14.40,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "img/sabao-liquido-branco.jpg",
        descricao: "Para lavagem de roupas."
    },

    {
        id: 11,
        nome: "Tira Manchas",
        preco: 16.40,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "img/tira-manchas.jpg",
        descricao: "Auxilia na remoção de manchas."
    },

    {
        id: 12,
        nome: "Amaciante",
        preco: 13.60,
        estoque: 20,
        categoria: "lavanderia",
        categoriaNome: "Lavanderia",
        imagem: "img/amaciante.jpg",
        descricao: "Deixa as roupas macias e perfumadas."
    },


    /* =========================
       ACESSÓRIOS
    ========================== */

    {
        id: 13,
        nome: "Borrifador",
        preco: 4.60,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "img/borrifador.jpg",
        descricao: "Borrifador para produtos de limpeza."
    },

    {
        id: 14,
        nome: "Vassoura",
        preco: 9.60,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "img/vassoura.jpg",
        descricao: "Ideal para limpeza da casa."
    },

    {
        id: 15,
        nome: "Rodo",
        preco: 13.60,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "img/rodo.jpg",
        descricao: "Rodo para pisos e superfícies."
    },

    {
        id: 16,
        nome: "Lixeira",
        preco: 10.40,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "img/lixeira.jpg",
        descricao: "Lixeira para organização."
    },

    {
        id: 17,
        nome: "Limpa Alumínio",
        preco: 7.40,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "img/limpa-aluminio.jpg",
        descricao: "Para limpeza de alumínio."
    },

    {
        id: 18,
        nome: "Sabão em Pedra",
        preco: 4.20,
        estoque: 20,
        categoria: "acessorios",
        categoriaNome: "Acessórios",
        imagem: "img/sabao-pedra.jpg",
        descricao: "Sabão para limpeza geral."
    },


    /* =========================
       PERFUMAÇÃO
    ========================== */

    {
        id: 19,
        nome: "Cheirinho",
        preco: 14.40,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "img/cheirinho.jpg",
        descricao: "Perfume para ambientes."
    },

    {
        id: 20,
        nome: "Cheirinho para Cama e Cozinha",
        preco: 14.40,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "img/cheirinho-cama-cozinha.jpg",
        descricao: "Perfume para tecidos e ambientes."
    },

    {
        id: 21,
        nome: "Produto para Dar Cheiro",
        preco: 4.25,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "img/produto-cheiro.jpg",
        descricao: "Produto para perfumar ambientes."
    },

    {
        id: 22,
        nome: "Limpa Móveis",
        preco: 10.40,
        estoque: 20,
        categoria: "perfumacao",
        categoriaNome: "Perfumação",
        imagem: "img/limpa-moveis.jpg",
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
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >

        <div
            class="imagem-placeholder"
            style="display:none;"
        >
            🧴
        </div>
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
                   
