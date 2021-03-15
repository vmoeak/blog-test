function selectedSort(numbers) {
    for(let i = 0; i< numbers.length - 1; i++){
        let index = min(numbers.slice(i)) + i;
        if (i !== index) {
            swap(numbers, i, index);
        }
    }
    return numbers;
}

function min(numbers) {
    let index = 0;
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] < numbers[index]) index = i;
    }
    return index;
}

function swap(numbers, a, b){
    let temp = numbers[a];
    numbers[a] = numbers[b];
    numbers[b] = temp;
}

function quickSorted(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
    let middleIndex = Math.floor(numbers.length / 2);
    let left = [];
    let right = [];
    let middle = numbers.splice(middleIndex, 1)[0];
    for (let i = 0; i< numbers.length; i++){
        if (numbers[i] < middle){
            left.push(numbers[i]);
        }else {
            right.push(numbers[i]);
        }
    }
    return quickSorted(left).concat(middle, quickSorted(right));
}

function mergeSorted(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
    let middle = Math.floor(numbers.length / 2);
    let left = numbers.slice(0, middle);
    let right = numbers.slice(middle);
    return merge(mergeSorted(left), mergeSorted(right));
}

function merge(a, b) {
    if (a.length === 0) return b;
    if (b.length === 0) return a;
    if (a[0] < b[0]) {
        return [].concat(a[0], merge(a.slice(1), b));
    }else {
        return [].concat(b[0], merge(a, b.slice(1)));
    }
}

function countSored(numbers) {
    let hashTable = {};
    let max = numbers[0];
    let sortedNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) max = numbers[i];
        if (hashTable[numbers[i]]) {
            hashTable[numbers[i]]++;
        }else {
            hashTable[numbers[i]] = 1;
        }
    }
    for(let i = 0; i <= max; i++){
        if (i in hashTable) {
            for (let j =0; j < hashTable[i]; j++){
                sortedNumbers.push(i);
            }
        }
    }
    return sortedNumbers;
}












