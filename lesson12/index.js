function xisobla(stop){
    let ty = 0
    let jy = 0
    for(let a = 1; a <= stop; a++){
        if(a % 2 === 1) ty += a
        else jy += a
    }
    console.log(jy - ty);
}

xisobla(30)
xisobla(20)
xisobla(10)