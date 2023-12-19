//la  fonction produitPoint prend deux vecteurs en entrée, vérifie s'ils ont la même longueur, puis calcule le produit de points à l'aide d'une boucle for pour itérer sur les composantes des deux vecteurs. Le résultat est la somme des produits de chaque paire de composantes.

function produitPoint(vecteur1, vecteur2) {
    // Assurez-vous que les deux vecteurs ont la même longueur
    if (vecteur1.length !== vecteur2.length) {
        throw new Error("Les vecteurs doivent avoir la même longueur");
    }

    // Calcul du produit de points
    let produit = 0;
    for (let i = 0; i < vecteur1.length; i++) {
        produit += vecteur1[i] * vecteur2[i];
    }

    return produit;
}

// Exemple d'utilisation
let vecteur1 = [1, 2, 3];
let vecteur2 = [4, 5, 6];

let resultat = produitPoint(vecteur1, vecteur2);
console.log(`Le produit de points des vecteurs [${vecteur1}] et [${vecteur2}] est : ${resultat}`);

//Cette fonction utilise la même logique que la fonction précédente pour calculer le produit de points, puis vérifie si le résultat est égal à zéro. Si c'est le cas, les tabs sont considérés comme orthogonaux.

function sontOrthogonaux(tab1, tab2) {
    // Assurez-vous que les deux tabs ont la même longueur
    if (tab1.length !== tab2.length) {
        throw new Error("Les tabs doivent avoir la même longueur");
    }

    // Calcul du produit de points
    let produit = 0;
    for (let i = 0; i < tab1.length; i++) {
        produit += tab1[i] * tab2[i];
    }

    // Les tab sont orthogonaux si leur produit de points est égal à zéro
    return produit === 0;
}

// Exemple d'utilisation
let tab1 = [1, 2, 3];
let tab2 = [-1, 0, 1];

let sontOrthogonauxResultat = sontOrthogonaux(tab1, tab2);
console.log(`Les tabs [${tab1}] et [${tab2}] sont orthogonaux : ${sontOrthogonauxResultat}`);

//Cette fonction insertionSort prend un tableau en entrée et trie ses éléments en utilisant l'algorithme de tri par insertion. L'idée principale de cet algorithme est de construire le tableau trié élément par élément. À chaque itération, l'algorithme prend un élément non trié, le compare avec les éléments triés et le place à sa position correcte.

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Déplace les éléments du tableau qui sont plus grands que l'élément courant vers la droite
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place l'élément courant à sa position correcte dans le tableau trié
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Exemple d'utilisation
let arr = [5, 2, 4, 1, 3];
let sortedArr = insertionSort(arr);
console.log("Tableau trié par insertion : ", sortedArr);

//Dans l'exemple d'utilisation, le tableau [5, 2, 4, 1, 3] est trié à l'aide de la fonction insertionSort, et le tableau trié est affiché dans la console.

