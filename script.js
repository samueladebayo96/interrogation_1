const tauxInteret = 0.03;

let solde = 1000;
let depot = 200;
let retrait = 150;

let historiqueOperations = [];


solde += depot;
console.log(`Vous avez déposé ${depot} euros. Nouveau solde : ${solde} euros.`);

historiqueOperations.push("Dépôt de " + depot + " euros.");

if(solde >= retrait) {
    solde -= retrait;
    console.log(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde} euros.`);

    historiqueOperations.push("Retrait de " + retrait + " euros.");
}
else {
    console.log(`Solde insuffisant pour effectuer ce retrait.`);
}

solde *= tauxInteret;
console.log(`Intérêts annuels de ${tauxInteret * 100}% ajoutés. Nouveau solde : ${solde} euros.`);

let NouveauDepot = 500;
solde += NouveauDepot;
console.log(`Vous avez déposé ${NouveauDepot} euros. Nouveau solde : ${solde} euros.`);

historiqueOperations.push("Dépôt de " + NouveauDepot + " euros.");

let NouveauRetrait = 800;
if(solde >= NouveauRetrait) {
    solde -= NouveauRetrait;
    console.log(`Vous avez retiré ${NouveauRetrait} euros. Nouveau solde : ${solde} euros.`);

    historiqueOperations.push("Retrait de " + NouveauRetrait + " euros.");
}
else {
    console.log(`Solde insuffisant pour effectuer ce retrait.`);
}

solde *= tauxInteret;
console.log(`Intérêts annuels de ${tauxInteret * 100}% ajoutés. Nouveau solde : ${solde} euros.`);

console.log(historiqueOperations);
