function chifferdaffaires() {
    let somme = 0;
    for (let i = 0; i < tickets.length; i++) {
        somme+=tickets[i].price
    }
  console.log("Chiffre d'affaires total : "+somme);   
}