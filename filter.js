function filter() {
    let ville;
    let foound=false
    console.log("Ville de départ : "+ville +"\n\n\n");  
    for (let t = 0; t < trips.length; t++) {
        if (trips[t]["departure"]===ville) {
            foound=true
            console.log(ville+" --> "+trips[t]["destination"]);
        }
    }    
    if (foound===false) {
        console.log("§§§§ ville intruvable dans les ville de depart§§§§");
    }
}
        
           
        
            
            
        
   