const array = [8, 20, -2, 4, -6];

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
    return array;
}
console.log(bubbleSort(array));


//Recursive bubble sort
function recursiveBubbleSrt(array) {
     return recBubblesort(array, array.length);
    
}

function recBubblesort(array, l) {
    if (l === 1) {
        return array;
    } else {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < l - 1; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                }
            }
            recBubblesort(array, l - 1);
        } while (swapped === true);
    }
    return array
}
console.log(recursiveBubbleSrt(array));

