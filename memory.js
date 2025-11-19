const chiens = [
    'images/dogs/dog_01.png', 'images/dogs/dog_01.png',
    'images/dogs/dog_02.png', 'images/dogs/dog_02.png',
    'images/dogs/dog_03.png', 'images/dogs/dog_03.png',
    'images/dogs/dog_04.png', 'images/dogs/dog_04.png',
    'images/dogs/dog_05.png', 'images/dogs/dog_05.png',
    'images/dogs/dog_06.png', 'images/dogs/dog_06.png',
    'images/dogs/dog_07.png', 'images/dogs/dog_07.png',
    'images/dogs/dog_08.png', 'images/dogs/dog_08.png',
    'images/dogs/dog_09.png', 'images/dogs/dog_09.png',
    'images/dogs/dog_10.png', 'images/dogs/dog_10.png'
];

const monstres = [
    'images/monsters/monster_01.png', 'images/monsters/monster_01.png',
    'images/monsters/monster_02.png', 'images/monsters/monster_02.png',
    'images/monsters/monster_03.png', 'images/monsters/monster_03.png',
    'images/monsters/monster_04.png', 'images/monsters/monster_04.png',
    'images/monsters/monster_05.png', 'images/monsters/monster_05.png',
    'images/monsters/monster_06.png', 'images/monsters/monster_06.png',
    'images/monsters/monster_07.png', 'images/monsters/monster_07.png',
    'images/monsters/monster_08.png', 'images/monsters/monster_08.png',
    'images/monsters/monster_09.png', 'images/monsters/monster_09.png',
    'images/monsters/monster_10.png', 'images/monsters/monster_10.png'
];

const couleurs = [
    'images/colors/color_01.png', 'images/colors/color_01.png',
    'images/colors/color_02.png', 'images/colors/color_02.png',
    'images/colors/color_03.png', 'images/colors/color_03.png',
    'images/colors/color_04.png', 'images/colors/color_04.png',
    'images/colors/color_05.png', 'images/colors/color_05.png',
    'images/colors/color_06.png', 'images/colors/color_06.png',
    'images/colors/color_07.png', 'images/colors/color_07.png',
    'images/colors/color_08.png', 'images/colors/color_08.png',
    'images/colors/color_09.png', 'images/colors/color_09.png',
    'images/colors/color_10.png', 'images/colors/color_10.png'
];

const animaux = [
    'images/animals/animal_01.png', 'images/animals/animal_01.png',
    'images/animals/animal_02.png', 'images/animals/animal_02.png',
    'images/animals/animal_03.png', 'images/animals/animal_03.png',
    'images/animals/animal_04.png', 'images/animals/animal_04.png',
    'images/animals/animal_05.png', 'images/animals/animal_05.png',
    'images/animals/animal_06.png', 'images/animals/animal_06.png',
    'images/animals/animal_07.png', 'images/animals/animal_07.png',
    'images/animals/animal_08.png', 'images/animals/animal_08.png',
    'images/animals/animal_09.png', 'images/animals/animal_09.png',
    'images/animals/animal_10.png', 'images/animals/animal_10.png',
    'images/animals/animal_11.png', 'images/animals/animal_11.png',
    'images/animals/animal_12.png', 'images/animals/animal_12.png',
    'images/animals/animal_13.png', 'images/animals/animal_13.png',
    'images/animals/animal_14.png', 'images/animals/animal_14.png',
    'images/animals/animal_15.png', 'images/animals/animal_15.png'
];


//Nombre de colonnes et de lignes
let displayType = 3;
//Selection du mode de jeu (chien, animaux etc etc ) : la banque d'image
let imagesType = 3;
//Création du tableau
let tabCards = [];
let firstCard = null;
let secondCard = null;
// pour compter le nombre d'essaies
let tryCounter = 0;
//Compte le nombre de succes
let successCounter = 0;
//Permet d'afficher le memory en selectionnant l'élement qui a l'id "grid"
const gridElement = document.getElementById("grid");
//Element du dom permettant de selectionner la banque d'image
const bankSelectorElement = document.getElementById("pet-select");
//Initialisation du selecteur par imageType
bankSelectorElement.value = imagesType;
const nbCoupElement = document.getElementById("nbCoup");

bankSelection();

//Mélange aléatoire des cartes : Fisher-Yates
function shuffleCard() {
    for (let i = tabCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let valuei = tabCards[i];
        let valuej = tabCards[j];
        tabCards[i] = valuej;
        tabCards[j] = valuei;
    }
}


