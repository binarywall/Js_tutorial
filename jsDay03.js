function condition(n){
    if(n==0){
        console.log('Zero');
    }else if(n>0){
        console.log('Positive');
    }else{
        console.log('Negative')
    }
}


condition(-12); //negative
condition(12); //positive
condition(0); //Zero

//write a function the given no is even or not

function isEven(n){
    if(n%2==0){
        console.log("Even")
    }else{
        console.log("Not Even");
    }
}

isEven(12) //even
isEven(13) //Not Even

//write a function the given no is odd or not

function isOdd(n){
    if(n%2!=0){
        console.log("Odd")
    }else{
        console.log("Not Odd");
    }
}

isOdd(13) //Odd
isOdd(12) //Not Odd 

/*
    Write a function to check if a given year is a leap year or not.

    Write a function which take day, month, year. as a parameter and print next date
*/