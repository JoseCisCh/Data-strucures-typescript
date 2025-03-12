var arr = [12, 45, 33, 22, 56, 1, 8, 3, 55, 32];
for (var i = 0; i < arr.length; i++) {
    var swap = false;
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swap = true;
        }
    }
    if (!swap)
        break;
}
console.log(arr);
