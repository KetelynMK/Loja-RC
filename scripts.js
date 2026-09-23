/* =====================================================
   RC PRODUTOS DE LIMPEZA
   SISTEMA COMPLETO
===================================================== */


/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const NUMERO_WHATSAPP = "5511983184154";

const CHAVE_CARRINHO = "rc_produtos_carrinho";


/* =====================================================
   PRODUTOS
===================================================== */

const produtos = [

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
        descricao: "Para limpeza pesada."
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
        descricao: "Produto para limpeza e desengorduramento."
    },

    {
        id: 8,
        nome: "Detergente Neutro",
        preco: 12.00,
        estoque: 20,
        categoria: "limpeza",
        categoriaNome: "Limpeza",
        imagem: "img/detergente-neutro.jpg",
        descricao: "Detergente para limpeza do dia a dia."
    },


    /* =========================================
       LAVANDERIA
    ========================================= */

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


    /* =========================================
       ACESSÓRIOS
    ========================================= */

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
        descricao: "Lixeira para organização da casa."
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


    /* =========================================
       PERFUMAÇÃO
    ========================================= */

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
        descricao: "Perfume para deixar o ambiente agradável."
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

const elementos = {

    modalCarrinho:
        document.getElementById("carrinhoModal"),

    listaCarrinho:
        document.getElementById("listaCarrinho"),

    totalCarrinho:
        document.getElementById("totalCarrinho"),

    contadorCarrinho:
        document.getElementById("contadorCarrinho"),

    botaoCarrinho:
        document.getElementById("botaoCarrinho"),

    fecharCarrinho:
        document.getElementById("fecharCarrinho"),

    limparCarrinho:
        document.getElementById("limparCarrinho"),

    enviarWhatsApp:
        document.getElementById("enviarWhatsApp"),

    nomeCliente:
        document.getElementById("nomeCliente"),

    enderecoCliente:
        document.getElementById("enderecoCliente"),

    pesquisa:
        document.getElementById("pesquisaProdutos"),

    resultadoPesquisa:
        document.getElementById("resultadoPesquisa"),

    menu:
        document.getElementById("menu"),

    menuMobile:
        document.getElementById("menuMobile"),

    toast:
        document.getElementById("toast")

};


/* =====================================================
   LOCAL STORAGE
===================================================== */

function carregarCarrinho() {

    try {

        const salvo =
            localStorage.getItem(CHAVE_CARRINHO);

        if (!salvo) {
            return [];
        }

        const dados = JSON.parse(salvo);

        if (!Array.isArray(dados)) {
            return [];
        }

        return dados;

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
        CHAVE_CARRINHO,
        JSON.stringify(carrinho)
    );
}


/* =====================================================
   FORMATAÇÃO DE PREÇO
===================================================== */

