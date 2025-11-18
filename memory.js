
//Nombre de colonnes et de lignes
let displayType = 1; 
//Nom du fichier image utilisé
let imagesFile = ''; 
//Création du tableau
const tabCards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E','E','F','F','G','G','H','H','I','I','J','J'];
let firstCard = null;
let secondCard = null;
// pour compter le nombre d'essaies
let tryCounter = 0;
//Compte le nombre de succes
let successCounter = 0;
const gridElement = document.getElementById("grid");

function shuffleCard() {
    for (let i = tabCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let valuei = tabCards[i];
        let valuej = tabCards[j];
        tabCards[i] = valuej;
        tabCards[j] = valuei;
    }
}
shuffleCard();

function buildGrid() {
    //Choix de la grille 
    switch (displayType) {
        case 0:
            gridElement.setAttribute("class", "row row-cols-3");
            break;
        case 1:
            gridElement.setAttribute("class", "row row-cols-4");
            break
        default:
            gridElement.setAttribute("class", "row row-cols-3");
            break;
    }

    //Remplissage de la grille, parcour le tableau de cartes
    for (let i = 0; i < tabCards.length; i++) {
        //Pour chaque carte on céer un élément HTML
        const cardElement = document.createElement("div");
        //Configuration de la class de l'élement 
        cardElement.setAttribute("class", "col");
        //Configuration du contenu de l'élément
        cardElement.innerHTML = tabCards[i];
        cardElement.addEventListener("click", () => flipCard(i));
        //Ajout de l'élément dans la grille
        gridElement.appendChild(cardElement);
    }
}
buildGrid();

//Gere l'action d'un clic sur une carte 
function flipCard(index) { 
    console.log("clic on ", index);
    //Detection d'un click sur la 1er carte 
    if (firstCard === null) {
        firstCard = index;
    } else {
        //Détection d'un click sur la 2eme
        if (secondCard === null && firstCard !== index) {
            secondCard = index;
            tryCounter++;
            //Test l'égalité des cartes
            checkForMatch();
        }
    }
}

//Fonction permet de tester si les deux cartes sont identiques
function checkForMatch() {
    let firstCardValue = tabCards[firstCard];
    let secondCardValue = tabCards[secondCard];
    if (firstCardValue === secondCardValue) {
        console.log("Trouvé !", firstCardValue);
        successCounter++;
    } else {
        console.log("Pas trouvé");
    }
    //Reset des index pour le coup suivant 
    firstCard = null;
    secondCard = null;
    console.log(successCounter);
    console.log(tryCounter);
    console.log("bouh");
}