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

  getInteret() {
    return this.#interet;
  }

  getHistoriqueOperations() {
    return this.#historiqueOperations;
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
    this.#solde += this.getSolde() * this.getInteret();
  }

  afficherHistorique() {
    console.log(this.getHistoriqueOperations());
  }

  afficherSolde() {
    console.log(`Votre solde est de : ${this.#solde} euros.`);
  }
}
