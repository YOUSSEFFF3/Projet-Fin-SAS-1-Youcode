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
let client = {};

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
    console.log("Ticket acheté avec succès.\n");
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

clients();
