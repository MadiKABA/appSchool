/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("const formApprenant=document.querySelector(\"#form-apprenant\");\nconst nom=document.querySelector(\"#nom\")\nconst prenom=document.querySelector(\"#prenom\")\nconst biographie=document.querySelector(\"#biographie\")\nconst niveau =document.querySelector(\"#niveau\");\nconst imgprofil=document.querySelector(\"#imgprofil\")\nconst test=document.querySelector(\"#test\")\nconst btnAjouter=document.querySelector(\"#Enregistrer\")\nconst divTableauApprenant=document.querySelector(\"#divTableauApprenant\")\n\n//fonction pour vider les champs input apres l'ajout\nfunction viderInputs()\n{\n    nom.value=\"\"\n    prenom.value=\"\"\n    biographie.value=\"\"\n    //imgprofil.value=\"\"\n}\n\n//validation du formulaire et ajout de carte apprenant sur linterface\nlet span=document.createElement(\"span\")\n\n\nformApprenant.addEventListener(\"submit\", (e)=>{\n    e.preventDefault()\n    \n        if(nom.value.trim()===\"\")\n        {\n            validationFOrmulaire(nom,\"le nom \", span)\n        }else if(prenom.value.trim()==\"\"){\n            validationFOrmulaire(prenom,\"le prenom \", span)\n        }\n        else if(biographie.value.trim()==\"\")\n        {\n            validationFOrmulaire(biographie,\"la biograohie \", span)\n        }\n        else if(btnAjouter.value==\"Ajouter\")\n        {\n            app={\n                id:Date.now(),\n                nom:nom.value,\n                prenom:prenom.value,\n                profile:\"profile\",\n                biographie:biographie.value,\n                niveau:niveau.value\n            },\n            apprenants.push(app),\n            divTableauApprenant.innerHTML=\"\",\n            apprenants.forEach(apprenant=>{\n                creerUNeCarte(apprenant,apprenants)\n            }),\n          \n            //console.log(apprenants),\n            viderInputs()\n            //e.target.submit()\n            \n        }else{\n            alert(\"modifer\")\n            apprenants.forEach(apprenant=>{\n                if(apprenant.id==sessionStorage.getItem(\"apprenantAMod\"))\n                {\n                    alert(\"bonjour\")\n                    app={\n                        id:sessionStorage.getItem(\"apprenantAMod\"),\n                        nom:nom.value,\n                        prenom:prenom.value,\n                        profile:\"profile\",\n                        biographie:biographie.value,\n                        niveau:niveau.value\n                    }\n                    const index=apprenants.indexOf(apprenant)\n                    apprenants.splice(index,1,app)\n                    divTableauApprenant.innerHTML=\"\"\n                    viderInputs()\n                    apprenants.forEach(apprenant=>{\n                        creerUNeCarte(apprenant,apprenants)\n                    })\n                }\n            })\n        }\n\n})\n\n\n//function pour valider les chapms inputs\nfunction validationFOrmulaire(input,msgerreur,span)\n{\n    span.textContent=msgerreur+\" est obligatoir\"\n    span.style.color=\"red\"\n    input.insertAdjacentElement(\"beforebegin\",span)\n    input.style.border=\"1px solid red\"\n}\n\n//controle de saisi dans le champs biographie\nbiographie.addEventListener(\"input\", (event)=>{\n    const maxcaractere=130\n    const contenuSaisie=biographie.value\n    const longueurSaisi=contenuSaisie.length\n    const rest= maxcaractere-longueurSaisi\n\n    //actualiser le dom pour afficher le nombre\n\n    const paragrapheLimiteTexte=document.querySelector(\"#paragraphe-limite-texte\")\n    const spanNombreCaracteres=document.querySelector(\"#span-nombre-caracteres\")\n    const testResntant=document.querySelector(\"#testResntant\")\n    spanNombreCaracteres.textContent=longueurSaisi\n    testResntant.textContent=\"il vous reste:  \"+rest+\" caractere a saisir\"\n\n\n    if(rest<=10)\n    {\n        paragrapheLimiteTexte.style.color=\"yellow\"\n    }\n    if(rest<0)\n    {\n        paragrapheLimiteTexte.style.color=\"red\"\n        btnAjouter.disabled=true\n    }\n    if(rest==10)\n    {\n        paragrapheLimiteTexte.style.color=\"black\"\n        btnAjouter.disabled=false\n    }\n    \n})\n\nconst apprenants=[]\n\n\n//fonction de creation d'une carte\nfunction creerUNeCarte(apprenant,apprenants){\n\n\n    const idButtonSupprimer = \"btn_supprimer-\" + apprenant.id\n    const idButtonModifier = \"btn_modifier-\" + apprenant.id\n    const idDivSupp=\"divSupp-\"+apprenant.id\n\n    console.log(idButtonModifier)\n    const idModifier=idButtonModifier.substring(13,idButtonModifier.length)\n    const idSpprimer=idButtonSupprimer.substring(14,idButtonSupprimer.length)\n\n\n    divTableauApprenant.insertAdjacentHTML(\"afterbegin\",`\n    <div class=\"col-12 mb-2\" id=\"${idDivSupp}\">\n        <div class=\"card\">\n            <div class=\"row mx-0\">\n                <div class=\"col-4\">\n                    <img src=\"img/image 1.png\" class=\"img-fluid mt-5\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"d-flex justify-content-end\">\n                        <i class=\"bi bi-pen btn text-warning\" id=\"${idButtonModifier}\"></i>\n                        <i class=\"bi bi-x-lg btn text-danger\"id=\"${idButtonSupprimer}\"></i>\n                    </div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\" id=\"nomAppTab\">${apprenant.nom}</h5>\n                        <h6 class=\"card-title\" id=\"prenomAppTab\">${apprenant.prenom}</h6>\n                        <p class=\"card-text\">${apprenant.biographie}</p>\n                        <p class=\"card-text\">${apprenant.niveau}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>`)\n   \n//modification de la'pprenant du tableau\n    const btnModifier=document.getElementById(idButtonModifier)\n    const btnSupprimer=document.getElementById(idButtonSupprimer)\n    const carteSupprimer=document.getElementById(idDivSupp)\n\n\n    btnModifier.addEventListener(\"click\",(event)=>{\n        event.preventDefault()\n        //alert(\"bonjour\")\n        //console.log(apprenants)\n        apprenants.forEach(apprenant=>{\n            if(apprenant.id==idModifier)\n            {\n                nom.value=apprenant.nom\n                prenom.value=apprenant.prenom\n                biographie.value=apprenant.biographie\n                console.log(apprenant.nom)\n                btnAjouter.value=\"Modifier\"\n                btnAjouter.textContent=\"Modifier\"\n                console.log(btnAjouter)\n                sessionStorage.setItem(\"apprenantAMod\",idModifier)\n            }\n            \n        })\n    })\n\n\n    //suppresion de la carte apprenant de la liste\n    btnSupprimer.addEventListener(\"click\",(event)=>{\n        event.preventDefault()\n        apprenants.forEach(apprenant=>{\n            if(apprenant.id==idSpprimer)\n            {\n                //console.log(apprenants)\n                //console.log(apprenants.length)\n                const index=apprenants.indexOf(apprenant)\n                apprenants.splice(index,1)\n                divTableauApprenant.removeChild(carteSupprimer)\n                console.log(apprenants)\n               \n            }else{\n                console.log(\"mauvaise idee\")\n                console.log(idSpprimer)\n               \n            }\n            \n        })\n       \n        \n    })\n}\n\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    apprenants.forEach(apprenant => {\n        creerUNeCarte(apprenant)\n        \n    });\n   \n})\n\n//console.log(apprenants)\n\n\n//# sourceURL=webpack://SchoolApp/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;