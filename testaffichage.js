function afficher() {
    for (let e = 0; e < tickets.length; e++) {
        console.log("Ticket # "+tickets[e].id); 
        console.log("Passager :  "+tickets[e].name);
        console.log("Trajet : "+tickets[e].departure+" --> "+tickets[e].destination); 
        console.log("Place : "+tickets[e].seat);
        console.log("Prix : "+tickets[e].price+" DH ");
    } 
}

