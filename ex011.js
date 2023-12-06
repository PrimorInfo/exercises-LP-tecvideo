function catAndMouse(x, y, z){
    let catA = x;
    let catB = y;
    let rat = z;
    if((Math.abs(rat-catA)) < (Math.abs(rat - catB))){
        return 'Cat A';
    }else if((Mth.asbs(rat -catA)) === (Math.abs(rat - catB))){
        return 'Mouse C';
    }else{
        return "Cat B";
    }
}
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));