/** @format */
"use strict";

//Nav Bar Elements
const navBarContainer = document.querySelector(".navbar");

//Products Section
const botonesPrendas = document.querySelector(".botones--prendas");

// Others
const emailField = document.querySelector("#InputEmail");
const messaggeField = document.querySelector("#InputMessagge");
const logInForm = document.querySelector("#logInForm");
const submitFormButton = document.querySelector(".submit--button");
const submitFormButton2 = document.querySelector(".submit--button2");
const imagen = document.querySelector(".imagen--banner");

//Section Elements
const homeSection = document.querySelector(".home");
const ofertasSection = document.querySelector(".ofertas");
const solicitarProudctosSection = document.querySelector(".solicitarProudctos");
const productosSection = document.querySelector(".productos");
let contenedorProductos;
let contenedorOfertas;

const contactoSection = document.querySelector(".contacto");

const section = [
  homeSection,
  ofertasSection,
  solicitarProudctosSection,
  productosSection,
  contactoSection,
];

const products = [
  {
    title: "Buzo Grete",
    description:
      "Buzo friza con lycra, manga larga ranglan. Capucha con cuello alto, Ojal y Cordón de ajuste. Bolsillo estilo canguro en el delantero. Terminación de puño y cintura con puño.",
    color: "negro",
    type: "buzo",
    price: 5700,
    img: "buzo1-1.webp",
    imgSwitch: "buzo1-1.webp",
    offer: false,
  },
  {
    title: "Buzo Kobato",
    description:
      "Buzo Rustico Algodón. Manga larga tubular y capucha. Terminación de puño y cintura en morley. Prenda de uso deportivo, de calce holgado y corte largo.",
    color: "azul",
    type: "buzo",
    price: 5400,
    img: "buzo2-1.webp",
    imgSwitch: "buzo2-2.webp",
    offer: true,
  },
  {
    title: "Buzo Oskar",
    description:
      "Buzo Deportivo textura melange, manga ranglan. Cuello medio. Puños en la manga. Bolsillo en los laterales delanteros. Cierre Delantero carro reverso a tono.",
    color: "azul",
    type: "buzo",
    price: 4540,
    img: "buzo3-1.webp",
    imgSwitch: "buzo3-2.webp",
    offer: false,
  },
  {
    title: "Remera Termica Liviana De Comprension",
    description:
      "Remera Térmico liviano, con elastómero. Manga larga tubular. Escote redondo y manga . Prenda de uso deportivo, con calce ajustado para mantener el calor del cuerpo. ",
    color: "blanco",
    type: "remera",
    price: 2900,
    img: "remera1-1.webp",
    imgSwitch: "remera1-2.webp",
    offer: false,
  },
  {
    title: "Remera Dorte",
    description:
      "Remera Dry. Manga corta. Cuello redondo. Prenda de uso deportivo con calce levemente ajustado. Apta para Running.",
    color: "blanco",
    type: "remera",
    price: 2540,
    img: "remera2-1.webp",
    imgSwitch: "remera2-2.webp",
    offer: true,
  },
  {
    title: "Remera Otti",
    description:
      "Remera Jersey, textura melange. Manga corta. Cuello redondo. Estampa a un color en el Delantero. Prenda de uso deportivo con calce levemente ajustado.",
    color: "verde",
    type: "remera",
    price: 2760,
    img: "remera3-1.webp",
    imgSwitch: "remera3-2.webp",
    offer: false,
  },
  {
    title: "Remera Ashita",
    description:
      "Remera Jersey. Manga corta. Cuello redondo. Estampa a un color en el delantero. Prenda de uso deportivo con calce levemente ajustado.",
    color: "gris",
    type: "remera",
    price: 2240,
    img: "remera4-1.webp",
    imgSwitch: "remera4-2.webp",
    offer: false,
  },
  {
    title: "Remera Shugo",
    description:
      "Remera Mesh. Manga corta. Cuello redondo. Prenda de uso deportivo con calce levemente ajustado. Apta para Running.",
    color: "roja",
    type: "remera",
    price: 2420,
    img: "remera5-1.webp",
    imgSwitch: "remera5-2.webp",
    offer: false,
  },
  {
    title: "Remera Tamesis",
    description:
      "Remera microfibra de poliester. Manga corta. Estampa con relieve en el delantero. Cuello redondo, con terminación de ribete. Prenda de uso deportivo/ urbano.",
    color: "azul",
    type: "remera",
    price: 2760,
    img: "remera6-1.webp",
    imgSwitch: "remera6-2.webp",
    offer: true,
  },
  {
    title: "Pantalon Kobato",
    description:
      "Pantalón deportivo algodón rustico. Con bolsillo. Recorte en los laterales. Cintura con elástico embutido de 4 cm. Prenda de uso deportivo de tiro medio y calce levemente holgado.",
    color: "negro",
    type: "pantalon",
    price: 4100,
    img: "pantalon1-1.webp",
    imgSwitch: "pantalon1-2.webp",
    offer: false,
  },
  {
    title: "Pantalon Deportivo Frizado Lewis",
    description:
      "Pantalón deportivo frizado.Recortes en pierna del delantero.Cintura con elástico embutido de 4cm y cordón de ajuste.Puños en morley.Bolsillos laterales.Prenda de uso deportivo.",
    color: "negro",
    type: "pantalon",
    price: 2910,
    img: "pantalon2-1.webp",
    imgSwitch: "pantalon2-2.webp",
    offer: false,
  },
  {
    title: "Pantalon Rustico",
    description:
      "Textiles Urbanos de Algodón: Las prendas confeccionadas con ALGODÓN son confortables, de suave textura, ideal para el uso de actividades al aire libre y práctica de deportes intensos.",
    color: "gris",
    type: "pantalon",
    price: 3020,
    img: "pantalon3-1.webp",
    imgSwitch: "pantalon3-2.webp",
    offer: true,
  },
  {
    title: "Pantalon Fiordland",
    description:
      "Pantalón tejido frizado fantasía.Bolsillos laterales.Cintura con elástico embutido de 4cm con cordón de ajuste.Prenda de uso deportivo/ Urbano con tiro medio y corte Recto.",
    color: "celeste",
    type: "pantalon",
    price: 3440,
    img: "pantalon4-1.webp",
    imgSwitch: "pantalon4-2.webp",
    offer: false,
  },
  {
    title: "Campera Naruto",
    description:
      "Campera Deportivo.  Canesú delantero y capucha de cuello alto. Manga larga tubular. Bolsillo lateral estilo ribete. Cierre frontal carro reverso a tono.",
    color: "roja",
    type: "campera",
    price: 5090,
    img: "campera1-1.webp",
    imgSwitch: "campera1-2.webp",
    offer: false,
  },
  {
    title: "Campera Deportivo Baudo",
    description:
      "Campera Deportivo manga larga con recortes. Capucha y Delantero con recortes. Bolsillos con cierre sobre el recorte del delantero. Puños y cintura en Morley.",
    color: "gris",
    type: "campera",
    price: 5270,
    img: "campera2-1.webp",
    imgSwitch: "campera2-2.webp",
    offer: true,
  },
  {
    title: "Musculosa Marcel",
    description:
      "Musculosa larga Sportech. Escote redondo y terminación de Sisa con Vista interna. Detalle de cuello con morley. Vivo en los laterales y estampa en el delantero superior ambos a contracolor.",
    color: "azul",
    type: "musculosa",
    price: 2440,
    img: "musculosa1-1.webp",
    imgSwitch: "musculosa1-2.webp",
    offer: false,
  },
  {
    title: "Sudadera Stern",
    description:
      "Sudadera en Morley viscosa, con cuello redondo y espalda deportiva. Terminación de sisa y escote con Ribete. Prenda urbana amplia, de corte Largo.",
    color: "verde",
    type: "musculosa",
    price: 2280,
    img: "musculosa2-1.webp",
    imgSwitch: "musculosa2-2.webp",
    offer: true,
  },
  {
    title: "Musculosa Sora",
    description:
      "Musculosa Mesh. Cuello redondo y espalda deportiva. Terminación de Sisa y escote con Ribete. Prenda Urbana amplia, de corte largo.",
    color: "negra",
    type: "musculosa",
    price: 2180,
    img: "musculosa3-1.webp",
    imgSwitch: "musculosa3-2.webp",
    offer: true,
  },
];