function buildGrid() {
    // reset des compteurs
    tryCounter = 0;
    successCounter = 0;
    nbCoupElement.innerHTML = '';

    // reset des index de cartes selectionnées
    firstCard = null;
    secondCard = null;

    //Choix de la grille 
    // switch (displayType) {
    //     case 0:
    //         gridElement.setAttribute("class", "row row-cols-3");
    //         break;
    //     case 1:
    //         gridElement.setAttribute("class", "row row-cols-4");
    //         break
    //     case 2:
    //         gridElement.setAttribute("class", "row row-cols-5");
    //         break
    //     case 3:
    //         gridElement.setAttribute("class", "row row-cols-6");
    //         break
    //     default:
    //         gridElement.setAttribute("class", "row row-cols-3");
    //         break;
    // }
    //choix de la banque d'image

    tabCards = [];
    switch (imagesType) {
        case 0:
            tabCards = chiens;
            break;
        case 1:
            tabCards = [].concat(monstres);//todo remove concat
            break;
        case 2:
            tabCards = [].concat(couleurs);
            break;
        case 3:
            tabCards = [].concat(animaux);
            break;
        default:
            tabCards = [].concat(chiens);
            break;
    }


    //Mélange des cartes du tableau
    shuffleCard();

    //Remplissage de la grille, parcour le tableau de cartes
    for (let i = 0; i < tabCards.length; i++) {
        //Création d'un élement html contenant l'image de la carte
        const cardElement = document.createElement("div");
        //Permet d'attribuer un id à une image, cet id est égale à l'index du tableau 
        cardElement.setAttribute("id", i);
        cardElement.setAttribute("class", "cellule");
        cardElement.style.backgroundImage = 'url("images/backSide.png")';
        cardElement.addEventListener("click", () => flipCard(i));
        //Cet element "cardElement" est ensuite ajouté à la grille
        gridElement.appendChild(cardElement);
    }
}
//Construction du jeu a l'ouverture de la page
buildGrid();

//Gere l'action d'un clic sur une carte (L'index correspond à l'Id et vis versa)
function flipCard(index) {
    console.log("clic on ", index);
    //On test si la carte n'est pas déjà retournée
    if (isClickable(index)) {
        //Detection d'un click sur la 1er carte 
        if (firstCard === null) {
            firstCard = index;
            //On récupère l'élement contenant l'image
            let imageCardElement = document.getElementById(index);
            //Modification de l'image lors du clic
            imageCardElement.style.backgroundImage = `url("${tabCards[index]}")`;
        } else {
            //La première carte est déjà retournée
            //Détection d'un click sur la 2eme
            if (secondCard === null && firstCard !== index) {
                secondCard = index;
                let imageCardElement = document.getElementById(index);
                //Modification de l'image lors du clic
                imageCardElement.style.backgroundImage = `url("${tabCards[index]}")`;
                tryCounter++;
                nbCoupElement.innerHTML = tryCounter;
                //Test l'égalité des cartes
                checkForMatch();
            }
        }
    }
}

//Fonction permet de tester si les deux cartes sont identiques ou non 
function checkForMatch() {
    //Récupération du nom des images à partir des index de la 1er et 2nd carte
    let firstCardValue = tabCards[firstCard];
    let secondCardValue = tabCards[secondCard];
    //On test l'égalité des cartes
    if (firstCardValue === secondCardValue) {
        console.log("Trouvé !", firstCardValue);
        successCounter++;
        //Reset des index précédent pour un nouvel essai
        firstCard = null;
        secondCard = null;
        if (successCounter === tabCards.length/2){
            victoire();
        }
    } else {
        console.log("Pas trouvé");
        setTimeout(hideCard, 1000);
    }

    console.log(successCounter);
    console.log(tryCounter);
}
//Retournement des cartes en cas d'erreur
function hideCard() {
    let firstImageCardElement = document.getElementById(firstCard);
    firstImageCardElement.style.backgroundImage = 'url("images/backSide.png")';
    let secondImageCardElement = document.getElementById(secondCard);
    secondImageCardElement.style.backgroundImage = 'url("images/backSide.png")';
    //Reset des index précédent pour un nouvel essai
    firstCard = null;
    secondCard = null;
}

//permet de savoir si la carte est déjà retournée et donc non cliquable 
function isClickable(index) {
    return document.getElementById(index).style.backgroundImage === 'url("images/backSide.png")';
}



function bankSelection() {
    //ON ajoute un écouteur d'évenement sur le selecteur de banque d'image
    bankSelectorElement.addEventListener("change", () => {
        console.log("Changé ! ", bankSelectorElement.value);
        //la value du selecteur est une string, alors on attends un entier dans le switch qui selectionne le set de carte.
        //Le + permet de transformer une chaine de caractére contenant un chiffre en number
        imagesType = +bankSelectorElement.value;
        //ON clear la grille d'élément avant de la reconstruire
        gridElement.textContent = "";
        buildGrid();
        console.log(tabCards);
    });
}

function victoire (){
    successCounter = (tabCards) / 2;
    console.log("Partie terminée");
    alert("Vous avez trouvé toute les paires en " + tryCounter + " coups");
}