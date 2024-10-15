class Account {
    #solde;
    #interet;
    #historiqueOperations = [];
    constructor(solde, interet) {
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
        historiqueOperations.push("Dépôt de " + montant + " euros.");
    }

    withdraw(montant) {
        this.#solde -= montant;
        historiqueOperations.push("Retrait de " + montant + " euros.");
    }

    addInteret() {
        this.#solde *= this.#interet;
    }

    getInteret() {
        return this.#interet;
    }
}