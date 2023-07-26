function reverseString(string){
    let reverse_string=string.split('').reverse().join('');
    return reverse_string;
}

const input="Hello, World";

setTimeout(function(){
    console.log("Reversed String:",reverseString(input))
},2000)