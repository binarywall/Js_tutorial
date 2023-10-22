function check(n){
    let text=''
    if(n==1) text='Jan';
    else if(n==2) text='feb';
    else if(n==3) text='Mar';
    else if(n==4) text='Apr';
    else if(n==5) text='May';
    else if(n==6) text='Jun';
    else if(n==7) text='Jul';
    else if(n==8) text='Aug';
    else if(n==9) text='Sep';
    else if(n==10) text='Oct';
    else if(n==11) text='Nov';
    else if(n==12) text='Dec';
    else text='wrong input'

    console.log(text)
}

// check(1)
// check(3)
// check(21)
// check(12)

//write a function count numbers of length

let num=12345

function count(num){
    let counter=0;
    for(let i=num;i>0;i=Math.floor(i/10)){
       counter++
    }
    console.log(counter)
}
// count(num)

function reverse(num){
    let reverse=0;
    for(let i=num;i>0;i=Math.trunc(i/10)){
        let r=(i%10)
        reverse=reverse*10+r
    }
     console.log(reverse)
}
reverse(num)

console.log(Math.floor(123.4))
console.log(Math.ceil(123.8))
console.log(Math.trunc(123.8))