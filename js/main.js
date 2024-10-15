import PrivateAccount from "./PrivateAccount.js";

const account = new PrivateAccount(1000);

account.deposit(200);
account.withdraw(150);
account.withdraw(150);
account.withdraw(150);
account.addInteret();
account.afficherHistorique();
account.afficherSolde();