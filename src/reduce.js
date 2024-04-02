function reduce(arr, fn, initial) {
    // TU SOLUCIÓN AQUÍ
    if (arr.length === 0) {                      // caso base 
      return initial;
    }
    
    const elemento1 = arr.shift();// primer elemento
    
    
    //const calculo = fn(previousValue, currentValue, index, array);
    
   console.log(elemento1)
    
    //return calculo + reduce(arr, fn, initial)
    
  }
  
  reduce([1, 2, 3, 4, 5])