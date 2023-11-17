// let text="hello world"

// document.getElementById("para").innerHTML=text;

// document.getElementsByClassName("byclass")[0].innerHTML=text;

// document.getElementsByTagName('p')[2].innerHTML='This is a tag'



const sum=()=>{
    
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let sum=Number(num1)+Number(num2)
    console.log(`num1 : ${num1}   || num2 : ${num2} = ${sum}`)
    document.getElementsByTagName('h4')[0].innerHTML="Sum="+sum
}
