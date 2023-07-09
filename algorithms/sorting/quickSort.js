const arr = [10, 8, 11, 13, 7, 16, 12];

const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const partition = (l, h) => {
    let i = l,
        j = h;
    while (i < j) {
        while (arr[i] <= arr[l]) {
            i++;
        }
        while (arr[j] > arr[l]) {
            j--;
        }
        if (i < j) swap(i, j);
    }
    swap(l, j);
    return j;
};
const quickSort = (l, h) => {
    if (l < h) {
        const pivot = partition(l, h);
        quickSort(l, pivot - 1);
        quickSort(pivot + 1, h);
    }
};

quickSort(0, arr.length - 1);
console.log(arr);