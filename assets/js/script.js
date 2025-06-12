let mot = "asaibfcyazfvfzyuivfvuizze"
let lettres = []
let lettresCaché = []
let etat = []
let devine = "dbiazbduaizbdaiuzbdazbidu"
let essaie


// LE BONJOUR
alert("Bienvenue dans le pendu !")
alert("Le jeu se joue à deux joueurs, le joueur 1 fait deviner son mot au joueur 2 !")
alert("Joueur 1: Appuie sur ok si tu es prêt !")

mot = prompt("Rentrez le mot que vous voulez faire deviner...")
while (mot == "") {
    mot = prompt("Rentrez le mot que vous voulez faire deviner...")
}
mot = mot.toUpperCase()

// RANGE LES LETTRES DANS UNE LISTE AINSI QUE LES ETATS
for (let i = 0; i < mot.length; i++) {
    lettres.push(mot[i])
    lettresCaché.push("__ ")
    etat.push(0)
}



// NOMBRE D'ESSAI
essaie = +prompt("Rentrer le nombre d'essai du joeuur 2 (supérieur au nombre de lettre de votre mot OBLIGATOIRE)")

while (isNaN(essaie) || essaie <= mot.length) {
    essaie = +prompt("Rentrer un NOMBRE SUPERIEUR au nombres de lettres de votre mot")
}





// ESSAIE DU JOUEUR 2
alert("Joueur 2, c'est à vous !")
alert("La console vous donne vos lettres rentrez précédemment")

let nb0Etat = etat.filter(item => item === 0).length   //Regarde si etat possède un 0
while (devine != mot && essaie !== 0 && nb0Etat !== 0 || devine === "" && essaie !== 0) {
    alert(`le mot du joueur 1 est ${lettresCaché}\nTu as ${essaie} essaie`)
    devine = prompt("Devine une lettre ou le mot")
    devine = devine.toUpperCase()
    console.log(devine)
    for (let i = 0; i < mot.length; i++) {
        if (lettres[i].includes(devine) && devine !== "") {
            lettresCaché[i] = lettres[i]
            etat[i] = 1
        }
    }
    essaie--
    nb0Etat = etat.filter(item => item === 0).length //Regarde si etat possède un 0
}




// MESSAGE VICTOIRE OU DEFAITE
if (devine == mot && devine !== "" || nb0Etat == 0) {
    alert(`Felicitation tu as gagné ! Le mot était ${mot}`)
} else {
    alert(`Dommage ! Tu as perdu ! Le mot était ${mot}`)
}


// REFAIRE UNE PARTIE ?
if (window.confirm("Voulez vous refaire une partie ?")) {
    window.location.reload(true);
} else {
    alert("Au revoir")
}