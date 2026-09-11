let tickets=[
  {
    tripId: 1,
    departure: 'Safi',
    destination: 'Youssoufia',
    departureTime: '07:30',
    arrivalTime: '08:30',
    price: 25,
    seat: 1,
    name: 'mop',
    id: 1
  },
  {
    tripId: 1,
    departure: 'Safi',
    destination: 'Youssoufia',
    departureTime: '07:30',
    arrivalTime: '08:30',
    price: 25,
    seat: 2,
    name: 'mlk',
    id: 2
  },
  {
    tripId: 1,
    departure: 'Safi',
    destination: 'Youssoufia',
    departureTime: '07:30',
    arrivalTime: '08:30',
    price: 25,
    seat: 3,
    name: 'oit',
    id: 3
  },
  {
    tripId: 5,
    departure: 'Youssoufia',
    destination: 'Casablanca',
    departureTime: '10:00',
    arrivalTime: '13:30',
    price: 110,
    seat: 1,
    name: 'mpi',
    id: 4
  }
]
function Trajetleplusvendu() {
let conter=[]
let ville={}
let somee=0
let maxsome=0
for (let i = 0; i < tickets.length; i++) {
   for (let j = 0; j < tickets.length; j++) {
    if (conter.includes(tickets[i].tripId)) {
        break   
    }
    if (tickets[i].tripId===tickets[j].tripId) {
        somee++
    }}
    if (somee>maxsome) {
    maxsome=somee
    ville.departure=tickets[i].departure
    ville.destination=tickets[i].destination
   }
   somee=0
    if (!conter.includes(tickets[i].tripId)) {
        conter.push(tickets[i].tripId)  
    }
}
console.log("\n\nTrajet le plus vendu :\n\n");
console.log(ville.departure+" --> "+ville.destination);
console.log(maxsome+" tickets vendus");
}
Trajetleplusvendu()