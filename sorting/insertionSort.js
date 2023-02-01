const array = [8, 20, -2, 4, 6];
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let number = array[i];

        let j = i - 1;

        while (j >= 0 && array[j] > number) {
            array[j + 1] = array[j];

            j--;
        }
        array[j + 1] = number;
    }

    return array;
}
console.log(insertionSort(array));

//recursive Insertion Sort
function recursiveInsertionSort(array, n) {
    if (n <= 1) {
        return array;
    }

    recursiveInsertionSort(array, n - 1);

    let last = array[n - 1];
    let j = n - 2;

    while (j >= 0 && array[j] > last) {
        array[j + 1] = array[j];
        j--;
    }

    array[j + 1] = last;

    return array;
}

console.log(recursiveInsertionSort(array, array.length));
