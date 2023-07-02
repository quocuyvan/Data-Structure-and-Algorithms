const merge = (left, right) => {
    let i = 0;
    j = 0;
    result = [];
    while (i <= left.length - 1 && j <= right.length - 1) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = arr => {
    const len = arr.length;
    if (len <= 1) return arr;
    const mid = Math.floor(len / 2 );
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

// console.log(merge([7, 8, 9], [2, 3]));
console.log(mergeSort([7, 2, 6, 9, 3, 5, 8]));
