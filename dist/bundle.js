/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/creerCarte.js":
/*!**************************!*\
  !*** ./js/creerCarte.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apprenants\": () => (/* binding */ apprenants),\n/* harmony export */   \"variable\": () => (/* binding */ variable),\n/* harmony export */   \"kaba\": () => (/* binding */ kaba),\n/* harmony export */   \"creerUNeCarte\": () => (/* binding */ creerUNeCarte),\n/* harmony export */   \"AjoutApprenant\": () => (/* binding */ AjoutApprenant),\n/* harmony export */   \"func_displaydiv\": () => (/* binding */ func_displaydiv)\n/* harmony export */ });\n/* harmony import */ var _scriptSupabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scriptSupabase */ \"./js/scriptSupabase.js\");\n\n//tableau pour stocke les apprent ajouter avant la sauvegarde\nlet apprenants=[]\n\n//recuperation des elements HTML\nconst formApprenant=document.querySelector(\"#form-apprenant\");\nconst nom=document.querySelector(\"#nom\")\nconst prenom=document.querySelector(\"#prenom\")\nconst biographie=document.querySelector(\"#biographie\")\nconst niveau =document.querySelector(\"#niveau\");\nconst imgprofil=document.querySelector(\"#imgprofil\")\nconst test=document.querySelector(\"#test\")\nconst btnAjouter=document.querySelector(\"#Enregistrer\")\nlet  divTableauApprenant=document.querySelector(\"#divTableauApprenant\")\nconst profile=document.querySelector(\"#profile\")\nconst maquetter=document.querySelector(\"#maquetter\")\nconst basededonnees=document.querySelector(\"#basededonnees\")\nconst interfacedynamique=document.querySelector(\"#interfacedynamique\")\nconst devbackend=document.querySelector(\"#devbackend\")\nconst divContainerAdd=document.querySelector(\"#div-container\")\n\nconst modal_detailsApprenant=document.querySelector(\"#modal_detailsApprenant\")\n\n\nlet variable=2\nconst kaba=5\n\nfunction func_urlImage(e){\n    let src=URL.createObjectURL(e.target.files[0])\n    return src\n}\nimgprofil.addEventListener(\"change\",(e)=>{\n    let source = func_urlImage(e)\n    profile.src=source\n    console.log(source);\n   })\n\n//vider les champs inputs\nfunction viderInputs()\n{\n    nom.value=\"\"\n    prenom.value=\"\"\n    biographie.value=\"\"\n    imgprofil.value=\"\"\n    maquetter.value=\"\"\n    basededonnees.value=\"\"\n    interfacedynamique.value=\"\"\n    devbackend.value=\"\"\n}\n\n//creation du span pour afficher les message d'erreur de validation par input\nlet span=document.createElement(\"span\")\n\n//fonction pour la mise en forme des element d'erreurs\nfunction validationFOrmulaire(input,msgerreur,span)\n{\n    span.textContent=msgerreur+\" est obligatoir\"\n    span.style.color=\"red\"\n    input.insertAdjacentElement(\"beforebegin\",span)\n    input.style.border=\"1px solid red\"\n}\n\n//controle de saisi dans le champs biographie\nbiographie.addEventListener(\"input\", (event)=>{\n    const maxcaractere=130\n    const contenuSaisie=biographie.value\n    const longueurSaisi=contenuSaisie.length\n    const rest= maxcaractere-longueurSaisi\n\n    //actualiser le dom pour afficher le nombre\n\n    const paragrapheLimiteTexte=document.querySelector(\"#paragraphe-limite-texte\")\n    const spanNombreCaracteres=document.querySelector(\"#span-nombre-caracteres\")\n    const testResntant=document.querySelector(\"#testResntant\")\n    spanNombreCaracteres.textContent=longueurSaisi\n    testResntant.textContent=\"il vous reste:  \"+rest+\" caractere a saisir\"\n\n\n    if(rest<=10)\n    {\n        paragrapheLimiteTexte.style.color=\"yellow\"\n    }\n    if(rest<0)\n    {\n        paragrapheLimiteTexte.style.color=\"red\"\n        btnAjouter.disabled=true\n    }\n    if(rest==10)\n    {\n        paragrapheLimiteTexte.style.color=\"black\"\n        btnAjouter.disabled=false\n    }\n    \n})\n\nfunction func_btnModifier(btnModifier,idModifier)\n{\n    btnModifier.addEventListener(\"click\",(event)=>{\n        event.preventDefault()\n        //alert(\"bonjour\")\n        //console.log(apprenants)\n        apprenants.forEach(apprenant=>{\n            if(apprenant.indicetab==idModifier)\n            {\n                nom.value=apprenant.nom\n                prenom.value=apprenant.prenom\n                biographie.value=apprenant.biographie\n                maquetter.value=apprenant.maquetter,\n                basededonnees.value=apprenant.basededonnees,\n                interfacedynamique.value=apprenant.interfacedynamique,\n                devbackend.value=apprenant.devbackend\n                console.log(apprenant.nom)\n                btnAjouter.value=\"Modifier\"\n                btnAjouter.textContent=\"Modifier\"\n                console.log(btnAjouter)\n                sessionStorage.setItem(\"apprenantAMod\",idModifier)\n            }\n            \n        })\n    })\n}\n\n\nfunction func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer){\n    btnSupprimer.addEventListener(\"click\",(event)=>{\n        event.preventDefault()\n        apprenants.forEach(apprenant=>{\n            if(apprenant.indicetab==idSpprimer)\n            {\n                //console.log(apprenants)\n                //console.log(apprenants.length)\n                const indicetab=apprenants.indexOf(apprenant)\n                apprenants.splice(indicetab,1)\n                divTableauApprenant.removeChild(carteSupprimer)\n                console.log(apprenants)\n               \n            }else{\n                console.log(\"mauvaise idee\")\n                console.log(idSpprimer)\n               \n            }\n            \n        })\n       \n        \n    })\n}\n\n\n//fonction de creation d'une carte\nfunction creerUNeCarte(apprenant,dcol,btnnone,dnone,divContainer){\n\n\n    const idButtonSupprimer = \"btn_supprimer-\" + apprenant.indicetab\n    const idButtonModifier = \"btn_modifier-\" + apprenant.indicetab\n    const idDivSupp=\"divSupp-\"+apprenant.indicetab\n    const idDetail=\"btn-detail-\"+apprenant.id\n\n    console.log(idButtonModifier)\n    const idModifier=idButtonModifier.substring(13,idButtonModifier.length)\n    const idSpprimer=idButtonSupprimer.substring(14,idButtonSupprimer.length)\n\n\n    divContainer.insertAdjacentHTML(\"beforeend\",`\n    <div class=\"col-sm-12 ${dcol} mb-2 shadow-lg p-3 bg-body rounded\" id=\"${idDivSupp}\">\n        <div class=\"card text-center\" >\n            <div class=\"d-flex justify-content-end\">\n                <i class=\"bi bi-pen btn text-warning ${btnnone}\" id=\"${idButtonModifier}\"></i>\n                <i class=\"bi bi-x-lg btn text-danger ${btnnone}\"id=\"${idButtonSupprimer}\"></i>\n            </div>\n            <img src=\"${apprenant.profile}\" class=\"card-img mx-auto d-block img-fluid w-75\" alt=\"...\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">${apprenant.nom} ${apprenant.prenom}</h5>\n                <p class=\"card-text\">${apprenant.niveau}</p>\n                <a href=\"#\" id=\"${idDetail}\" class=\"btn btn-primary ${dnone}\">Details</a>\n            </div>\n        </div>\n    </div>`)\n   \n//modification de la'pprenant du tableau\n    const btnModifier=document.getElementById(idButtonModifier)\n    const btnSupprimer=document.getElementById(idButtonSupprimer)\n    const carteSupprimer=document.getElementById(idDivSupp)\n    const btnDetail=document.getElementById(idDetail)\n\n    const btnSpprimer=document.getElementById(\"btn_spprimer\")\n    const  btnModifierApp=document.getElementById(\"btn_modifierApp\")\n\n\n    btnDetail.setAttribute(\"data-bs-toggle\",\"modal\")\n    btnDetail.setAttribute(\"data-bs-target\",\"#modal_detailsApprenant\")\n\n    btnModifierApp.setAttribute(\"data-bs-toggle\",\"modal\")\n    btnModifierApp.setAttribute(\"data-bs-target\",\"#modal_modifierApprenant\")\n\n    btnDetail.addEventListener(\"click\",(e)=>{\n        sessionStorage.setItem(\"idApp\",apprenant.id)\n        //modalDetail(modal_detailsApprenant)\n        ;(0,_scriptSupabase__WEBPACK_IMPORTED_MODULE_0__.show_detail)(apprenant.id)\n    })\n    \n    btnSpprimer.addEventListener(\"click\",(e)=>{\n        e.preventDefault()\n        ;(0,_scriptSupabase__WEBPACK_IMPORTED_MODULE_0__.supprimer_apprenat)(sessionStorage.getItem(\"idApp\"))\n    })\n\n    func_btnModifier(btnModifier,idModifier)\n\n    //suppresion de la carte apprenant de la liste\n    func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer)\n    \n}\n\nfunction AjoutApprenant(){\n    formApprenant.addEventListener(\"submit\", (e)=>{\n        e.preventDefault()\n        \n            if(nom.value.trim()===\"\")\n            {\n                validationFOrmulaire(nom,\"le nom \", span)\n            }else if(prenom.value.trim()==\"\"){\n                validationFOrmulaire(prenom,\"le prenom \", span)\n            }\n            else if(biographie.value.trim()==\"\")\n            {\n                validationFOrmulaire(biographie,\"la biograohie \", span)\n            }\n            else if(btnAjouter.value==\"Ajouter\")\n            {\n                const app={\n                    indicetab:Date.now(),\n                    nom:nom.value,\n                    prenom:prenom.value,\n                    biographie:biographie.value,\n                    niveau:niveau.value,\n                    profile:profile.src,\n                    maquetter:parseInt(maquetter.value),\n                    basedonnee:parseInt(basededonnees.value),\n                    interfacedynamique:parseInt(interfacedynamique.value),\n                    devbackend:parseInt(devbackend.value)\n                }\n                apprenants.push(app),\n                divTableauApprenant.innerHTML=\"\",\n                apprenants.forEach(apprenant=>{\n                    creerUNeCarte(apprenant,\"col-md-12\",\"d-block\",\"d-none\",divTableauApprenant)\n                }),\n                \n                alert(devbackend.value)\n                //console.log(apprenants),\n                viderInputs()\n                //e.target.submit()\n                \n            }else{\n                \n                apprenants.forEach(apprenant=>{\n                    if(apprenant.indicetab==sessionStorage.getItem(\"apprenantAMod\"))\n                    {\n                        const app={\n                            indicetab:sessionStorage.getItem(\"apprenantAMod\"),\n                            nom:nom.value,\n                            prenom:prenom.value,\n                            profile:profile.src,\n                            biographie:biographie.value,\n                            niveau:niveau.value,\n                            maquetter:parseInt(maquetter.value),\n                            basedonnee:parseInt(basededonnees.value),\n                            interfacedynamique:parseInt(interfacedynamique.value),\n                            devbackend:parseInt(devbackend.value)\n                        }\n                        const indicetab=apprenants.indexOf(apprenant)\n                        apprenants.splice(indicetab,1,app)  \n                        divTableauApprenant.innerHTML=\"\"\n                        viderInputs()\n                        btnAjouter.value=\"Ajouter\"\n                        btnAjouter.innerText=\"Ajouter\"\n                        apprenants.forEach(apprenant=>{\n                            creerUNeCarte(apprenant,\"col-md-12\",\"d-block\",\"d-none\",divTableauApprenant)\n                        })\n\n                    }\n                })\n              \n            }\n    })\n   \n\n}\nconst divFormAjout=document.querySelector(\"#div_form_ajout\")\nconst addApprenant=document.querySelector(\"#add_apprenant\")\n\nfunction func_displaydiv()\n{   //alert(\"booo\")\n    addApprenant.addEventListener(\"click\",(e)=>{\n        e.preventDefault()\n        _scriptSupabase__WEBPACK_IMPORTED_MODULE_0__.list_apprenant.setAttribute(\"class\",\"d-none\")\n        divContainerAdd.setAttribute(\"class\",\"d-block\")\n        //alert(\"boooo\")\n    })\n}\n/*sauvegarder.addEventListener(\"click\",(e)=>{\n    e.preventDefault()\n    apprenants=[]\n    //divTableauApprenant.innerHTML=\"\",\n    apprenants.forEach(apprenant=>{\n        creerUNeCarte(apprenant,\"d-none\")\n    })\n})*/\n\n\n\n\n//# sourceURL=webpack://schoolapp/./js/creerCarte.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creerCarte_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creerCarte.js */ \"./js/creerCarte.js\");\n/* harmony import */ var _scriptSupabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scriptSupabase.js */ \"./js/scriptSupabase.js\");\n\n\n\n\n\n\n\nconst divFormAjout=document.querySelector(\"#div_form_ajout\")\nconst addApprenant=document.querySelector(\"#add_apprenant\")\nlet sauvegarder=document.querySelector(\"#sauvegarder\")\n;(0,_creerCarte_js__WEBPACK_IMPORTED_MODULE_0__.AjoutApprenant)()\n\nsauvegarder.addEventListener(\"click\",_scriptSupabase_js__WEBPACK_IMPORTED_MODULE_1__.func_sauvegarde)\n\n  /*  addApprenant.addEventListener(\"click\",(e)=>{\n        e.preventDefault()\n        list_apprenant.setAttribute(\"class\",\"d-none\")\n        divFormAjout.setAttribute(\"class\",\"d-block\")\n        alert(\"boooo\")\n    })*/\n\n\n//func_load_listeApprenants\n/*const sauvegarder=document.querySelector(\"#sauvegarder\")\nsauvegarder.addEventListener(\"click\",(e)=>{\n    e.preventDefault()\n    alert(\"bonj\")\n})*/\n\n/*const formApprenant=document.querySelector(\"#form-apprenant\");\nconst nom=document.querySelector(\"#nom\")\nconst prenom=document.querySelector(\"#prenom\")\nconst biographie=document.querySelector(\"#biographie\")\nconst niveau =document.querySelector(\"#niveau\");\nconst imgprofil=document.querySelector(\"#imgprofil\")\nconst test=document.querySelector(\"#test\")\nconst btnAjouter=document.querySelector(\"#Enregistrer\")\nconst divTableauApprenant=document.querySelector(\"#divTableauApprenant\")\n\n//fonction pour vider les champs input apres l'ajout\nfunction viderInputs()\n{\n    nom.value=\"\"\n    prenom.value=\"\"\n    biographie.value=\"\"\n    //imgprofil.value=\"\"\n}\n\n//validation du formulaire et ajout de carte apprenant sur linterface\nlet span=document.createElement(\"span\")\n\n\nformApprenant.addEventListener(\"submit\", (e)=>{\n    e.preventDefault()\n    \n        if(nom.value.trim()===\"\")\n        {\n            validationFOrmulaire(nom,\"le nom \", span)\n        }else if(prenom.value.trim()==\"\"){\n            validationFOrmulaire(prenom,\"le prenom \", span)\n        }\n        else if(biographie.value.trim()==\"\")\n        {\n            validationFOrmulaire(biographie,\"la biograohie \", span)\n        }\n        else if(btnAjouter.value==\"Ajouter\")\n        {\n            app={\n                id:Date.now(),\n                nom:nom.value,\n                prenom:prenom.value,\n                profile:\"profile\",\n                biographie:biographie.value,\n                niveau:niveau.value\n            },\n            apprenants.push(app),\n            divTableauApprenant.innerHTML=\"\",\n            apprenants.forEach(apprenant=>{\n                creerUNeCarte(apprenant,apprenants)\n            }),\n          \n            //console.log(apprenants),\n            viderInputs()\n            //e.target.submit()\n            \n        }else{\n            alert(\"modifer\")\n            apprenants.forEach(apprenant=>{\n                if(apprenant.id==sessionStorage.getItem(\"apprenantAMod\"))\n                {\n                    alert(\"bonjour\")\n                    app={\n                        id:sessionStorage.getItem(\"apprenantAMod\"),\n                        nom:nom.value,\n                        prenom:prenom.value,\n                        profile:\"profile\",\n                        biographie:biographie.value,\n                        niveau:niveau.value\n                    }\n                    const index=apprenants.indexOf(apprenant)\n                    apprenants.splice(index,1,app)\n                    divTableauApprenant.innerHTML=\"\"\n                    viderInputs()\n                    apprenants.forEach(apprenant=>{\n                        creerUNeCarte(apprenant,apprenants)\n                    })\n                }\n            })\n        }\n\n})\n\n\n//function pour valider les chapms inputs\nfunction validationFOrmulaire(input,msgerreur,span)\n{\n    span.textContent=msgerreur+\" est obligatoir\"\n    span.style.color=\"red\"\n    input.insertAdjacentElement(\"beforebegin\",span)\n    input.style.border=\"1px solid red\"\n}\n\n//controle de saisi dans le champs biographie\nbiographie.addEventListener(\"input\", (event)=>{\n    const maxcaractere=130\n    const contenuSaisie=biographie.value\n    const longueurSaisi=contenuSaisie.length\n    const rest= maxcaractere-longueurSaisi\n\n    //actualiser le dom pour afficher le nombre\n\n    const paragrapheLimiteTexte=document.querySelector(\"#paragraphe-limite-texte\")\n    const spanNombreCaracteres=document.querySelector(\"#span-nombre-caracteres\")\n    const testResntant=document.querySelector(\"#testResntant\")\n    spanNombreCaracteres.textContent=longueurSaisi\n    testResntant.textContent=\"il vous reste:  \"+rest+\" caractere a saisir\"\n\n\n    if(rest<=10)\n    {\n        paragrapheLimiteTexte.style.color=\"yellow\"\n    }\n    if(rest<0)\n    {\n        paragrapheLimiteTexte.style.color=\"red\"\n        btnAjouter.disabled=true\n    }\n    if(rest==10)\n    {\n        paragrapheLimiteTexte.style.color=\"black\"\n        btnAjouter.disabled=false\n    }\n    \n})\n\nconst apprenants=[]\n\n\n//fonction de creation d'une carte\nfunction creerUNeCarte(apprenant,apprenants){\n\n\n    const idButtonSupprimer = \"btn_supprimer-\" + apprenant.id\n    const idButtonModifier = \"btn_modifier-\" + apprenant.id\n    const idDivSupp=\"divSupp-\"+apprenant.id\n\n    console.log(idButtonModifier)\n    const idModifier=idButtonModifier.substring(13,idButtonModifier.length)\n    const idSpprimer=idButtonSupprimer.substring(14,idButtonSupprimer.length)\n\n\n    divTableauApprenant.insertAdjacentHTML(\"afterbegin\",`\n    <div class=\"col-12 mb-2\" id=\"${idDivSupp}\">\n        <div class=\"card\">\n            <div class=\"row mx-0\">\n                <div class=\"col-4\">\n                    <img src=\"img/image 1.png\" class=\"img-fluid mt-5\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"d-flex justify-content-end\">\n                        <i class=\"bi bi-pen btn text-warning\" id=\"${idButtonModifier}\"></i>\n                        <i class=\"bi bi-x-lg btn text-danger\"id=\"${idButtonSupprimer}\"></i>\n                    </div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\" id=\"nomAppTab\">${apprenant.nom}</h5>\n                        <h6 class=\"card-title\" id=\"prenomAppTab\">${apprenant.prenom}</h6>\n                        <p class=\"card-text\">${apprenant.biographie}</p>\n                        <p class=\"card-text\">${apprenant.niveau}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>`)\n   \n//modification de la'pprenant du tableau\n    const btnModifier=document.getElementById(idButtonModifier)\n    const btnSupprimer=document.getElementById(idButtonSupprimer)\n    const carteSupprimer=document.getElementById(idDivSupp)\n\n\n    \n    func_btnModifier(btnModifier,idModifier)\n\n    //suppresion de la carte apprenant de la liste\n    func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer)\n    \n}\n\n\nfunction func_btnModifier(btnModifier,idModifier)\n{\n    btnModifier.addEventListener(\"click\",(event)=>{\n        event.preventDefault()\n        //alert(\"bonjour\")\n        //console.log(apprenants)\n        apprenants.forEach(apprenant=>{\n            if(apprenant.id==idModifier)\n            {\n                nom.value=apprenant.nom\n                prenom.value=apprenant.prenom\n                biographie.value=apprenant.biographie\n                console.log(apprenant.nom)\n                btnAjouter.value=\"Modifier\"\n                btnAjouter.textContent=\"Modifier\"\n                console.log(btnAjouter)\n                sessionStorage.setItem(\"apprenantAMod\",idModifier)\n            }\n            \n        })\n    })\n}\n\nfunction func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer){\n    btnSupprimer.addEventListener(\"click\",(event)=>{\n        event.preventDefault()\n        apprenants.forEach(apprenant=>{\n            if(apprenant.id==idSpprimer)\n            {\n                //console.log(apprenants)\n                //console.log(apprenants.length)\n                const index=apprenants.indexOf(apprenant)\n                apprenants.splice(index,1)\n                divTableauApprenant.removeChild(carteSupprimer)\n                console.log(apprenants)\n               \n            }else{\n                console.log(\"mauvaise idee\")\n                console.log(idSpprimer)\n               \n            }\n            \n        })\n       \n        \n    })\n}\n*/\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    /*apprenants.forEach(apprenant => {\n        creerUNeCarte(apprenant)\n        \n    });\n   */\n  event.preventDefault()\n    //alert(variable)\n    //alert(kaba)\n    ;(0,_creerCarte_js__WEBPACK_IMPORTED_MODULE_0__.func_displaydiv)()\n    ;(0,_scriptSupabase_js__WEBPACK_IMPORTED_MODULE_1__.func_load_listeApprenants)()\n})\n\n//console.log(apprenants)\n\n\n//# sourceURL=webpack://schoolapp/./js/index.js?");

