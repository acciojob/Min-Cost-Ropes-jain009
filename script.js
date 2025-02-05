function mincost(arr)
{ 
//write your code here
// return the min cost
      if (arr.length <= 1) return 0; // No cost if only one rope
    
    arr.sort((a, b) => a - b);
    let totalCost = 0;
  while (arr.length > 1) {
        // Extract the two smallest ropes
        const a = arr.shift();
        const b = arr.shift();
        const sum = a + b;
        totalCost += sum;
	  const insertIndex = binarySearch(arr, sum);
        arr.splice(insertIndex, 0, sum);
    }
    
    return totalCost;
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length;
    
    while (low < high) {
        const mid = (low + high) >> 1;
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
}
}

module.exports=mincost;
