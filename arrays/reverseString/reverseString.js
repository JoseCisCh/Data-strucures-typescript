function reverse(str){
    let reversedString="";
    let reversedArray = [];

    if(!str || typeof str !== 'string') {
        return "";
    }

    if(str.length < 2) {
        return str;
    }

    for(let i=str.length-1, j=0; i>= 0; i--, j++) {
        reversedString += str[i];
        reversedArray.push(str[i]);
    }

    return reversedArray.join('');
}

console.log(reverse("Hello there"));
console.log(reverse("H"));