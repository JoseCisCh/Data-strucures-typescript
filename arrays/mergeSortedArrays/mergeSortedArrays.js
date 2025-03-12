
function merge(arr1, arr2) {

    let mergedArray = [];

    if((arr1 == null || !Array.isArray(arr1)) || (arr2 == null || Array.isArray(arr2))) {
        console.log('Both arrays must be included');
    }

    let i = 0;
    let j=0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i< arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const arr1 = [1,5,33,44, 55];
const arr2 = [2,31,40,50, 68];

console.log(merge(arr1, arr2));