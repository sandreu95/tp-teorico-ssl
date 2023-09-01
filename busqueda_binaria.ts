function busqueda_binaria(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
  
    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) return mid;
      if (target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
  
    return -1;
  }
  
  const numbers: number[] = [1,2,3,4,5,6,7,8,9,10,15,17];
  const start = Date.now();
  
  const posicion: number = busqueda_binaria(numbers,10);
  console.log(posicion);
  
  const end = Date.now();
  console.log(`Execution time: ${(end - start)/1000} s`);