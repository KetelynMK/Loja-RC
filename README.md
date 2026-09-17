# 🧴 RC Produtos de Limpeza

<p align="center">
  <strong>Site para divulgação de produtos e realização de pedidos online.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Responsivo-✔-2ea44f?style=for-the-badge">
</p>

---

## 📌 Sobre o projeto

O **RC Produtos de Limpeza** é um site desenvolvido para uma loja de produtos de limpeza, permitindo que os clientes visualizem os produtos disponíveis, consultem os valores e montem seus pedidos de forma rápida e simples.

O pedido é enviado diretamente pelo **WhatsApp**, facilitando a comunicação entre o cliente e a loja.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, sem a necessidade de frameworks.

---

## ✨ Funcionalidades

- 🛍️ Catálogo de produtos
- 🔎 Pesquisa de produtos
- 🗂️ Filtro por categorias
- 🛒 Carrinho de compras
- ➕ Adicionar produtos
- ➖ Alterar quantidade
- 💰 Cálculo automático do valor
- 👤 Cadastro do nome do cliente
- 📍 Campo para endereço
- 📱 Envio do pedido pelo WhatsApp
- 📱 Design responsivo para celular
- 💻 Compatível com computador
- 🎨 Interface moderna
- ⚡ Funcionamento diretamente no navegador

---

## 🖥️ Tecnologias

### HTML5

Responsável pela estrutura e organização das páginas.

### CSS3

Utilizado para:

- Layout
- Responsividade
- Cores
- Botões
- Cards
- Animações
- Interface do carrinho

### JavaScript

Responsável pela parte interativa do sistema:

- Produtos
- Pesquisa
- Categorias
- Carrinho
- Quantidades
- Cálculo dos valores
- Geração do pedido
- Integração com WhatsApp

---

## 🛒 Como funciona

O cliente pode:

**1. Escolher um produto**

Selecionar os produtos desejados no catálogo.

**2. Adicionar ao carrinho**

Clicar no botão `+ Adicionar`.

**3. Conferir o pedido**

Abrir o carrinho e alterar as quantidades.

**4. Informar os dados**

Adicionar nome e endereço para entrega.

**5. Enviar o pedido**

Clicar em:

> 📱 Enviar pedido pelo WhatsApp

O site cria automaticamente uma mensagem contendo os produtos, quantidades e valor total.

---

## 📱 WhatsApp

Os pedidos são enviados para o WhatsApp configurado no JavaScript.

No arquivo `script.js`, procure:

```javascript
const WHATSAPP = "5511983184154";
