let str="This is a String"

let str1='This is a single '

let st2="this is a  string"

let str3='i don\'t come'

let s1="Hello "
let s2="World"

let concat=s1+s2
console.log(concat)
console.log(concat.length)
console.log(concat[concat.length-1])

let s3='133' //number
let s4="hello" //string

let concat2=s3+s4
console.log(concat2)


let num1=123
let num2='5'

let sum=num1+num2
let output=num1-num2

console.log( output)

let num3='123.5A'
let num4='110.5A'

// let output2=Number(num3)+Number(num4) // output--NaN (Not a number)
// let output2=eval(num3)+eval(num4) //output -- 233
let output2=parseFloat(num3)+parseFloat(num4) // output -- 234
console.log(output2)


let num5='3'
let num6='2'

let output3=num5/num6 
console.log( output3) //1.5
console.log(typeof output3) //number

let num7='String'
let num8=2

let output4=num7/num8
console.log(typeof output4) //number
console.log(output4)  //output--NaN (Not a number)