//Functions

// Inicializacion
const renderAllProducts = function () {
  let html = `
  <!-- Products Cards -->
  <div class="container-fluid" id="contenedor--productos">
    <div class="row">
      <!-- Card -->
      `;

  products.forEach((element) => {
    html += `

    <div class="my-4 col-12 pt-2 col-md-6 col-lg-4 tarjeta">
    <div class="card">
      <div class="">
        <img
          class="img w-100 img--card img--card--${element.type}"
          src="./resources/images/${element.img}"
          alt="Sample"
        />
        <div class="mask rgba-black-slight"></div>
      </div>

      <div class="card-body text-center">
        <h5>${element.title}</h5>
        <p class="small text-muted text-uppercase mb-2">${element.type}</p>
        <p class="card-text description ">
        ${element.description}
        </p>
        <hr />
        <h6 class="mb-3">
          <span class="text-grey">$${element.price}</span>
        </h6>

        <button
          type="button"
          class="btn btn-primary btn mr-1 mb-2 btn-block"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>

    `;
  });

  html += `
      </div>
      </div>
    </div>
  
  `;

  productosSection.insertAdjacentHTML("beforeend", html);

  contenedorProductos = document.querySelector("#contenedor--productos");
};

const renderProducts = function (e) {
  if (e.target.id == "todo") renderAllProducts();

  if (e.target.tagName == "BUTTON") {
    deleteProducts();
    const buttonId = e.target.id;

    let html = `
  <!-- Products Cards -->
  <div class="container-fluid" id="contenedor--productos">
    <div class="row">
      <!-- Card -->
      `;

    products
      .filter((product) => product.type == buttonId)
      .forEach((element) => {
        html += `

    <div class="my-4 col-12 pt-2 col-sm-6 col-md-4 tarjeta">
    <div class="card">
      <div class="">
        <img
          class="img w-100 img--card img--card--${element.type}"
          src="./resources/images/${element.img}"
          alt="Sample"
        />
        <div class="mask rgba-black-slight"></div>
      </div>

      <div class="card-body text-center">
        <h5>${element.title}</h5>
        <p class="small text-muted text-uppercase mb-2">Remeras</p>
        <p class="card-text description">
        ${element.description}
        </p>
        <hr />
        <h6 class="mb-3">
          <span class="text-grey">$${element.price}</span>
        </h6>

        <button
          type="button"
          class="btn btn-primary btn mr-1 mb-2 btn-block"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>

    `;
      });

    html += `
      </div>
      </div>
    </div>
  
  `;

    productosSection.insertAdjacentHTML("beforeend", html);
    contenedorProductos = document.querySelector("#contenedor--productos");
  }
};

