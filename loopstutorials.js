
//for(let i=12; i<20; i++) {
  //  console.log('number is' + '',i)
//}

 /*let i=0
while (i<20) {
  console.log('number is',"",i)
  i++  
}
*/

/*et x = 68
if(x>=70 && x<=100) {
    console.log('Distinction')
}
else if(x>=60 && x<=69){ 
    console.log('Very good')
}
else if (x>=50 && x<=59) {
    console.log('Great')
}
else if(x>=40 && x<=49){
    console.log('Good')
}
else if(x>=30 && x<=39){
    console.log('Pass')
}
else if(x>=0 && x<=29){
    console.log('Fail')
}
*/

/*for ( i= 2; i<=20; i += 2){
    console.log(i);
}

let someWords = 'Kamal' 
console.log(someWords.split(""))

let subArray = ["a","b","c","d","e","f"]
console.log(subArray.reverse());
*/
let s='Kamal'
function stringToArray(s){
 return str.split("").reverse().join("")
}

function isPalindrome(str){
    let newString= str.split("").reverse().join("")
    if(str===newString){
        return true
    }
    else{
        return false 
    }

}

console.log(isPalindrome('hello'))
console.log("##########")

function intPalindrome(n) {
    let nstr = String(n);
    
    nstr=nstr.split("").reverse().join("");
    nstr= Number(nstr) 
    if(nstr === n){
        return true
    }else{
        return false 
    }
    
}
console.log(intPalindrome(351))