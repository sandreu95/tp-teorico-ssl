function busqueda_binaria(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target)
            return mid;
        if (target < nums[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 17];
var start = Date.now();
var posicion = busqueda_binaria(numbers, 10);
console.log(posicion);
var end = Date.now();
console.log("Execution time: ".concat((end - start) / 1000, " s"));
