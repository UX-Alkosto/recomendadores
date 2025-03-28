const selectores = {
    btnResta: "#btn-resta",
    btnSuma: "#btn-suma",
    nameInputLlaves: "#llaves",
    selectDepto: "#deptos",
    inputDepto: "#input-dep",
    inputMun: "#input-mun",
    selectMun: "#mun",
    search: "#search",
    question3: "question_3",
    cont_products: "#products",
    cont_alert: "#cont-alert",
    swiper: "#swiper"
}
const urlDeptos = "https://media.aws.alkomprar.com/ymarketingcolcomercio/devs/alkosto/recomendadores/municipios.json"
const urlProducts = "https://feeds.datafeedwatch.com/47727/569ca9474f9f1d41c072e1c7c6bb68e2eeb98407.json";
const countries = async () => {
    const info = await fetch(urlDeptos);
    if (info.ok) {
        const jsonInfo = await info.json();
        let deptos = jsonInfo;
        ciudades(deptos);
    }
}
let contadorLlaves = 1;
let altitudMun = "";
let ducto = "";
let munSel = "";
let municipio = "";


const ciudades = (d) => {

    document.querySelector(selectores.btnSuma).onclick = function (e) {
        if (document.querySelector(selectores.nameInputLlaves).value == 3) {
            alert("maximo de llaves alcanzado")
        } else {
            contadorLlaves++;
            document.querySelector(selectores.nameInputLlaves).value = contadorLlaves;
        }

    }
    document.querySelector(selectores.btnResta).onclick = function (e) {
        if (document.querySelector(selectores.nameInputLlaves).value == 1) {

        } else {
            contadorLlaves--;
            document.querySelector(selectores.nameInputLlaves).value = contadorLlaves;
        }

    }

    let mapDepto = d.map((de) => {
        return `<option value="${de.departamento}">${de.departamento}</option>`
    }).join("");
    document.querySelector(selectores.selectDepto).innerHTML = mapDepto;

    document.querySelector(selectores.inputDepto).addEventListener("change", (e) => {
        document.querySelector(selectores.selectMun).innerHTML = "";
        document.querySelector(selectores.inputMun).value = "";
        let depto = e.target.value;
        let filtroCiudad = d.filter(dep => dep.departamento == depto)
        municipio = filtroCiudad[0].Municipios;
        let mapMun = municipio.map((ci) => {
            return `<option value="${ci.Municipio}">${ci.Municipio}</option>`
        }).join("");
        document.querySelector(selectores.inputMun).disabled = false;
        document.querySelector(selectores.selectMun).innerHTML = mapMun;
        enabledFilter();
    });
    document.querySelector(selectores.inputMun).addEventListener("change", (e) => {
        const munSel = e.target.value
        let filtroMsnm = municipio.filter(mun => mun.Municipio == munSel);
        let altitudMun = filtroMsnm[0].Altitud;
        console.log(altitudMun);

        if (document.querySelector(selectores.inputMun).value == "") {
            alert("llene mun")
        }
    })

    const enabledFilter = (e) => {

        if (document.querySelector(selectores.inputDepto).value == "") {

            document.querySelector(selectores.search).disabled = true;
        }

    }

}

