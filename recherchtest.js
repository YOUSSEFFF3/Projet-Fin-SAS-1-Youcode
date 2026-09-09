function recherch() {
    let yourname ;
    let founnd=false 
    yourname= prompt("Type your name  pls : ")
      for (let u = 0; u < tickets.length; u++) {
        if (tickets[u]["name"]=== yourname ) {
            founnd=true
            console.log("\nNom du passager :"+yourname);
            console.log("\n\n");
            console.log("Ticket # "+tickets[u]["id"]);
            console.log("Passager : "+yourname);
            console.log("Trajet : "+tickets[u]["departure"]+" --> "+tickets[u]["destination"]);
            console.log("Place : " +tickets[u]["seat"]);
            console.log("Prix : "+tickets[u]["price"]);                   
            
        }
        
      }
      // Vérifier après avoir parcouru TOUS les tickets
    if (founnd === false) {
        console.log("name introuvable.");
    }
}
