function trier() {
    let croissant= trips
    for (let i= 0; i < croissant.length; i++) {
        for (let j = 0; j < croissant.length-1; j++) {
            if (croissant[j].price>croissant[j+1].price) {
                let w = croissant[j].price 
                croissant[j].price = croissant[j+1].price
                croissant[j+1].price = w
            }
            
        }
    }for (let e = 0; e < croissant.length; e++) {
        console.log(croissant[e].destination+
            " --> "+croissant[e].destination+" : "+
        croissant[e].price+" DH");
        
        
    } 
}