function formatarPreco(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


/* =====================================================
   ENCONTRAR PRODUTO
===================================================== */

function encontrarProduto(id) {

    return produtos.find(
        produto => produto.id === Number(id)
    );
}


/* =====================================================
   QUANTIDADE TOTAL
===================================================== */

function quantidadeTotalCarrinho() {

    return carrinho.reduce(
        (total, item) =>
            total + item.quantidade,
        0
    );
}


/* =====================================================
   TOTAL DO CARRINHO
===================================================== */

function calcularTotalCarrinho() {

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
   ADICIONAR PRODUTO
===================================================== */

function adicionarProduto(id) {

    const produto =
        encontrarProduto(id);

    if (!produto) {

        mostrarToast(
            "Produto não encontrado."
        );

        return;
    }


    const itemExistente =
        carrinho.find(
            item =>
                item.id === produto.id
        );


    if (itemExistente) {

        if (
            itemExistente.quantidade >=
            produto.estoque
        ) {

            mostrarToast(
                `Estoque máximo: ${produto.estoque} unidades.`
            );

            return;
        }

        itemExistente.quantidade++;

    } else {

        carrinho.push({
            id: produto.id,
            quantidade: 1
        });

    }


    salvarCarrinho();

    atualizarCarrinho();

    mostrarToast(
        `${produto.nome} foi adicionado ao carrinho!`
    );

}


/* =====================================================
   AUMENTAR QUANTIDADE
===================================================== */

function aumentarQuantidade(id) {

    const produto =
        encontrarProduto(id);

    const item =
        carrinho.find(
            item => item.id === Number(id)
        );

    if (!produto || !item) {
        return;
    }


    if (
        item.quantidade >=
        produto.estoque
    ) {

        mostrarToast(
            `Você atingiu o estoque disponível de ${produto.estoque}.`
        );

        return;
    }


    item.quantidade++;

    salvarCarrinho();

    atualizarCarrinho();
}


/* =====================================================
   DIMINUIR QUANTIDADE
===================================================== */

function diminuirQuantidade(id) {

    const item =
        carrinho.find(
            item => item.id === Number(id)
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

    atualizarCarrinho();
}


/* =====================================================
   REMOVER PRODUTO
===================================================== */

function removerProduto(id) {

    const produto =
        encontrarProduto(id);

    carrinho =
        carrinho.filter(
            item =>
                item.id !== Number(id)
        );

    salvarCarrinho();

    atualizarCarrinho();

    if (produto) {

        mostrarToast(
            `${produto.nome} foi removido.`
        );
    }
}


/* =====================================================
   LIMPAR CARRINHO
===================================================== */

function limparCarrinho() {

    if (carrinho.length === 0) {

        mostrarToast(
            "O carrinho já está vazio."
        );

        return;
    }


    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();

    mostrarToast(
        "Carrinho limpo."
    );
}


/* =====================================================
   CRIAR IMAGEM DO PRODUTO
===================================================== */

function criarImagemProduto(
    produto,
    classeExtra = ""
) {

    if (!produto.imagem) {

        return `
            <div class="produto-sem-imagem">
                🧴
            </div>
        `;
    }


    return `
        <img
            src="${produto.imagem}"
            alt="${produto.nome}"
            class="${classeExtra}"
            loading="lazy"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;produto-sem-imagem&quot;>🧴</div>';"
        >
    `;
}


/* =====================================================
   CRIAR CARD DO PRODUTO
===================================================== */

function criarCardProduto(produto) {

    const itemCarrinho =
        carrinho.find(
            item => item.id === produto.id
        );

    const quantidadeAtual =
        itemCarrinho
            ? itemCarrinho.quantidade
            : 0;

    const estoqueDisponivel =
        produto.estoque -
        quantidadeAtual;


    const esgotado =
        estoqueDisponivel <= 0;


    return `

        <article
            class="produto-card"
            data-produto-id="${produto.id}"
        >

            <div class="produto-imagem">

                ${criarImagemProduto(produto)}

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
                    ${formatarPreco(produto.preco)}
                </div>

                <div class="produto-estoque">

                    ${
                        esgotado
                            ? "Produto no limite do estoque"
                            : `${estoqueDisponivel} disponíveis`
                    }

                </div>


                <button
                    type="button"
                    class="btn-adicionar-produto"
                    onclick="adicionarProduto(${produto.id})"
                    ${esgotado ? "disabled" : ""}
                >

                    ${
                        esgotado
                            ? "Limite atingido"
                            : "🛒 Adicionar"
                    }

                </button>

            </div>

        </article>
    `;
}


/* =====================================================
   CARREGAR CARROSSÉIS
===================================================== */

function carregarProdutos() {

    const categorias = [
        "limpeza",
        "lavanderia",
        "acessorios",
        "perfumacao"
    ];


    categorias.forEach(
        categoria => {

            const container =
                document.getElementById(
                    `carousel-${categoria}`
                );


            if (!container) {
                return;
            }


            const produtosCategoria =
                produtos.filter(
                    produto =>
                        produto.categoria ===
                        categoria
                );


            container.innerHTML =
                produtosCategoria
                    .map(criarCardProduto)
                    .join("");
        }
    );
}


/* =====================================================
   ATUALIZAR PRODUTOS
===================================================== */

function atualizarProdutos() {

    carregarProdutos();

}


/* =====================================================
   MOVER CARROSSEL
===================================================== */

function moverCarrossel(
    id,
    direcao
) {

    const carousel =
        document.getElementById(id);

    if (!carousel) {
        return;
    }


    const distancia =
        carousel.clientWidth * 0.75;


    carousel.scrollBy({
        left:
            distancia * Number(direcao),

        behavior: "smooth"
    });

}


/* =====================================================
   ATUALIZAR CARRINHO
===================================================== */

function atualizarCarrinho() {

    const quantidade =
        quantidadeTotalCarrinho();


    const total =
        calcularTotalCarrinho();


    elementos.contadorCarrinho.textContent =
        quantidade;


    elementos.totalCarrinho.textContent =
        formatarPreco(total);


    if (carrinho.length === 0) {

        elementos.listaCarrinho.innerHTML = `

            <div class="carrinho-vazio">

                <div style="font-size: 50px;">
                    🛒
                </div>

                <strong>
                    Seu carrinho está vazio.
                </strong>

                <p>
                    Escolha alguns produtos para começar.
                </p>

            </div>

        `;

        return;
    }


    elementos.listaCarrinho.innerHTML =
        carrinho
            .map(criarItemCarrinho)
            .join("");


    atualizarProdutos();
}

=====================================================
   CRIAR ITEM DO CARRINHO
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

        <div
            class="carrinho-item"
            data-id="${produto.id}"
        >

            <div class="carrinho-item-imagem">

                ${criarImagemProduto(produto)}

            </div>


            <div class="carrinho-item-info">

                <h4>
                    ${produto.nome}
                </h4>

                <p>
                    ${formatarPreco(subtotal)}
                </p>


                <div class="controle-quantidade">

                    <button
                        type="button"
                        onclick="diminuirQuantidade(${produto.id})"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantidade}
                    </span>

                    <button
                        type="button"
                        onclick="aumentarQuantidade(${produto.id})"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                type="button"
                class="remover-item"
                onclick="removerProduto(${produto.id})"
                aria-label="Remover ${produto.nome}"
            >
                🗑️
            </button>

        </div>

    `;
}


/* =====================================================
   ABRIR CARRINHO
===================================================== */

function abrirCarrinho() {

    elementos.modalCarrinho.classList.add(
        "aberto"
    );

    elementos.modalCarrinho.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "sem-scroll"
    );

    atualizarCarrinho();
}


/* =====================================================
   FECHAR CARRINHO
===================================================== */

function fecharCarrinho() {

    elementos.modalCarrinho.classList.remove(
        "aberto"
    );

    elementos.modalCarrinho.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "sem-scroll"
    );

}


/* =====================================================
   PESQUISA
===================================================== */

function pesquisarProdutos() {

    const termo =
        elementos.pesquisa.value
            .trim()
            .toLowerCase();


    const categorias =
        document.querySelectorAll(
            ".categoria-produtos"
        );


    if (termo === "") {

        elementos.resultadoPesquisa.classList.remove(
            "ativo"
        );

        elementos.resultadoPesquisa.innerHTML =
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


    elementos.resultadoPesquisa.classList.add(
        "ativo"
    );


    if (resultados.length === 0) {

        elementos.resultadoPesquisa.innerHTML = `

            <div class="sem-resultado">

                <div style="font-size: 40px;">
                    😕
                </div>

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


    elementos.resultadoPesquisa.innerHTML = `

        <h3 class="resultado-titulo">
            🔎 ${resultados.length}
            produto(s) encontrado(s)
        </h3>

        <div class="resultado-grid">

            ${resultados
                .map(criarCardProduto)
                .join("")}

        </div>
    `;
}


/* =====================================================
   WHATSAPP
===================================================== */

function enviarPedidoWhatsApp() {

    if (carrinho.length === 0) {

        mostrarToast(
            "Adicione produtos ao carrinho primeiro."
        );

        return;
    }


    const nome =
        elementos.nomeCliente.value.trim();


    const endereco =
        elementos.enderecoCliente.value.trim();


    if (!nome) {

        mostrarToast(
            "Digite seu nome antes de enviar."
        );

        elementos.nomeCliente.focus();

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
                ` — ${formatarPreco(subtotal)}`;
        }
    );


    mensagem +=
        `\n\n💰 *TOTAL:* ${formatarPreco(
            calcularTotalCarrinho()
        )}`;


    mensagem +=
        "\n\nAguardo a confirmação do pedido. 😊";


    const url =
        `https://wa.me/${NUMERO_WHATSAPP}?text=` +
        encodeURIComponent(mensagem);


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   TOAST
===================================================== */

let timeoutToast;


function mostrarToast(mensagem) {

    clearTimeout(timeoutToast);


    elementos.toast.textContent =
        mensagem;


    elementos.toast.classList.add(
        "mostrar"
    );


    timeoutToast =
        setTimeout(
            () => {

                elementos.toast.classList.remove(
                    "mostrar"
                );

            },
            2500
        );
}


/* =====================================================
   MENU MOBILE
===================================================== */

function alternarMenu() {

    elementos.menu.classList.toggle(
        "aberto"
    );

}


function fecharMenuMobile() {

    elementos.menu.classList.remove(
        "aberto"
    );

}


/* =====================================================
   EVENTOS
===================================================== */

elementos.botaoCarrinho.addEventListener(
    "click",
    abrirCarrinho
);


elementos.fecharCarrinho.addEventListener(
    "click",
    fecharCarrinho
);


elementos.limparCarrinho.addEventListener(
    "click",
    limparCarrinho
);


elementos.enviarWhatsApp.addEventListener(
    "click",
    enviarPedidoWhatsApp
);


elementos.pesquisa.addEventListener(
    "input",
    pesquisarProdutos
);


elementos.menuMobile.addEventListener(
    "click",
    alternarMenu
);


/* =====================================================
   SETAS DOS CARROSSÉIS
===================================================== */

document
    .querySelectorAll(".seta-carrossel")
    .forEach(
        botao => {

            botao.addEventListener(
                "click",
                () => {

                    const id =
                        botao.dataset.carousel;

                    const direction =
                        botao.dataset.direction;


                    moverCarrossel(
                        id,
                        direction
                    );

                }
            );

        }
    );


/* =====================================================
   FECHAR CARRINHO CLICANDO FORA
===================================================== */

elementos.modalCarrinho.addEventListener(
    "click",
    evento => {

        if (
            evento.target ===
            elementos.modalCarrinho
        ) {

            fecharCarrinho();

        }

    }
);


/* =====================================================
   ESC PARA FECHAR
===================================================== */

document.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "Escape") {

            fecharCarrinho();

            fecharMenuMobile();

        }

    }
);


/* =====================================================
   FECHAR MENU AO CLICAR EM LINK
===================================================== */

document
    .querySelectorAll(".menu a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                fecharMenuMobile
            );

        }
    );


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        carregarProdutos();

        atualizarCarrinho();

    }
);
