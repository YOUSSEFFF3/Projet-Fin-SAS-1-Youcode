function annulation() {
    let Identifiant;
    let foundd = false;

    Identifiant = Number(
        prompt("Type the ID of your ticket pls")
    );

    for (let y = 0; y < tickets.length; y++) {

        if (Identifiant === tickets[y]["id"]) {

            foundd = true;

            // Trouver le trajet associé
            for (let x = 0; x < trips.length; x++) {

                if (trips[x]["id"] === tickets[y]["id"]) {

                    // Augmenter les places disponibles
                    trips[x]["availableSeats"]++;

                    break;
                }
            }

            // Afficher l'identifiant avant de supprimer le ticket
            console.log("\nIdentifiant du ticket : " + tickets[y]["id"]);

            // Supprimer le ticket
            tickets.splice(y, 1);

            console.log("\nTicket annulé avec succès.");

            break;
        }
    }

    // Vérifier après avoir parcouru TOUS les tickets
    if (foundd === false) {
        console.log("Ticket introuvable.");
    }
}