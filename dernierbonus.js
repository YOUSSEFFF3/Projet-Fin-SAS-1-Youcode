function Trajetleplusvendu() {
let conter=[]
let ville={}
let somee=0
let maxsome=0
for (let i = 0; i < tickets.length; i++) {
   for (let j = 0; j < tickets.length; j++) {
    if (conter.includes(tickets[i].id)) {
        break   
    }
    if (tickets[i].id===tickets[j].id) {
        somee++
    }
    if (somee>maxsome) {
    maxsome=somee
    ville.departure=tickets[i].departure
    ville.destination=tickets[i].destination
   }}
   somee=0
    if (!conter.includes(tickets[i].id)) {
        conter.push(tickets[i].id)  
    }
}
console.log("\n\nTrajet le plus vendu :\n\n");
console.log(ville.departure+" --> "+ville.destination);
console.log(maxsome+" tickets vendus");
}