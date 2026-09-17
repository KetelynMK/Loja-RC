// ============================================================
// RC PRODUTOS DE LIMPEZA
// JavaScript do catálogo, carrinho e pedidos pelo WhatsApp
// ============================================================

// Número do WhatsApp que receberá os pedidos
const WHATSAPP = "5511983184154";

// ============================================================
// PRODUTOS
// Edite os preços e informações aqui.
// ============================================================

const products = [
  {
    id: 1,
    name: "Detergente",
    category: "Detergentes",
    price: 0.00,
    unit: "500 ml",
    emoji: "🧴",
    desc: "Limpeza e praticidade para o dia a dia."
  },

  {
    id: 2,
    name: "Amaciante",
    category: "Amaciantes",
    price: 0.00,
    unit: "2 L",
    emoji: "🌸",
    desc: "Perfume agradável e cuidado para as roupas."
  },

  {
    id: 3,
    name: "Desinfetante",
    category: "Desinfetantes",
    price: 0.00,
    unit: "2 L",
    emoji: "🫧",
    desc: "Para uma limpeza completa dos ambientes."
  },

  {
    id: 4,
    name: "Cloro Gel",
    category: "Cloro",
    price: 0.00,
    unit: "500 g",
    emoji: "🧼",
    desc: "Prático para limpeza pesada."
  },

  {
    id: 5,
    name: "Percarbonato",
    category: "Limpeza",
    price: 0.00,
    unit: "500 g",
    emoji: "✨",
    desc: "Auxilia na limpeza e remoção de manchas."
  },

  {
    id: 6,
    name: "Sabão Líquido",
    category: "Lavanderia",
    price: 0.00,
    unit: "2 L",
    emoji: "🧺",
    desc: "Limpeza eficiente para suas roupas."
  },

  {
    id: 7,
    name: "Multiuso",
    category: "Limpeza",
    price: 0.00,
    unit: "500 ml",
    emoji: "💧",
    desc: "Versátil para diversas superfícies."
  },

  {
    id: 8,
    name: "Limpa-vidros",
    category: "Limpeza",
    price: 0.00,
    unit: "500 ml",
    emoji: "🪟",
    desc: "Ajuda a deixar os vidros limpos e brilhantes."
  }
];


// ============================================================
// VARIÁVEIS
// ============================================================

let cart = {};
let activeCategory = "Todos";


// ============================================================
// FORMATAÇÃO DE DINHEIRO
// ============================================================

const money = value => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};


// ============================================================
// CATEGORIAS
// ============================================================

function renderCategories() {

  const categories = [
    "Todos",
    ...new Set(products.map(product => product.category))
  ];

  document.getElementById("categories").innerHTML =
    categories.map(category => `
      <button
        class="category ${category === activeCategory ? "active" : ""}"
        data-category="${category}"
      >
        ${category}
      </button>
    `).join("");

  document.querySelectorAll(".category").forEach(button => {

    button.addEventListener("click", () => {

      activeCategory = button.dataset.category;

      renderCategories();
      renderProducts();

    });

  });

}


// ============================================================
// PRODUTOS
// ============================================================

function renderProducts() {

  const search =
    document
      .getElementById("search")
      .value
      .trim()
      .toLowerCase();

  const list = products.filter(product => {

    const categoryOK =
      activeCategory === "Todos" ||
      product.category === activeCategory;

    const searchOK =
      !search ||
      `${product.name} ${product.category} ${product.desc}`
        .toLowerCase()
        .includes(search);

    return categoryOK && searchOK;

  });


  const grid = document.getElementById("productGrid");

  document.getElementById("emptyState").hidden =
    list.length > 0;


  grid.innerHTML = list.map(product => `

    <article class="product-card">

      <div class="product-image">
        ${product.emoji}
      </div>

      <div class="product-body">

        <span class="product-cat">
          ${product.category.toUpperCase()}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <div class="product-desc">
          ${product.unit} · ${product.desc}
        </div>

        <div class="product-bottom">

          <span class="price">

            ${
              product.price > 0
                ? money(product.price)
                : "Consultar preço"
            }

          </span>

          <button
            class="add"
            onclick="addToCart(${product.id})"
          >
            + Adicionar
          </button>

        </div>

      </div>

    </article>

  `).join("");

}


