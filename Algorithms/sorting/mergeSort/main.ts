

function mergeSort(arr: number[], start: number, end: number) {
    console.log('Merge sort being called...');
    if(start<end) {
        let mid = start + Math.floor((end-start)/2);


        mergeSort(arr, start, mid);
        mergeSort(arr, mid+1, end);

        merge(arr, start, mid, end);
    }

}

function merge(arr: number[], start: number, mid: number, end: number) {

    let l = mid - start + 1
    let r = end-mid;
    let leftArr = Array(mid - start + 1);
    let rightArr = Array(end-mid);

    for(let i=0; i<l; i++) {
        leftArr[i] = arr[start+i];
    }

    for(let i=0; i<r; i++) {
        rightArr[i] = arr[mid+1+i];
    }

    let i = 0;
    let j = 0;
    let k = start;
    while(i < l && j < r) {
        if(leftArr[i] < rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
            k++;
        } else {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    while(i < l) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while(j < r) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }

}


let arr = [94,33,54,75,66,32,17,10,48,9,1,86,11];

mergeSort(arr, 0, arr.length-1);
console.log(arr);