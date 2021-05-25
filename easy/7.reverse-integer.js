var reverse = function(x) {
    let rev = 0;
    let signo = '+';
    (x >= 0) ? signo = '+' : signo = '-';
    let aux = Math.abs(x); 
    while( aux > 0){
        let por = aux % 10;
        aux = Math.floor(aux / 10);
        rev =  rev * 10 + por
    }
    if( rev < Math.pow(-2, 31) && rev > (Math.pow(2, 31) - 1) ){
      return 0;
    }
    (x >= 0) ? rev = rev * 1 : rev = rev * -1;
    return rev;
};

module.exports = reverse;