// import des créatures depuis le fichier creatures.js
import { creatures } from "./creatures.js";

// Recuperation des éléments du DOM

const Prenom = document.getElementById("prenom");
const Nom = document.getElementById("nom");
const formulaire = document.getElementById("formulaire");
const creatureList = document.getElementById("creature");
/* const btnInvoquer = document.getElementById("btn-invoquer");
const btnInvocAl = document.getElementById("btn-invoc-al"); */
const invocation = document.getElementById("invocation-section");
const nomCreature = document.getElementById("creature-name");
const imgCreature = document.getElementById("creature-image");
const creatureDescription = document.getElementById("creature-description");
const creatureMsg = document.getElementById("creature-msg");
const btnRetour = document.getElementById("btn-retour");

// Fonction pour afficher la liste des créatures
function displayCreatures() {
    creatures.forEach(creature => {
        const listItem = document.createElement("option");
        listItem.value = creature.name;
        listItem.textContent = creature.name;
        creatureList.appendChild(listItem);
    })
}

// Fonction du déclenchement de l'événement du bouton "Invoquer"
function invokeCreature() {
    formulaire.addEventListener("submit", (event) => {
        event.preventDefault();
        formulaire.classList.add("cache");
        invocation.classList.remove("cache");
        const btnInvoquer = event.submitter;
        const btnInvocAl = event.submitter;

        if (btnInvoquer.id === "btn-invoquer") {
            creatures.forEach(creature => {
                if (creature.name === creatureList.value) {
                    nomCreature.textContent = creature.name;
                    imgCreature.src = creature.image;
                    creatureDescription.textContent = creature.description;
                    creatureMsg.textContent = `Bienvenue ${Prenom.value} ${Nom.value}, vous avez invoqué un(e) ${creature.name} !`;
                }
            });
        } else if (btnInvocAl.id === "btn-invoc-al") {
            const randomIndex = Math.floor(Math.random() * creatures.length);
            const randomCreature = creatures[randomIndex];
            nomCreature.textContent = randomCreature.name;
            imgCreature.src = randomCreature.image;
            creatureDescription.textContent = randomCreature.description;
            creatureMsg.textContent = `Bienvenue ${Prenom.value} ${Nom.value}, vous avez invoqué un(e) ${randomCreature.name} !`;

        }
    })
    btnRetour.addEventListener("click", () => {
        invocation.classList.add("cache");
        formulaire.classList.remove("cache");
        formulaire.reset();
    });
}

displayCreatures();
invokeCreature();