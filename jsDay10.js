let str='Hello World! '
let str1='I love cats. Cats are very easy to love. Cats are very popular.'
let str2='12345'
let str3='5'
// H e l l o   w o r l d
// 0 1 2 3 4 5 6 7 8 9 10
console.log(str)
console.log("String length : ",str.length);
console.log("String slice() : ",str.slice(0,5)); //slice(start, end)
console.log("String substring() : ",str.substring(0,7)); //substring(start, end)
console.log("String substr() : ",str.substr(0,5)); //substr(start, length)
console.log("String replace() : ",str.replace('World','my world')); //replace(old text, new text)
console.log("String replace() : ",str.replace('Hello World','Sumit')); //replace(old text, new text)
console.log("String replace() : ",str1.replaceAll('cats','dogs').replaceAll('Cats','Dogs')); //replaceAll(old text, new text)
console.log("String replace() : ",str1.replaceAll('Cats','Dogs')); //replaceAll(old text, new text)
console.log("String toUpperCase() : ",str1.toUpperCase()); //toUpperCase()
console.log("String toLowerCase() : ",str1.toLowerCase()); //toLowerCase()
console.log(str.concat(str1,str2)); // var.concat(var1,var2,...)
console.log(str3.padStart(3,"0")); // var.padStart(num,"str")
console.log(str3.padEnd(3,"0")); // var.padEnd(num,"str")

