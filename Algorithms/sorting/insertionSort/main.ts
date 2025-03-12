var arr = [12, 45, 33, 22, 56, 1, 8, 3, 55, 32];

function insertionSort(arr: number[]) {
    for(let i=1; i<arr.length; i++) {
        let j=i;
        let currentNum = arr[j];
        while(currentNum < arr[j-1] && j > 0) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = currentNum;
    }
    return arr;
}

function insertionSortSmallDetails(arr: number[]) {
    for(let i=1; i<arr.length; i++) {
        let j=i-1;
        let currentNum = arr[i];
        while(currentNum < arr[j] && j >= 0) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentNum;
    }
    return arr;
}

console.log(insertionSort(arr));
console.log(insertionSortSmallDetails(arr));