document.querySelector(selectores.search).onclick = function (e) {
    console.log("btn busqueda");


    let optionRadio = document.getElementsByName(selectores.question3);

    for (var i = 0; i < optionRadio.length; i++) {
        if (optionRadio[i].checked) {
            
            ducto = optionRadio[i].value;
            break;
        }
    }
    if (document.querySelector(selectores.inputDepto).value == "") {
        alert("selecciona departamento y un municipio")
    } else if (ducto == "" || ducto == null) {
        alert("selecciona un tipo de vivienda")
    } else if (altitudMun !== "") {
        var EAN;
        console.log("altitud ok");

        const calentadores = async () => {
            console.log("buscando calentadores");

            const info = await fetch(urlProducts);
            if (info.ok) {
                const jsonInfo = await info.json();
                let prod = jsonInfo.products;
                prodList(prod);
            }
        }

        switch (true) {
            case contadorLlaves == 1 && parseInt(altitudMun) >= 2001 && ducto == 1:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "6942501706200",
                    "7704353402773",
                    "7704353394979",
                    "7704353402797",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027692",
                    "7705191027715",
                    "7705191040639",
                    "7705191027753",
                    "7705191027777",
                    "7705191040141",
                    "7576386074452",
                    "7576386074520",

                ];

                function prodList(i) {}

                break;
            case contadorLlaves == 1 && parseInt(altitudMun) >= 2001 && ducto == 2:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4057749621528",
                    "4057749621542",
                    "4057749621542",
                    "4062321017217",
                    "7704353385892",
                    "7704353385885",
                    "7704353402759",
                    "7704353402780",
                    "7704353402766",
                    "7704353402803",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027678",
                    "7705191027708",
                    "7705191027647",
                    "7705191027746",
                    "7705191027760",
                    "7705191040141",
                    "7576386074698",
                    "7576386074766",
                    "7576386074834",

                ];

                function prodList(i) {}
                break;
            case contadorLlaves == 1 && parseInt(altitudMun) <= 2000 && ducto == 1:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "6942501771529",
                    "6942501706002",
                    "6942501706200",
                    "7704353402797",
                    "7704353402773",
                    "7704353394979",
                    "7704353402742",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027692",
                    "7705191027715",
                    "7705191040639",
                    "7705191027753",
                    "7705191027777",
                    "7705191040141",
                    "7576386074452",
                    "7576386074520",
                ];

                function prodList(i) {}
                break;
            case contadorLlaves == 1 && parseInt(altitudMun) <= 2000 && ducto == 2:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "6942501706002",
                    "6942501771529",
                    "4057749621528",
                    "4057749621542",
                    "4062321017217",
                    "7704353385892",
                    "7704353385885",
                    "7704353402759",
                    "7704353402780",
                    "7704353402766",
                    "7704353402803",
                    "7704353402742",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191024929",
                    "7705191027678",
                    "7705191027708",
                    "7705191027647",
                    "7705191027746",
                    "7705191027760",
                    "7705191040141",
                    "7576386074698",
                    "7576386074766",
                    "7576386074834",
                ];

                function prodList(i) {}
                break;

            case contadorLlaves == 2 && parseInt(altitudMun) >= 2001 && ducto == 1:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4057749335098",
                    "4057749335111",
                    "7704353402797",
                    "7704353402773",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027753",
                    "7705191027777",
                    "7576386074452",
                    "7576386074520",
                ];

                function prodList(i) {}
                break;
            case contadorLlaves == 2 && parseInt(altitudMun) >= 2001 && ducto == 2:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4057749621566",
                    "4062321017231",
                    "4062321017255",
                    "7704353385892",
                    "7704353385885",
                    "7704353402759",
                    "7704353402780",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027746",
                    "7705191027760",
                    "7576386074766",
                    "7576386074834",
                ];

                function prodList(i) {}
                break;
            case contadorLlaves == 2 && parseInt(altitudMun) <= 2000 && ducto == 1:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4057749335098",
                    "4057749335111",
                    "7704353402797",
                    "7704353402773",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027753",
                    "7705191027777",
                    "7576386074452",
                    "7576386074520",
                ];

                function prodList(i) {}
                break;
            case contadorLlaves == 2 && parseInt(altitudMun) <= 2000 && ducto == 2:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4057749621566",
                    "4062321017231",
                    "4062321017255",
                    "7704353385892",
                    "7704353385885",
                    "7704353402759",
                    "7704353402780",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027746",
                    "7705191027760",
                    "7576386074766",
                    "7576386074834",
                ];

                function prodList(i) {}
                break;

            case contadorLlaves == 3 && parseInt(altitudMun) >= 2001 && ducto == 1:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "7704353375916",
                    "7704353402797",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027777",
                ];

                function prodList(i) {}

                break;
            case contadorLlaves == 3 && parseInt(altitudMun) >= 2001 && ducto == 2:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4062321023706",
                    "4062321023720",
                    "7704353402780",
                    "7704353385892",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027760",
                    "757638602280",
                ];

                function prodList(i) {}
                break;
            case contadorLlaves == 3 && parseInt(altitudMun) <= 2000 && ducto == 1:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "7704353375916",
                    "7704353402797",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027777",
                ]

                function prodList(i) {}
                break;
            case contadorLlaves == 3 && parseInt(altitudMun) <= 2000 && ducto == 2:
                document.querySelector(selectores.cont_alert).innerHTML = "";
                document.querySelector(selectores.cont_products).innerHTML = "";
                document.querySelector(selectores.swiper).style.display = "block";
                EAN = [
                    "4062321023706",
                    "4062321023720",
                    "7704353402780",
                    "7704353385892",
                    "7704353375916",
                    "7704353032987",
                    "7704353375923",
                    "7704353375930",
                    "7704353032413",
                    "7705191027760",
                    "757638602280",
                ];

                function prodList(i) {
                    const prods = [];
                    for (const ean of EAN) {
                        const prodE = i.find(pr => pr.gtin === ean);
                        if (prodE) {
                            prods.push(prodE);
                        }
                    }
                    console.log("pintar calentadores");

                    document.querySelector(selectores.cont_alert).innerHTML = `
                    <div class="cont-title-prods text-center">
                        <h2 class="subtitle">Calentadores ideales para ti</h2>
                        <p class="text"><b>Te recomendamos los siguientes calentadores según la selección que hiciste</b></p>
                    </div>
                    <div class="global-alerts">
                    <div class="alert success" tabindex="0" role="alert">
                    <span class="alert__icon success__icon">
							<i class="alk-icon-check-only"></i>
						</span>Seleccionaste: ${contadorLlaves} llave(s), Ciudad: ${munSel}, Apartamento con ducto comunal en el edificio.
                    <a id="research" class="volver">Realizar otra consulta</a>
                    </div>
                    </div>
                    `;
                    let volverBuscar = document.querySelector("#research");
                    volverBuscar.onclick = function () {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        })
                    }
                    let mapProd = prods.map((pro) => {
                        let key_1 = "";
                        pro.Key_1 == "" || pro.Key_1 == null ? key_1 = "" : key_1 = `<li>${pro.Key_1}</li>`;
                        let key_2 = "";
                        pro.Key_2 == "" || pro.Key_2 == null ? key_2 = "" : key_2 = `<li>${pro.Key_2}</li>`;
                        let key_3 = "";
                        pro.Key_3 == "" || pro.Key_3 == null ? key_3 = "" : key_3 = `<li>${pro.Key_3}</li>`;

                        let key_4 = "";
                        pro.Key_4 == "" || pro.Key_4 == null ? key_4 = "" : key_4 = `<li>${pro.Key_4}</li>`;

                        let key_5 = "";
                        pro.Key_5 == "" || pro.Key_5 == null ? key_5 = "" : key_5 = `<li>${pro.Key_5}</li>`;
                        let price = parseInt(pro.price);

                        let parsePrice = "";
                        pro.sale == "True" ? parsePrice = parseInt(pro.sale_price) : parsePrice = "";
                        let priceSale = "";
                        pro.sale == "True" ? priceSale = `<p class="price">$${parsePrice.toLocaleString('es-ES')}</p>` : priceSale = `<p class="price">$${price.toLocaleString('es-ES')}</p>`;
                        let priceBefore = "";
                        pro.sale == "True" ? priceBefore = `<p class="before-price">$${price.toLocaleString('es-ES')}</p>` : priceBefore = "";

                        return `

                        <div class="swiper-slide" title="${pro.title}">
                        
                        <img class="img img-responsive img-card" src="${pro.image_link}" alt="${pro.title}"/>
                        <div class="cont-info-card">
                        <h2 class="title-card"><b>${pro.title}</b></h2>
                        ${priceBefore}
                        ${priceSale}
                        <ul class="list-key">
                        ${key_1}
                        ${key_2}
                        ${key_3}
                        ${key_4}
                        ${key_5}
                        </ul>
                        
                        </div>
                        <div class="cont-link">
                        <p class="text"><a class="link" href=${pro.link} target="_blank" rel="noopener noreferrer">
                        Ver especificaciones completas
                        </a></p>
                        </div>
                        </div>
                        `
                    }).join("");
                    document.querySelector(selectores.cont_products).innerHTML = mapProd;

                    var swiper = new Swiper(".swiper", {

                        spaceBetween: 30,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 1.2,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,

                            },
                        },
                    });
                    let ulLists = document.querySelectorAll(".cont-info-card");
                    let heightList = 0;
                    ulLists.forEach(function (ulList) {
                        heightList = Math.max(heightList, ulList.clientHeight);
                    })
                    ulLists.forEach(function (ulList) {
                        ulList.style.minHeight = heightList + "px";
                    });
                    setTimeout(() => {
                        document.querySelector(selectores.search).scrollIntoView();
                        /* function irAlPorcentajeScroll(porcentaje) {
                            var alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
                            var scrollTo = (alturaTotal * porcentaje) / 100;
                            window.scrollTo({
                                top: scrollTo,
                                behavior: 'smooth'
                            });
                        }
                        irAlPorcentajeScroll(95); */
                    }, 800);
                }
                break;
            default:
                break;
        }
        calentadores();
    }


}



countries();