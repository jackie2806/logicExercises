function fibonacci(n){
    if (n <= 1){
        return n
    } else {
        return (fibonacci(n-1)+fibonacci(n-2))
    }
}
//fibonacci(3)

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))