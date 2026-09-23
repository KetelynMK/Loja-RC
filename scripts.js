/* ==================================================
   PRODUTOS
================================================== */

const produtos = [

    {
        id: 1,
        nome: "Sabão líquido",
        categoria: "Limpeza",
        descricao: "Azul / Verde / Cereja / Branca / Erva-doce",
        preco: 14.40,
        estoque: 10,
        icone: "🧴"
    },

    {
        id: 2,
        nome: "Água sanitária 5L",
        categoria: "Limpeza",
        descricao: "Para limpeza geral",
        preco: 9.60,
        estoque: 10,
        icone: "💧"
    },

    {
        id: 3,
        nome: "Cloro",
        categoria: "Limpeza",
        descricao: "Produto para limpeza",
        preco: 16.20,
        estoque: 10,
        icone: "🧪"
    },

    {
        id: 4,
        nome: "Cloro 5L",
        categoria: "Limpeza",
        descricao: "Embalagem econômica",
        preco: 32.00,
        estoque: 8,
        icone: "🧪"
    },

    {
        id: 5,
        nome: "Limpador perfumado roxo",
        categoria: "Perfumado",
        descricao: "Perfume agradável para sua casa",
        preco: 17.60,
        estoque: 8,
        icone: "🌸"
    },

    {
        id: 6,
        nome: "Pinho",
        categoria: "Limpeza",
        descricao: "Limpador para sua casa",
        preco: 14.40,
        estoque: 10,
        icone: "🧴"
    },

    {
        id: 7,
        nome: "Pereirão",
        categoria: "Limpeza",
        descricao: "Produto para limpeza pesada",
        preco: 23.20,
        estoque: 6,
        icone: "🧹"
    },

    {
        id: 8,
        nome: "Sabão querosene",
        categoria: "Limpeza",
        descricao: "Para limpeza geral",
        preco: 18.40,
        estoque: 7,
        icone: "🧼"
    },

    {
        id: 9,
        nome: "Sabão líquido azul 5L",
        categoria: "Econômico",
        descricao: "Embalagem de 5 litros",
        preco: 25.50,
        estoque: 5,
        icone: "🧴"
    },

    {
        id: 10,
        nome: "Detergente neutro / coco",
        categoria: "Detergente",
        descricao: "Para louças e limpeza",
        preco: 12.00,
        estoque: 15,
        icone: "🧴"
    },

    {
        id: 11,
        nome: "Pequeno",
        categoria: "Limpeza",
        descricao: "Produto de limpeza",
        preco: 3.00,
        estoque: 20,
        icone: "🧴"
    },

    {
        id: 12,
        nome: "Vernonez",
        categoria: "Limpeza",
        descricao: "Produto para limpeza",
        preco: 9.60,
        estoque: 10,
        icone: "🧴"
    },

    {
        id: 13,
        nome: "Limpador com coco",
        categoria: "Limpeza",
        descricao: "Para limpeza da casa",
        preco: 6.40,
        estoque: 10,
        icone: "🧽"
    },

    {
        id: 14,
        nome: "Tira manchas",
        categoria: "Limpeza",
        descricao: "Ajuda na remoção de manchas",
        preco: 16.40,
        estoque: 7,
        icone: "✨"
    },

    {
        id: 15,
        nome: "Cheirinho",
        categoria: "Perfumação",
        descricao: "Perfume para ambientes",
        preco: 14.40,
        estoque: 10,
        icone: "🌺"
    },

    {
        id: 16,
        nome: "Borrifador",
        categoria: "Acessórios",
        descricao: "Ideal para produtos de limpeza",
        preco: 18.40,
        estoque: 8,
        icone: "🧴"
    },

    {
        id: 17,
        nome: "Lustra móveis",
        categoria: "Móveis",
        descricao: "Para móveis",
        preco: 10.40,
        estoque: 8,
        icone: "🪑"
    },

    {
        id: 18,
        nome: "Limpa alumínio",
        categoria: "Limpeza",
        descricao: "Para limpeza de alumínio",
        preco: 7.40,
        estoque: 10,
        icone: "✨"
    },

    {
        id: 19,
        nome: "Sabão em pedra",
        categoria: "Sabão",
        descricao: "Para limpeza",
        preco: 4.00,
        estoque: 20,
        icone: "🧼"
    },

    {
        id: 20,
        nome: "Limpa vidro",
        categoria: "Vidros",
        descricao: "Para vidros e superfícies",
        preco: 14.40,
        estoque: 8,
        icone: "🪟"
    },

    {
        id: 21,
        nome: "Pano de chão",
        categoria: "Acessórios",
        descricao: "Para limpeza doméstica",
        preco: 3.00,
        estoque: 20,
        icone: "🧹"
    },

    {
        id: 22,
        nome: "Álcool azul / rosa / verde",
        categoria: "Limpeza",
        descricao: "Opções de cores",
        preco: 9.60,
        estoque: 12,
        icone: "🧴"
    },

    {
        id: 23,
        nome: "Multiuso verde",
        categoria: "Multiuso",
        descricao: "Para diversas superfícies",
        preco: 13.60,
        estoque: 10,
        icone: "🧴"
    },

    {
        id: 24,
        nome: "Ricardo",
        categoria: "Limpeza",
        descricao: "Produto de limpeza",
        preco: 13.60,
        estoque: 10,
        icone: "🧴"
    },

    {
        id: 25,
        nome: "Amaciante",
        categoria: "Limpeza",
        descricao: "Para deixar as roupas perfumadas",
        preco: 10.40,
        estoque: 12,
        icone: "🧴"
    },

    {
        id: 26,
        nome: "Pequeno verde",
        categoria: "Limpeza",
        descricao: "Produto de limpeza",
        preco: 4.25,
        estoque: 15,
        icone: "🧴"
    }

];


