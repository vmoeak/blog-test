function min(numbers) {
    if (numbers.length > 2) {
        let temp = min(numbers.slice(1));
        return numbers[0] <  temp ? numbers[0] : temp;
    }
    return Math.min.apply(null, numbers);
}

let res = min([-1,1,8,-2,1,-1]);
console.log(res);

function sort(numbers) {
    if (numbers.length >2) {
        let min = Math.min.apply(null, numbers);
        let index = numbers.indexOf(min);
        numbers.splice(index, 1);
        return [min].concat(sort(numbers));
    }
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
}

let sortedList = sort([-1,3,9,1,0]);
console.log(sortedList);
