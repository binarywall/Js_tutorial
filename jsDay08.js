//Array 
//     0 1 2 3 4 5 6 7 8 9
let n=[1,2,3,4,5,6,7,8,9,10]
// console.log(n.length)

for(let i=0;i<10;i++){
    // console.log(n[i])
}
// Declare an Array with the Array Constructor

let ar=new Array()
// console.log(Array.isArray(ar))
console.log(ar);

let ar1=new Array(1,2,3,4,5)
// console.log(Array.isArray(ar1))
console.log(ar1);


// for(let i=0;i<ar1.length;i++){
//     console.log(ar1[i])
// }

ar1[10]=100
console.log(ar1.length);
// console.log(ar1[0]); // 1
// console.log(ar1[1]); // 2
// console.log(ar1[2]); // 3
// console.log(ar1[3]); // 4
// console.log(ar1[4]); // 5
// console.log(ar1[10]); // undefined