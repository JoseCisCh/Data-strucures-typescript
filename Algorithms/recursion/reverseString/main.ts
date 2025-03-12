function reverseStringRecursive(str: string) {
    if(str.length == 0) {
        return str;
    }

    return reverseStringRecursive(str.substring(1, str.length)) + str.charAt(0);
}

console.log(reverseStringRecursive('hola soy jose'));