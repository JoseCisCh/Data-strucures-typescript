function mergeSort(arr, start, end) {
    console.log('Merge sort being called...');
    if (start < end) {
        var mid = start + Math.floor((end - start) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}
function merge(arr, start, mid, end) {
    var l = mid - start + 1;
    var r = end - mid;
    var leftArr = Array(mid - start + 1);
    var rightArr = Array(end - mid);
    for (var i_1 = 0; i_1 < l; i_1++) {
        leftArr[i_1] = arr[start + i_1];
    }
    for (var i_2 = 0; i_2 < r; i_2++) {
        rightArr[i_2] = arr[mid + 1 + i_2];
    }
    var i = 0;
    var j = 0;
    var k = start;
    while (i < l && j < r) {
        if (leftArr[i] < rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        else {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
    while (i < l) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < r) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}
var arr = [94, 33, 54, 75, 66, 32, 17, 10, 48, 9, 1, 86, 11];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
