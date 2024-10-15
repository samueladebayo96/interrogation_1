export default class Account {
  #solde;
  #interet;
  #historiqueOperations = [];
  constructor(solde) {
    this.#solde = solde;
    this.#interet = 0.03;
  }
  getSolde() {
    return this.#solde;
  }
  setSolde(newSolde) {
    this.#solde = newSolde;
  }

  deposit(montant) {
    this.#solde += montant;
    this.#historiqueOperations.push("Dépôt de " + montant + " euros.");
  }

  withdraw(montant) {
    if (this.#solde >= montant) {
      this.#solde -= montant;
      this.#historiqueOperations.push("Retrait de " + montant + " euros.");
    }
  }

  addInteret() {
    this.#solde += this.#solde * this.#interet;
  }

  getInteret() {
    return this.#interet;
  }
  afficherHistorique() {
    console.log(this.#historiqueOperations);
  }
  afficherSolde() {
    console.log(`Votre solde est de : ${this.#solde} euros.`);
  }
}
