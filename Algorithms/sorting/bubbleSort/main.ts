let arr = [12,45,33,22,56,1,8,3,55,32];

for(let i = 0; i< arr.length; i++) {
    let swap = false;
    for(let j=0; j<arr.length-i-1; j++) {
        if(arr[j+1] < arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swap = true;
        }

    }
    if(!swap) break;
}

console.log(arr);