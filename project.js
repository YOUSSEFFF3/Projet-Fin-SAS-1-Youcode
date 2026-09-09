
var prompt = require('prompt-sync')({sigint: true});

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
    //le tableau de TRAJET  de train
function trajets() {
    for (let i = 0; i < trips.length; i++) {
        console.log("#"+trips[i]["id"]+" "+trips[i]["departure"]+" -----→  "+trips[i]["destination"]);
        console.log("Depart :"+trips[i]["departureTime"]);
        console.log("Arrivee :"+trips[i]["arrivalTime"]);
        console.log("Prix :"+trips[i]["price"]+" DH");
        console.log("Places disponibles :"+trips[i]["availableSeats"]);
        console.log("   ");
        console.log("   ");
    }
    return
}

function isAlpha(value) {
    let alpha = /^[a-zA-Z ]+$/;
    return alpha.test(value);
}

const tickets = [];

function clients() {
    let client = {};
    let found = false;

    do {
        client.id = Number(
            prompt("Type the ID of your destination please: ")
        );

        for (let j = 0; j < trips.length; j++) {

            if (trips[j].id === client.id) {

                found = true;

                if (trips[j].availableSeats <= 0) {
                    console.log("Train complet.");
                    found = false;
                    break;
                }

                console.log("Trajet trouvé !");

                client.trip = {
                    id: trips[j].id,
                    departure: trips[j].departure,
                    destination: trips[j].destination,
                    departureTime: trips[j].departureTime,
                    arrivalTime: trips[j].arrivalTime,
                    price: trips[j].price
                };

                client.seat = 51 - trips[j].availableSeats;

                trips[j].availableSeats--;

                break;
            }
        }

        if (!found) {
            console.log(
                "Trajet introuvable\n§§§§ PLS TRY AGAIN §§§§"
            );
        }

    } while (!found);


    do {
        client.name = prompt("Type your full name please: ");

        if (!isAlpha(client.name)) {
            console.log("Votre réponse n'était pas acceptable");
        }

    } while (!isAlpha(client.name));


    // Create the ticket
    let ticket = {
        id: client.id,
        name: client.name,
        departure: client.trip.departure,
        destination: client.trip.destination,
        seat: client.seat,
        price: client.trip.price
    };

    // Add ticket to tickets array
    tickets.push(ticket);


    // Display ticket
    console.log("\nTicket acheté avec succès.\n");
    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.name);
    console.log(
        "Trajet : " +
        ticket.departure +
        " -----> " +
        ticket.destination
    );
    console.log("Place : " + ticket.seat);
    console.log("Prix : " + ticket.price + " DH");
    console.log();
}
function afficher() {
    for (let e = 0; e < tickets.length; e++) {
        console.log("Ticket # "+tickets[e].id); 
        console.log("Passager :  "+tickets[e].name);
        console.log("Trajet : "+tickets[e].departure+" --> "+tickets[e].destination); 
        console.log("Place : "+tickets[e].seat);
        console.log("Prix : "+tickets[e].price+" DH \n ");
    } 
}
function annulation() {
    let Identifiant;
    let foundd = false;

    Identifiant = Number(
        prompt("Type the ID of your ticket pls : ")
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
function recherch() {
    let yourname= prompt("Type your name  pls : ")
    let founnd=false 
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
      // Vérifier 
    if (founnd === false) {
        console.log("name introuvable.");
    }
}
function filter() {
    let ville=(prompt("Tapez la ville de depart : "))
    let foound=false
    console.log("Ville de départ : " + ville + "\n\n\n");  
    for (let t = 0; t < trips.length; t++) {
        if (trips[t]["departure"] === ville) {
            foound=true
            console.log( ville+ " --> " + trips[t]["destination"] );
        }
    }
    if (foound===false) {
        console.log("§§§§ ville intruvable dans les ville de depart§§§§");
           
    }    
            
}
function main() {
    let n;
    do { // PAGE PRINSIPALE
        console.log("===============================");
        console.log("       RAILWAY MANAGER      ");
        console.log("===============================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8. Quitter");
        // Le choix de client
        n = Number(prompt("Tapez un choix (1-8)"))
        switch (n) {
            case 1://les trajets
            console.log("=== TRAJETS DISPONIBLES ===");
            trajets()
            break
            case 2:// la chat
                console.log("    ===================      ");
                console.log("      Acheter un ticket      ");
                console.log("    ====================     ");
                clients()
                console.log("voici le ticket ");
                console.log(tickets);
                break;

            case 3:// affichage du tikcet 
                console.log("  \n\n  === TICKETS ===   \n\n   ");
                afficher()
                break;

            case 4:
                console.log("  \n\n  === annulation ===   \n\n   ");
                annulation()
                break;
            case 5:
                console.log("  \n\n  === recherche ===   \n\n   ");
                recherch()
                break;
             case 6:
                filter()
                break;
               
             case 7:
                
                break;
            case 8: break;
        
            default:
                console.log("Votre reposne n'etait pas acceptable, Svp donne moi une valeur entre 1 et 8");
                break;
        }
    } while (n!=8)
}
main()

    