/***/ }),

/***/ "./js/scriptSupabase.js":
/*!******************************!*\
  !*** ./js/scriptSupabase.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kaba\": () => (/* binding */ kaba),\n/* harmony export */   \"list_apprenant\": () => (/* binding */ list_apprenant),\n/* harmony export */   \"func_sauvegarde\": () => (/* binding */ func_sauvegarde),\n/* harmony export */   \"func_load_listeApprenants\": () => (/* binding */ func_load_listeApprenants),\n/* harmony export */   \"show_detail\": () => (/* binding */ show_detail),\n/* harmony export */   \"supprimer_apprenat\": () => (/* binding */ supprimer_apprenat)\n/* harmony export */ });\n/* harmony import */ var _creerCarte_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creerCarte.js */ \"./js/creerCarte.js\");\n\n\nconst API_URL = \"https://qykdgfkmxloirmikimaq.supabase.co/rest/v1/apprenants\"\nconst API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA1NTA4OCwiZXhwIjoxOTU0NjMxMDg4fQ.FgFKuqHkJfrZyXhhmZTeeC_7NpQbCrnulyEKe2KCN-0\"\n\n\n//recuperation des elements du HTML\nlet kaba = 74\nlet sauvegarder = document.querySelector(\"#sauvegarder\")\nlet list_apprenant = document.querySelector(\"#list_apprenant\")\n\nconst bio = document.querySelector(\"#bio\")\nconst nom_prenom = document.querySelector(\"#nom_prenom\")\nconst niveaudetail = document.querySelector(\"#niveaudetail\")\nconst pourcentageMaquetter = document.querySelector(\"#pourcentageMaquetter\")\nconst pourcentageinterfaceStatic = document.querySelector(\"#pourcentageinterfaceStatic\")\nconst pourcentageBaseD = document.querySelector(\"#pourcentageBaseD\")\nlet pourcentageBackend = document.querySelector(\"#pourcentageBackend\")\n\n\nfunction func_sauvegarde() {\n  console.log(_creerCarte_js__WEBPACK_IMPORTED_MODULE_0__.apprenants)\n  _creerCarte_js__WEBPACK_IMPORTED_MODULE_0__.apprenants.forEach(apprenant => {\n    alert(\"bien sauvegarder\")\n    fetch(API_URL, {\n      method: \"POST\",\n      headers: {\n        apikey: API_KEY,\n        \"Content-Type\": \"application/json\",\n        //Prefer: \"return=representation\"\n      },\n      body: JSON.stringify(apprenant)\n    })\n    alert(\"bien sauvegarder\")\n  })\n  //alert(\"bien sauvegarder\")\n  window.location.href = \"../index.html\"\n\n\n\n}\nfunction func_load_listeApprenants() {\n\n  fetch(API_URL, {\n    headers: {\n      apiKey: API_KEY,\n    },\n  })\n    .then((response) => response.json())\n    .then((apprenant) => {\n      apprenant.forEach((app) => (0,_creerCarte_js__WEBPACK_IMPORTED_MODULE_0__.creerUNeCarte)(app, \"col-md-4\", \"d-none\", \"d-block\", list_apprenant));\n    });\n\n}\n\nfunction show_detail(id) {\n  fetch(`${API_URL}?id=eq.${id}`, {\n    headers: {\n      apiKey: API_KEY,\n    },\n  })\n    .then((response) => response.json())\n    .then((apprenant) => {\n      //modalDetail(apprenant)\n      modalDetail(apprenant[0])\n    });\n\n  //alert(\"show\")\n}\n\n\n\nfunction modalDetail(apprenant) {\n  nom_prenom.textContent = apprenant.nom + \" \" + apprenant.prenom\n  niveaudetail.textContent = apprenant.niveau\n  bio.textContent = apprenant.biographie\n  pourcentageMaquetter.style.width = `${apprenant.maquetter}%`\n  pourcentageinterfaceStatic.style.width = `${apprenant.interfacedynamique}%`\n  pourcentageBaseD.style.width = `${apprenant.basedonnee}%`\n  pourcentageBackend.style.width = `${apprenant.devbackend}%`\n\n  pourcentageMaquetter.textContent = `${apprenant.maquetter}%`\n  pourcentageinterfaceStatic.textContent = `${apprenant.interfacedynamique}%`\n  pourcentageBaseD.textContent = `${apprenant.basedonnee}%`\n  pourcentageBackend.textContent = `${apprenant.devbackend}%`\n}\n\n\nfunction supprimer_apprenat(id) {\n\n  fetch(`${API_URL}?id=eq.${id}`, {\n    method: \"DELETE\",\n    headers: {\n      apiKey: API_KEY\n    },\n    body: null\n  })\n  window.location.href = \"../index.html\"\n\n}\n\n\n//# sourceURL=webpack://schoolapp/./js/scriptSupabase.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;