// ============================================================
// ADICIONAR AO CARRINHO
// ============================================================

function addToCart(id) {

  cart[id] = (cart[id] || 0) + 1;

  renderCart();

  showToast("Produto adicionado ao pedido");

}


// ============================================================
// ALTERAR QUANTIDADE
// ============================================================

function changeQty(id, amount) {

  cart[id] = (cart[id] || 0) + amount;

  if (cart[id] <= 0) {
    delete cart[id];
  }

  renderCart();

}


// ============================================================
// RENDERIZAR CARRINHO
// ============================================================

function renderCart() {

  const entries = Object.entries(cart);

  const items = document.getElementById("cartItems");

  const empty = document.getElementById("cartEmpty");

  let total = 0;

  let count = 0;


  items.innerHTML = entries.map(([id, quantity]) => {

    const product =
      products.find(item => item.id === Number(id));

    total += product.price * quantity;

    count += quantity;


    return `

      <div class="cart-row">

        <div>

          <strong>
            ${product.name}
          </strong>

          <small>

            ${
              product.price > 0
                ? `${money(product.price)} cada`
                : "Preço a confirmar"
            }

          </small>

        </div>


        <div class="qty">

          <button
            onclick="changeQty(${product.id}, -1)"
          >
            −
          </button>

          <span>
            ${quantity}
          </span>

          <button
            onclick="changeQty(${product.id}, 1)"
          >
            +
          </button>

        </div>

      </div>

    `;

  }).join("");


  empty.style.display =
    entries.length ? "none" : "block";


  document.getElementById("cartCount").textContent =
    count;


  document.getElementById("cartTotal").textContent =
    total > 0
      ? money(total)
      : "A confirmar";

}


// ============================================================
// ABRIR CARRINHO
// ============================================================

function openCart() {

  document
    .getElementById("cart")
    .classList.add("open");

  document
    .getElementById("cartOverlay")
    .classList.add("open");

}


// ============================================================
// FECHAR CARRINHO
// ============================================================

function closeCart() {

  document
    .getElementById("cart")
    .classList.remove("open");

  document
    .getElementById("cartOverlay")
    .classList.remove("open");

}


// ============================================================
// AVISO NA TELA
// ============================================================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 1800);

}


// ============================================================
// ENVIAR PEDIDO PELO WHATSAPP
// ============================================================

function sendWhatsAppOrder() {

  const entries = Object.entries(cart);


  if (!entries.length) {

    showToast("Adicione pelo menos um produto");

    return;

  }


  const name =
    document
      .getElementById("customerName")
      .value
      .trim();


  const address =
    document
      .getElementById("customerAddress")
      .value
      .trim();


  let total = 0;


  const lines = entries.map(([id, quantity]) => {

    const product =
      products.find(item => item.id === Number(id));


    total += product.price * quantity;


    return `• ${quantity}x ${product.name} (${product.unit}) - ${
      product.price > 0
        ? money(product.price * quantity)
        : "preço a confirmar"
    }`;

  });


  const message = [

    "Olá! Gostaria de fazer um pedido na RC Produtos de Limpeza.",

    "",

    name
      ? `Nome: ${name}`
      : "",

    address
      ? `Endereço: ${address}`
      : "",

    "",

    "Produtos:",

    ...lines,

    "",

    `Total: ${
      total > 0
        ? money(total)
        : "a confirmar"
    }`,

    "",

    "Aguardo a confirmação do pedido. Obrigado!"

  ]
  .filter(Boolean)
  .join("\n");


  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

}


// ============================================================
// EVENTOS
// ============================================================

document
  .getElementById("search")
  .addEventListener("input", renderProducts);


document
  .getElementById("openCart")
  .addEventListener("click", openCart);


document
  .getElementById("closeCart")
  .addEventListener("click", closeCart);


document
  .getElementById("cartOverlay")
  .addEventListener("click", closeCart);


document
  .getElementById("whatsappOrder")
  .addEventListener("click", sendWhatsAppOrder);


// ============================================================
// INICIALIZAÇÃO
// ============================================================

renderCategories();

renderProducts();

renderCart();
