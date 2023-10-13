/*
//////////////////////////////////
for (initialization; testing condition; increment/decrement) {
    statement(s)
}
/////////////////

initialization;

while(testing condition){
     statement(s)
    increment/decrement
}
//////////////////////////

do {
    Statements..
}
while (condition);

*/

// while loop ----> Entry Control Loop

let i=0;
while(i<=100){
    if(i%2!=0){
        console.log("Odd Number : ",i)
    }

    i++;
}

// do while loop  ---> Exit Control Loop
let j=0;
do{
    
    if(j%2==0){
        console.log("Even Number : ",j)
    }
    j++;    
}
while(j<=100)

// Infinite Loop
let Infinite =1;
while(true){
    if(Infinite ==10) break
    console.log(Infinite )
    Infinite ++
}

// Task 

// write a function to check prime number  //true and false
// write a function to print 0 to 1000 prime number  // 1,3,5,7,11,13,17,19,23,29,31,37...
// write a function to print first 10 prime number

function checkPrime(n){
    
}

