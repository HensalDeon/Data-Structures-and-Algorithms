let array = [-5, 2, 10, 4, 6, 7, 3];
let target = 10;
// function sorting(array,binarySearch) {
//     //sorting
//     let temp;
//     for(let i = 0; i < array.length-1; i++){
//         for(let j = i+1; j < array.length; j++){
//             if (array[i] > array[j]) {
//               temp = array[i];
//               array[i] = array[j];
//               array[j] = temp;
//             }
//         }
//     }
//     let sortedArr = array;
//     console.log(`Sorted array : [ ${sortedArr} ]`);
//     return binarySearch(sortedArr,target);
// }

function sorting(array, binarySearch) {
    let sortedArr = array.sort((a, b) => {
        b - a;
    });
    return binarySearch(sortedArr, target);
}

function binarySearch(sortedArr, target) {
    let leftIndex = 0;
    let rightIndex = sortedArr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === sortedArr[middleIndex]) {
            return middleIndex;
        }
        if (target < sortedArr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}
console.log(`element was found at index position :${sorting(array, binarySearch)}`);
//O(log n)t O(1)s