const renderOfertas = function () {
  let html = `
  <!-- Products Cards -->
  <div class="container-fluid" id="contenedor--ofertas">
    <div class="row">
      <!-- Card -->
      `;

  products
    .filter((element) => element.offer)
    .forEach((element) => {
      html += `

    <div class="my-4 col-12 pt-2 col-md-6 col-lg-4 tarjeta">
    <div class="card">
      <div class="">
        <img
          class="img w-100 img--card img--card--${element.type}"
          src="./resources/images/${element.img}"
          alt="Sample"
        />
        <div class="mask rgba-black-slight"></div>
      </div>

      <div class="card-body text-center">
        <h5>${element.title}</h5>
        <p class="small text-muted text-uppercase mb-2">${element.type}</p>
        <p class="card-text description ">
        ${element.description}
        </p>
        <hr />
        <h6 class="mb-3">
          <span class="text-red">$${element.price}</span>
        </h6>

        <button
          type="button"
          class="btn btn-primary btn mr-1 mb-2 btn-block"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>

    `;
    });

  html += `
      </div>
      </div>
    </div>
  
  `;

  ofertasSection.insertAdjacentHTML("beforeend", html);

  contenedorOfertas = document.querySelector("#contenedor--ofertas");
};

const init = function () {
  hideAllSection();
  renderAllProducts(products);
  renderOfertas();
  homeSection.style.display = "block";
};

//Nav Funcitons
const renderSection = function (e) {
  e.preventDefault();

  const sectionId = e.target.id;
  const sectionToRender = document.querySelector(`.${sectionId}`);

  if (sectionToRender) {
    hideAllSection();
    sectionToRender.style.display = "block";
  }
};

const deleteProducts = function () {
  console.log(contenedorProductos);
  contenedorProductos.remove();
};

//Form Validation
const validateData = function () {
  console.log(emailField.value != null && messaggeField.value != null);

  if (emailField.value && messaggeField.value) {
    return true;
  } else {
    return false;
  }
};

const buttonAvailable = function () {
  if (validateData()) {
    submitFormButton2.classList.remove("disabled");
  } else {
    submitFormButton2.classList.add("disabled");
  }
};

const hideAllSection = function () {
  section.forEach((element) => {
    element.style.display = "none";
  });
};

//Event Listener

//Nav Bar Event Listener
navBarContainer.addEventListener("click", renderSection);

//Form Event Listener
logInForm.addEventListener("keydown", buttonAvailable);
//logInForm.addEventListener("keydown", (e) => {e.sub});

botonesPrendas.addEventListener("click", renderProducts);

init();
