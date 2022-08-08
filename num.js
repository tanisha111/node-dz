import colors from 'colors'
function isPrime(num) {
    
    
    for (let i=2; i < num; i++) {
        if (num%i === 0) {
            return 'false';
            
        }
       
    }   
    return num >1;
}
function getPrimes(num) {
    let g = 1
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            if (g == 1) {       
    console.log(colors.green(i))
     }
          
        if (g == 2) {
    console.log(colors.yellow(i))
     }
    
        if (g == 3) {
    console.log(colors.red(i))
        g=0
  }
  g++
        } 
    }
}
getPrimes(178);