/* ==================================================
   CARRINHO
================================================== */

let carrinho = JSON.parse(
    localStorage.getItem("carrinhoRC")
) || [];


/* ==================================================
   ELEMENTOS
================================================== */

const listaProdutos =
    document.getElementById("listaProdutos");

const itensCarrinho =
    document.getElementById("itensCarrinho");

const totalCarrinho =
    document.getElementById("totalCarrinho");

const quantidadeCarrinho =
    document.getElementById("quantidadeCarrinho");

const carrinhoElemento =
    document.getElementById("carrinho");

const fundoCarrinho =
    document.getElementById("fundoCarrinho");

const campoPesquisa =
    document.getElementById("campoPesquisa");

const semProdutos =
    document.getElementById("semProdutos");


/* ==================================================
   FORMATAÇÃO DE DINHEIRO
================================================== */

function formatarPreco(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* ==================================================
   MOSTRAR PRODUTOS
================================================== */

function mostrarProdutos(lista = produtos) {

    listaProdutos.innerHTML = "";


    if (lista.length === 0) {

        semProdutos.style.display = "block";

        return;

    }


    semProdutos.style.display = "none";


    lista.forEach(produto => {

        const itemNoCarrinho =
            carrinho.find(
                item => item.id === produto.id
            );


        const quantidadeAtual =
            itemNoCarrinho
                ? itemNoCarrinho.quantidade
                : 0;


        const estoqueDisponivel =
            produto.estoque - quantidadeAtual;


        const card =
            document.createElement("article");

        card.className = "produto";


        card.innerHTML = `

            <div class="produto-imagem">
                ${produto.icone}
            </div>

            <span class="produto-categoria">
                ${produto.categoria}
            </span>

            <h3>
                ${produto.nome}
            </h3>

            <p>
                ${produto.descricao}
            </p>

            <div class="estoque">
                Disponível:
                <strong>
                    ${estoqueDisponivel}
                </strong>
                unidade(s)
            </div>

            <strong class="preco">
                ${formatarPreco(produto.preco)}
            </strong>

            <button
                class="btn-adicionar"
                onclick="adicionarCarrinho(${produto.id})"
                ${estoqueDisponivel <= 0 ? "disabled" : ""}
            >

                ${
                    estoqueDisponivel <= 0
                        ? "Estoque esgotado"
                        : "+ Adicionar"
                }

            </button>

        `;


        listaProdutos.appendChild(card);

    });

}


/* ==================================================
   ADICIONAR AO CARRINHO
================================================== */

function adicionarCarrinho(id) {

    const produto =
        produtos.find(
            produto => produto.id === id
        );


    if (!produto) {
        return;
    }


    const item =
        carrinho.find(
            item => item.id === id
        );


    /* VERIFICA ESTOQUE */

    if (item) {

        if (
            item.quantidade >= produto.estoque
        ) {

            alert(
                `Você já adicionou todo o estoque disponível de ${produto.nome}.`
            );

            return;

        }


        item.quantidade++;

    } else {

        carrinho.push({

            id: produto.id,

            quantidade: 1

        });

    }


    salvarCarrinho();

    atualizarTudo();

}


/* ==================================================
   ALTERAR QUANTIDADE
================================================== */

function alterarQuantidade(id, alteracao) {

    const item =
        carrinho.find(
            item => item.id === id
        );


    const produto =
        produtos.find(
            produto => produto.id === id
        );


    if (!item || !produto) {
        return;
    }


    const novaQuantidade =
        item.quantidade + alteracao;


    /* NÃO PASSAR DO ESTOQUE */

    if (
        novaQuantidade > produto.estoque
    ) {

        alert(
            `Só existem ${produto.estoque} unidade(s) de ${produto.nome} em estoque.`
        );

        return;

    }


    /* SE CHEGAR A ZERO */

    if (novaQuantidade <= 0) {

        removerCarrinho(id);

        return;

    }


    item.quantidade =
        novaQuantidade;


    salvarCarrinho();

    atualizarTudo();

}


/* ==================================================
   REMOVER PRODUTO
================================================== */

function removerCarrinho(id) {

    carrinho =
        carrinho.filter(
            item => item.id !== id
        );


    salvarCarrinho();

    atualizarTudo();

}


/* ==================================================
   LIMPAR CARRINHO
================================================== */

function limparCarrinho() {

    if (carrinho.length === 0) {
        return;
    }


    const confirmar =
        confirm(
            "Tem certeza que deseja limpar o carrinho?"
        );


    if (!confirmar) {
        return;
    }


    carrinho = [];

    salvarCarrinho();

    atualizarTudo();

}


/* ==================================================
   MOSTRAR CARRINHO
================================================== */

function mostrarCarrinho() {

    itensCarrinho.innerHTML = "";


    if (carrinho.length === 0) {

        itensCarrinho.innerHTML = `

            <div class="carrinho-vazio">

                🛒

                <strong>
                    Seu carrinho está vazio
                </strong>

                <p>
                    Adicione alguns produtos para começar.
                </p>

            </div>

        `;

        return;

    }


    carrinho.forEach(item => {

        const produto =
            produtos.find(
                produto => produto.id === item.id
            );


        if (!produto) {
            return;
        }


        const subtotal =
            produto.preco *
            item.quantidade;


        const elemento =
            document.createElement("div");

        elemento.className =
            "item-carrinho";


        elemento.innerHTML = `

            <div class="item-icone">
                ${produto.icone}
            </div>

            <div>

                <h4>
                    ${produto.nome}
                </h4>

                <span class="item-preco">
                    ${formatarPreco(subtotal)}
                </span>

                <div class="quantidade">

                    <button
                        onclick="alterarQuantidade(${produto.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantidade}
                    </span>

                    <button
                        onclick="alterarQuantidade(${produto.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remover"
                onclick="removerCarrinho(${produto.id})"
                title="Remover"
            >
                🗑️
            </button>

        `;


        itensCarrinho.appendChild(elemento);

    });

}


/* ==================================================
   TOTAL
================================================== */

function calcularTotal() {

    return carrinho.reduce(
        (total, item) => {

            const produto =
                produtos.find(
                    produto => produto.id === item.id
                );


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


/* ==================================================
   QUANTIDADE TOTAL
================================================== */

function calcularQuantidade() {

    return carrinho.reduce(
        (total, item) =>
            total + item.quantidade,
        0
    );

}


/* ==================================================
   ATUALIZAR TUDO
================================================== */

function atualizarTudo() {

    mostrarProdutos();

    mostrarCarrinho();


    const total =
        calcularTotal();


    const quantidade =
        calcularQuantidade();


    totalCarrinho.textContent =
        formatarPreco(total);


    quantidadeCarrinho.textContent =
        quantidade;


    localStorage.setItem(
        "carrinhoRC",
        JSON.stringify(carrinho)
    );

}


/* ==================================================
   ABRIR CARRINHO
================================================== */

function abrirCarrinho() {

    carrinhoElemento.classList.add(
        "aberto"
    );

    fundoCarrinho.classList.add(
        "aberto"
    );

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   FECHAR CARRINHO
================================================== */

function fecharCarrinho() {

    carrinhoElemento.classList.remove(
        "aberto"
    );

    fundoCarrinho.classList.remove(
        "aberto"
    );

    document.body.style.overflow =
        "";

}


/* ==================================================
   BOTÕES DO CARRINHO
================================================== */

document
    .getElementById("abrirCarrinho")
    .addEventListener(
        "click",
        abrirCarrinho
    );


document
    .getElementById("fecharCarrinho")
    .addEventListener(
        "click",
        fecharCarrinho
    );


fundoCarrinho
    .addEventListener(
        "click",
        fecharCarrinho
    );


document
    .getElementById("limparCarrinho")
    .addEventListener(
        "click",
        limparCarrinho
    );


/* ==================================================
   PESQUISA
================================================== */

campoPesquisa.addEventListener(
    "input",
    function () {

        const termo =
            campoPesquisa.value
                .toLowerCase()
                .trim();


        const resultado =
            produtos.filter(
                produto =>

                    produto.nome
                        .toLowerCase()
                        .includes(termo)

                    ||

                    produto.categoria
                        .toLowerCase()
                        .includes(termo)

                    ||

                    produto.descricao
                        .toLowerCase()
                        .includes(termo)

            );


        mostrarProdutos(resultado);

    }
);


/* ==================================================
   WHATSAPP
================================================== */

document
    .getElementById("enviarWhatsApp")
    .addEventListener(
        "click",
        enviarWhatsApp
    );


function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
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

        alert(
            "Digite seu nome antes de enviar o pedido."
        );

        return;

    }


    let mensagem =
        `Olá! Meu nome é ${nome}.%0A%0A`;

    mensagem +=
        `Gostaria de fazer este pedido:%0A%0A`;


    carrinho.forEach(item => {

        const produto =
            produtos.find(
                produto => produto.id === item.id
            );


        const subtotal =
            produto.preco *
            item.quantidade;


        mensagem +=
            `• ${produto.nome} - ${item.quantidade}x - ${formatarPreco(subtotal)}%0A`;

    });


    mensagem +=
        `%0A*Total: ${formatarPreco(calcularTotal())}*`;


    if (endereco) {

        mensagem +=
            `%0A%0AEndereço: ${endereco}`;

    }


    mensagem +=
        `%0A%0AAguardo a confirmação. Obrigado!`;


    const telefone =
        "5511983184154";


    const url =
        `https://wa.me/${telefone}?text=${mensagem}`;


    window.open(
        url,
        "_blank"
    );

}


/* ==================================================
   SALVAR CARRINHO
================================================== */

function salvarCarrinho() {

    localStorage.setItem(
        "carrinhoRC",
        JSON.stringify(carrinho)
    );

}


/* ==================================================
   INICIAR
================================================== */

atualizarTudo();
