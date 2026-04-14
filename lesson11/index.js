// let toqy = 0
// let jufty = 0
// let a = 1
// while(a <= 20) {
//     if (a % 2 === 1) toqy += a
//     else jufty += a
//     a++
// }
// console.log(toqy);
// console.log(jufty);

// let toqy1 = 0
// let jufty1 = 0
// let b = 1
// do {
//     if (b % 2 === 1) toqy1 += b
//     else jufty1 += b
//     b++
// }while(b <= 20)
// console.log(toqy1);
// console.log(jufty1);

// let count = 0
// let a = 1
// while(a <= 20) {
//     if (a % 3 === 0) count++
//     a++
// }
// console.log(count);

// let count1 = 0
// let b = 1
// do {
//     if (b % 3 === 0) count1++
//     b++
// }while(b <= 20) 
// console.log(count1);

// let a = 30
// let yigindi = 0
// do {
//     if (a % 3 === 0 || a % 5 === 0) 
//     yigindi+= a
//     a--
// } while (a >= 1)
// console.log(yigindi);

// let yigindi1 = 0
// for (let b = 30; b >= 1; b--){
//     if (b % 3 === 0 || b % 5 === 0) yigindi1 += b
// }
// console.log(yigindi1);


// let a = 1
// let kupaytma = 1
// while(a <= 100){
//     if (a % 5 === 0 && a % 7 === 0) kupaytma *= a
//     a++
// }
// console.log(kupaytma);

// let kupaytma1 = 1
// for (let b = 1; b <= 100; b++){
//     if (b % 5 === 0 && b % 7 === 0) kupaytma1 *= b
// }
// console.log(kupaytma1);

// let toqy1 = 0
// let jufty1 = 0
// let a = 1
// while(a <= 50){
//     if (a % 2 === 1) toqy1 += a
//     else jufty1 += a
//     a++ 
// }
// let result = jufty1 - toqy1
// if (result % 2 === 1) console.log(result, "Bu Toq son");
// else console.log(result, "Bu Juft son");

// let toqy2 = 0
// let jufty2 = 0
// let b = 1
// do {
//     if (b % 2 === 1) toqy2 += b
//     else jufty2 += b
//     b++ 
// }while(b <= 50)

// let result1 = jufty2 - toqy2
// if (result1 % 2 === 1) console.log(result1, "Bu Toq son");
// else console.log(result1, "Bu Juft son");

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     if (i === 7) break
// }

let a = 1
while(true){
    if (a % 5 === 0 && a % 7 === 0) break
        a++ 
}
console.log(a);

let b = 1
do {
    if (b % 5 === 0 && b % 7 === 0) break
        b++ 
}while(true)
console.log(b);











